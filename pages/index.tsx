import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import { sanityClient, urlFor } from "../sanity";
import { Post } from "../typings";

import { Header } from "../components/Header";
import { Posts } from '../components/Posts';


type Props = {
  posts: [Post]
};

const Home = ({ posts }: Props) => {

  return (
    <div className="">
      <Head>
        <title>Next.js App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className='flex justify-between items-center bg-yellow-300 border-black px-24'>
        <div className='mx-auto py-5 justify-items-center'>
          <h1 className='mb-3 text-6xl max-w-2xl font-serif'>
            <span className='underline decoration-4'>Next.js</span> with <span className='underline decoration-4'>sanity.io</span>
          </h1>
          <h2 className='text-3xl font-serif max-w-2xl'>
            It's React Framework and very useful dataset
          </h2>
        </div>

        <img 
          className='hidden md:inline-flex h-32 lg:h-96'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1200px-Nextjs-logo.svg.png'
          alt="logo" />
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6 border-black'>
        {posts.map((post) => (
          <Link key={post._id} href={`/post/${post.slug.current}`}>
            <div className='border rounded-lg group cursor-pointer overflow-hidden'>
              <img 
                className='h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out' 
                src={urlFor(post.mainImage.asset)?.url()} 
                alt="mainImage" 
              />
              <div className='flex justify-content items-center px-5 py-2 bg-blue-100 font-serif'>
                <img 
                  className='h-12 w-12 mr-5 rounded-full' 
                  src={urlFor(post.author.image)?.url()} 
                  alt="authorImage" 
                />

                <div className='sm:'>
                  <p className='font-bold underline decoration-1'>{post.title}</p>
                  <p>{post.description}</p>
                  <p>{post.description} by {post.author.name}</p>
                </div>
              </div>
            </div>  
          </Link>
        ))}
      </div>
    </div>
  )
};

export default Home;

export const getServerSideProps = async() => {
  const query = `*[_type == "post"]{
    _id,
    title,
    slug,
    description,
    mainImage,
    body,
    author -> {
      name,
      image
    },
  }`;

  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts
    }
  }
};
