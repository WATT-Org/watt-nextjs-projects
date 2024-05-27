import React, { useState, useEffect } from 'react';
import { IoChevronBackCircleSharp, IoChevronForwardCircle } from "react-icons/io5"
import Link from 'next/link';
import * as fs from 'fs';
const Slug = (props) => {
  const Blog = props.myBlog


  return (
    <div className='flex flex-col w-full items-center bg-gray-400 md:p-28 p-4'>
      <main className='flex flex-col items-center bg-white md:p-16 p-8 md:mx-16 rounded' data-aos="zoom-in">
        <h1 className='text-2xl font-bold font-serif'>{Blog && Blog.title}</h1>
        <div className='flex w-full  items-center rounded'>
          <Link href={`/blog`} className='text-lg '>
            <IoChevronBackCircleSharp className='md:p-4 p-2 md:text-7xl text-5xl text-gray-800 text-center' /></Link>
          {Blog && <div className="md:text-center text-gray-950 md:p-12   md:p-4 mt-4" >{Blog.content}</div>}
          <Link href={`/blog`} className='text-lg '>
            <IoChevronForwardCircle className='p-4 text-7xl text-gray-800 text-center' />
          </Link>
        </div>
      </main>
    </div>
  )
};

export async function getStaticPaths() {
  let allb = await fs.promises.readdir(`blogdata`)
  allb = allb.map((item) => {
    return { params: { slug: item.split(".")[0] } }
  })

  return {
    paths: allb,
    fallback: true
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`, 'utf-8')

  return {
    props: { myBlog: JSON.parse(myBlog) },
  }
}
export default Slug;
