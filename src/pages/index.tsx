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
            'an amateur chef.',
            'a health nut.',
            'a ping pong player.',
            'a poker fanatic.',
            'a nature seeker.',
            'a part-time runner.',
            'an aspiring hooper.',
            'a hobbyist snowboarder.',
          ]}
        />
        <div className="text-lg tablet:text-xl laptop:text-2xl font-bold py-1 tablet:py-4 laptop:py-7 text-center">
          Building cool stuff at Asana.
          <br></br>Prev @ Fizz (YC S21), Amazon, Tesla.
        </div>
        <div className="flex-col flex items-center">
          <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3">
            <Project
              image="img/Minto.gif"
              link="https://chrome.google.com/webstore/detail/minto/hcgkjlalkeaekjkelpilagbjcengeebl"
              name="Minto"
              description="A Chrome extension that gamifies productivity by the minute. Earn a mint for every minute you work. Spend mints on rewards you create."
            ></Project>
            <Project
              image="img/ascii.gif"
              link="https://github.com/derekni/ascii-stream"
              name="Ascii Stream"
              description="No more laggy video calls! Ascii Stream uses ASCII art instead of video to save on bandwidth. 2nd Best Overall Hack for IvyHacks 2020."
            ></Project>
            <Project
              image="img/mcat logo.png"
              link="https://github.com/derekni/mcat-signup-bot"
              name="MCAT Bot"
              description="Bot hosted on EC2 instance to keep checking for MCAT location availabilities. Sends texts and calls to a specified number through Twilio when an appointment is available."
            ></Project>
            <Project
              image="img/tasktime.jpg"
              link="https://github.com/derekni/tasktime"
              name="TaskTime"
              description="A gamified to-do list app. Earn points for completing tasks and habits, and spend them on custom rewards."
            ></Project>
            <Project
              image="img/johnny-jumper.gif"
              link="https://play.google.com/store/apps/details?id=com.nibrothers.johnnyjumper"
              name="Johnny Jumper"
              description="A simple and fun jumping game that just requires tapping. Tap your way to the top!"
            ></Project>
            <Project
              image="img/jimmy-jumper.gif"
              link="https://play.google.com/store/apps/details?id=com.NiBrothers.JimmyJumper&hl=en_US&gl=US"
              name="Jimmy Jumper"
              description="An endless running and jumping iOS game."
            ></Project>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default IndexPage;
