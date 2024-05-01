import React from 'react';
import Link from 'next/link';
import * as fs from 'fs';
import Image from 'next/image';


const Blog = (props) => {
  return <div className=' flex flex-col items-center p-24 bg-gray-400'>
    <main className='flex felx-col items-center  '>
      {
        props.allBlogs.map((blogitem) => {
          return (
            <div key={blogitem.slug} className='flex flex-col p-4 items-center mx-24 bg-gray-800 rounded-lg'>
              <div className='flex flex-col  p-4'>
                <Image src={blogitem.image} height={100} width={100} alt='BlogPost' />
                <Link href={`/blogpost/${blogitem.slug}`}>
                  <h3 className='font-bold text-2xl p-2 text-gray-200'>{blogitem.title}</h3>
                </Link>
                <p className='font-semibold text-gray-300'>{blogitem.content.substr(0, 60)}...</p>
                <Link href={`/blogpost/${blogitem.slug}`}><button className='text-blue-700'>Read More</button></Link>
              </div>
            </div>
          )
        }
        )
      }

    </main>
  </div>
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