import Project from 'components/project';
import Head from 'next/head';
import React, { ReactElement } from 'react';

import Header from '../components/header';

const IndexPage = (): ReactElement => (
  <>
    <Head>
      <title>Derek Ni</title>
    </Head>
    <div className="bg-sky-50 min-h-screen">
      <Header />
      <div className="text-5xl font-bold pt-4 text-center">Hi! I'm Derek.</div>
      <div className="text-2xl font-bold py-8 text-center">
        Studying CS at Cornell.
        <br></br>Prev @ Asana, Fizz (YC S21), Amazon, Tesla.
      </div>
      <div className="flex-col flex items-center pb-12">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
          }}
        >
          <div>
            <Project
              image="img/Minto.gif"
              link="https://chrome.google.com/webstore/detail/minto/hcgkjlalkeaekjkelpilagbjcengeebl"
              name="Minto"
              description="A Chrome extension that gamifies productivity by the minute. Earn a mint for every minute you work. Spend mints on rewards you create."
            ></Project>
            <Project
              image="img/tasktime.png"
              link="https://apps.apple.com/us/app/tasktime-boost-productivity/id1424966230?ls=1"
              name="TaskTime"
              description="A gamified to-do list app. Earn points for completing tasks and habits, and spend them on custom rewards."
            ></Project>
          </div>
          <div>
            <Project
              image="img/ascii.gif"
              link="https://github.com/derekni/ascii-stream"
              name="Ascii Stream"
              description="No more laggy video calls! Ascii Stream uses ASCII art instead of video to save on bandwidth. 2nd Best Overall Hack for IvyHacks 2020."
            ></Project>
            <Project
              image="img/jimmyjumper.png"
              link="https://apps.apple.com/us/app/jimmy-jumper-a-jumping-game/id1519102869"
              name="Jimmy Jumper"
              description="An endless running and jumping iOS game."
            ></Project>
          </div>
          <div>
            <Project
              image="img/johnnyjumper.png"
              link="https://apps.apple.com/us/app/johnny-jumper/id1516182300?platform=ipad"
              name="Johnny Jumper"
              description="A simple and fun iOS jumping game that just requires tapping. Tap your way to the top!"
            ></Project>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default IndexPage;
