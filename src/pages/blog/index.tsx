import Head from 'next/head';
import React, { ReactElement } from 'react';

const IndexPage = (): ReactElement => (
  <>
    <Head>
      <title>Blog</title>
    </Head>
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-gray-500 flex flex-1 shadow-sm justify-between">
        <a
          href="/"
          className="pl-4 p-3 text-3xl text-center font-semibold text-white"
        >
          dni
        </a>
        <div className="p-4">
          <a
            href="/blog"
            className="pr-2 p-3.5 text-xl font-semibold text-white justify-center"
          >
            Blog
          </a>
          <a
            href="/aboutme"
            className="pr-4 p-3.5 text-xl font-semibold text-white justify-center"
          >
            About Me
          </a>
        </div>
      </div>
      <div className="text-4xl font-bold pt-16 pb-12 text-center">
        Some personal reflections.
      </div>
      <div className="flex-col flex">
        <a
          className="text-2xl font-bold pb-3 text-center text-blue-500"
          href="blog/rediscovering"
        >
          Rediscovering myself during a global pandemic
        </a>
      </div>
    </div>
  </>
);

export default IndexPage;
