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
      <div className="grid grid-cols-1 tablet:grid-cols-2 px-8 tablet:px-16 laptop:px-28 phone:mb-4 tablet:mb-6 laptop:mb-8">
        <div>
          <div className="text-2xl tablet:text-3xl laptop:text-4xl font-semibold">
            Hey there <a href="secret">👋🏼</a>
          </div>
          <div className="tablet:pr-16 text-sm tablet:text-base laptop:text-lg py-2 tablet:py-4 laptop:py-6">
            I'm Derek, a Cornell senior studying Computer Science in Ithaca, NY.
            I'm passionate about learning and creating. I have a variety of side
            projects which were geeky solutions to problems I faced (mainly for
            studying), which include a Chrome extension and mobile app for
            productivity, an MCAT bot, and a few simple mobile games. I'm
            currently working on creating a new productivity app to integrate
            with my Chrome extension, Minto.
          </div>
          <div className="tablet:pr-16 text-sm tablet:text-base laptop:text-lg mb-2 tablet:mb-4 laptop:mb-6">
            As a tech dude, I spend way too much time in front of screens, so I
            try to avoid them in my free time as much as I can. In my free time
            I listen to podcasts, play tennis, beat my friends at ping pong,
            cook fancy dinners with them, and take their money in poker. I'm
            currently learning how to play piano and expand my culinary skills
            outside of fancy pastas. I'm also an avid reader. My favorite books
            are Can't Hurt Me and Atomic Habits, and I'm currently reading
            Dopamine Nation.
          </div>
          <div className="tablet:pr-16 text-sm tablet:text-base laptop:text-lg phone:mb-4 tablet:mb-0">
            After a 180-day dopamine detox during lockdown, I learned so much
            more about myself, what makes me happy, and how addicting
            self-improvement can be. I believe there is always room to grow.
            I've tried meditation, yoga, running, lifting, and journaling. Reach
            out to me if you have any questions about these, or if there's
            something cool I haven't tried yet!
          </div>
        </div>
        <img src="img/skydiving.jpg" className="rounded-lg" />
      </div>
      <TextCycler
        intro="Ask me about "
        descriptions={[
          'productivity hacks.',
          'biohacking.',
          'psychology podcasts.',
          'taking a dopamine detox.',
          'running.',
          'amateur cooking recipes.',
          'journaling.',
          'meditating.',
        ]}
      />
      <Footer />
    </div>
  </>
);

export default aboutme;
