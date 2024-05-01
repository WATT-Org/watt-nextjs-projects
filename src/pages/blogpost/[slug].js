import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'

import * as fs from 'fs';
const Slug = (props) => {
  const Blog = props.myBlog


  return <div className='flex flex-col items-center bg-gray-400 p-4'>
    <main className='flex flex-col items-center bg-gray-800 mx-24 rounded-lg'>
      <h1 className='text-2xl font-bold text-gray-200 p-8'>{Blog && Blog.title}</h1>
      <hr />
      {Blog && <div className="text-center p-16 text-gray-300" >{Blog.content}</div>}
    </main>
  </div>;
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
