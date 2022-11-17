import Footer from 'components/footer';
import Header from 'components/header';
import TextCycler from 'components/textCycler';
import Head from 'next/head';
import React, { ReactElement } from 'react';

const aboutme = (): ReactElement => (
  <>
    <Head>
      <title>About Me</title>
    </Head>
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <div className="grid grid-cols-2 px-16">
        <div>
          <div className="text-5xl pl-36 pb-2 font-semibold">Hey there 👋🏼</div>
          <div className="pl-36 pr-16 text-lg py-6">
            I'm Derek, a Cornell senior studying Computer Science in Ithaca, NY.
            In the past I have interned at Asana on the Track Anything team,
            Fizz (a YC startup) as a backend engineer, Amazon on the Alexa
            Messaging Service team, and Tesla on the Mobile App team.
          </div>
          <div className="pl-36 pr-16 text-lg mb-6">
            I'm passionate about learning and creating. I have a variety of side
            projects which were solutions to problems I faced (mainly for
            studying), which include a Chrome extension and mobile app for
            productivity, as well as simple mobile games. In my free time I
            listen to podcasts, beat my friends at ping pong, and take their
            money in poker.
          </div>
          <div className="pl-36 pr-16 text-lg mb-16">
            I consider myself a self-improvement fanatic, and believe there is
            always room to grow. I've tried meditation, yoga, running, lifting,
            and journaling. Reach out to me if you have any questions about
            these, or if there's something cool I haven't tried yet!
          </div>
        </div>
        <div className="max-w-md">
          <img src="img/skydiving.jpg" className="rounded-lg" />
        </div>
      </div>
      <TextCycler
        intro="Ask me about "
        descriptions={[
          'productivity hacks.',
          'psychology podcasts.',
          'running.',
          'amateur cooking recipes.',
          'vitamins.',
          'journaling.',
          'meditating.',
          'anime.',
        ]}
      />

      <Footer />
    </div>
  </>
);

export default aboutme;
