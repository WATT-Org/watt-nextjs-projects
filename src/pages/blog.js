
import React from 'react';
import Link from 'next/link';
import * as fs from 'fs';
import Image from 'next/image';


const Blog = (props) => {
  return (
    <div className=' flex md:flex-row w-full flex-col items-center p-24 bg-gray-400'>
      <main className='flex felx-col md:flex-row  items-center  gap-2'>
        {
          props.allBlogs.map((blogitem) => {
            return (
              <Link href={`/blogpost/${blogitem.slug}`} key={blogitem.slug} legacyBehavior  className='flex md:flex-row flex-col'>
                <div className='flex flex-col p-4 items-center  bg-white rounded-lg cursor-pointer'>
                  <div className='flex flex-col  p-4'>
                    <Image src={blogitem.image} height={566} width={1080} alt='BlogPost' className='h-auto w-auto border-gray-400 border-2 rounded-lg' />
                    <Link href={`/blogpost/${blogitem.slug}`}>
                      <h3 className='font-bold text-2xl p-2 text-slate-800 text-center'>{blogitem.title}</h3>
                    </Link>
                    <p className='font-semibold text-gray-800'>{blogitem.content.substr(0, 120)}...</p>
                    <Link href={`/blogpost/${blogitem.slug}`}><button className='text-blue-700'>Read More</button></Link>
                  </div>
                </div>
              </Link>
            )
          }
          )
        }
      </main>
    </div>
  )
};

export async function getStaticProps(context) {

  let data = await fs.promises.readdir("blogdata");
  let allCount = data.length;
  let myfile;
  let allBlogs = [];
  for (let index = 0; index < allCount; index++) {
    const item = data[index];
    myfile = await fs.promises.readFile(('blogdata/' + item), 'utf-8')
    allBlogs.push(JSON.parse(myfile))
  }

  return {
    props: { allBlogs, allCount },
  }
}

export default Blog;