import Footer from 'components/footer';
import Project from 'components/project';
import TextCycler from 'components/textCycler';
import Head from 'next/head';
import React, { ReactElement } from 'react';

import Header from '../components/header';

const IndexPage = (): ReactElement => {
  return (
    <>
      <Head>
        <title>Derek Ni</title>
      </Head>
      <div className="bg-slate-50 min-h-screen">
        <Header />
        <TextCycler
          intro="Hi, I'm "
          descriptions={[
            'Derek.',
            'a poker fanatic.',
            'a health nut.',
            'a ping pong player.',
            'an amateur chef.',
            'a nature seeker.',
            'a part-time runner.',
            'an aspiring hooper.',
            'a hobbyist snowboarder.',
          ]}
        />
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
                link="https://play.google.com/store/apps/details?id=com.nibrothers.johnnyjumper"
                name="Johnny Jumper"
                description="A simple and fun jumping game that just requires tapping. Tap your way to the top!"
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
                link="https://play.google.com/store/apps/details?id=com.NiBrothers.JimmyJumper&hl=en_US&gl=US"
                name="Jimmy Jumper"
                description="An endless running and jumping iOS game."
              ></Project>
            </div>
            <div>
              <Project
                image="img/tasktime.jpg"
                link="https://github.com/derekni/tasktime"
                name="TaskTime"
                description="A gamified to-do list app. Earn points for completing tasks and habits, and spend them on custom rewards."
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
