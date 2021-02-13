import Head from 'next/head';
import React, { ReactElement } from 'react';

const IndexPage = (): ReactElement => (
  <>
    <Head>
      <title>dni</title>
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
      <div className="text-5xl font-bold py-16 text-center">Hi! I'm Derek.</div>
      <div className="text-2xl font-bold pb-3 text-center">Projects</div>
      <div className="flex-col flex">
        <a
          className="text-2xl font-bold pb-3 text-center text-blue-500"
          href="https://chrome.google.com/webstore/detail/minto/hcgkjlalkeaekjkelpilagbjcengeebl"
        >
          Minto
        </a>
        <a
          className="text-2xl font-bold pb-3 text-center text-blue-500"
          href="https://github.com/derekni/ascii-stream"
        >
          Ascii Stream
        </a>
        <a
          className="text-2xl font-bold pb-3 text-center text-blue-500"
          href="https://apps.apple.com/us/app/jimmy-jumper-a-jumping-game/id1519102869"
        >
          Jimmy Jumper
        </a>
        <a
          className="text-2xl font-bold pb-3 text-center text-blue-500"
          href="https://apps.apple.com/us/app/johnny-jumper/id1516182300?ls=1"
        >
          Johnny Jumper
        </a>
        <a
          className="text-2xl font-bold pb-3 text-center text-blue-500"
          href="https://apps.apple.com/us/app/tasktime-boost-productivity/id1424966230?ls=1"
        >
          TaskTime
        </a>
      </div>
    </div>
  </>
);

export default IndexPage;
