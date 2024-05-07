import Footer from 'components/footer';
import Project from 'components/project';
import TextCycler from 'components/textCycler';
import Head from 'next/head';
import React, { ReactElement } from 'react';

import Header from '../../components/header';

import Title from './title';

const BlogHomepage = (): ReactElement => {
  return (
    <>
      <Head>
        <title>Derek Ni</title>
      </Head>
      <div className="bg-slate-50 min-h-screen">
        <Header />
        <Title text="Hi, welcome to my blog." />
        <div className="flex-col flex items-center pt-1 tablet:pt-4 laptop:pt-7">
          <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 ">
            <Project
              image="img/reflection.png"
              link="/blog/rediscovering"
              name="Rediscovering Myself During a Global Pandemic"
              description="A pandemic reflection."
            ></Project>
            <Project
              image="img/music monkey.png"
              link="/blog/songs"
              name="My Favorite Songs"
              description="Music is a huge part of my life. Here are some of my favorite songs."
            ></Project>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default BlogHomepage;
