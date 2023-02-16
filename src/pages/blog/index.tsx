import Footer from 'components/footer';
import Project from 'components/project';
import TextCycler from 'components/textCycler';
import Head from 'next/head';
import React, { ReactElement } from 'react';

import Header from '../../components/header';

const BlogHomepage = (): ReactElement => {
  return (
    <>
      <Head>
        <title>Derek Ni</title>
      </Head>
      <div className="bg-slate-50 min-h-screen">
        <Header />
        <TextCycler
          intro=""
          descriptions={['Hi, welcome to my blog.', 'Hi, welcome to my blog.']}
        />
        <div className="flex-col flex items-center">
          <div className="grid grid-cols-3">
            <div>
              <Project
                image=""
                link="/blog/rediscovering"
                name="Rediscovering Myself During a Global Pandemic"
                description="A pandemic reflection."
              ></Project>
              <div className="pb-1" />
            </div>
            <div>
              <Project
                image=""
                link="/blog/songs"
                name="My Favorite Songs"
                description="Music is a huge part of my life. Here are some of my favorite songs."
              ></Project>
              <div className="pb-1" />
            </div>
            <div></div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default BlogHomepage;
