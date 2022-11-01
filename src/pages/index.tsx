import Footer from 'components/footer';
import Project from 'components/project';
import Head from 'next/head';
import React, { ReactElement } from 'react';

import Header from '../components/header';

const IndexPage = (): ReactElement => {
  const colors = ['#17252A', '#2B7A78', '#3AAFA9', '#DEF2F1', '#FEFFFF'];
  return (
    <>
      <Head>
        <title>Derek Ni</title>
      </Head>
      <div className="bg-slate-50 min-h-screen">
        <Header />
        <div className="text-5xl font-bold pt-4 text-center">
          Hi, I'm Derek 👋🏼
        </div>
        <div className="text-2xl font-bold py-8 text-center">
          Studying CS at Cornell.
          <br></br>Prev @ Asana, Fizz (YC S21), Amazon, Tesla.
        </div>
        <div className="flex-col flex items-center">
          <div className="grid grid-cols-3">
            <div>
              <Project
                image="img/Minto.gif"
                link="https://chrome.google.com/webstore/detail/minto/hcgkjlalkeaekjkelpilagbjcengeebl"
                name="Minto"
                description="A Chrome extension that gamifies productivity by the minute. Earn a mint for every minute you work. Spend mints on rewards you create."
              ></Project>
              <div className="pb-1" />
              <Project
                image="img/johnny-jumper.gif"
                link="https://apps.apple.com/us/app/johnny-jumper/id1516182300?platform=ipad"
                name="Johnny Jumper"
                description="A simple and fun iOS jumping game that just requires tapping. Tap your way to the top! Note: used to be on the App Store."
              ></Project>
            </div>
            <div>
              <Project
                image="img/ascii.gif"
                link="https://github.com/derekni/ascii-stream"
                name="Ascii Stream"
                description="No more laggy video calls! Ascii Stream uses ASCII art instead of video to save on bandwidth. 2nd Best Overall Hack for IvyHacks 2020."
              ></Project>
              <div className="pb-1" />
              <Project
                image="img/jimmy-jumper.gif"
                link="https://apps.apple.com/us/app/jimmy-jumper-a-jumping-game/id1519102869"
                name="Jimmy Jumper"
                description="An endless running and jumping iOS game. Note: used to be on the App Store."
              ></Project>
            </div>
            <div>
              <Project
                image="img/tasktime.jpg"
                link="https://github.com/derekni/tasktime"
                name="TaskTime"
                description="A gamified to-do list app. Earn points for completing tasks and habits, and spend them on custom rewards. Note: this used to be on the App Store but since I didn't renew my developer license, Apple took all my apps off the App Store."
              ></Project>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default IndexPage;
