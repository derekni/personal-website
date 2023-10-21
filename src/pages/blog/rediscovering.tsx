import Head from 'next/head';
import React, { ReactElement } from 'react';

import Header from '../../components/header';

import Title from './title';

const RediscoveringBlogPost = (): ReactElement => (
  <>
    <Head>
      <title>Blog</title>
    </Head>
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <Title>Rediscovering myself during a global pandemic</Title>
      <div className="text-lg px-36 pb-4">
        During the pandemic, I was lucky enough to have all of my basic needs
        met. Being stuck at home gave me a lot of time and space to reflect on
        my life, and get back in touch with myself.
      </div>
      <div className="text-xl px-36 pb-4 pt-2 font-semibold">
        Diminishing Returns
      </div>
      <div className="text-lg px-36 pb-4">
        I began the pandemic like most people, spending the first few weeks
        really enjoying myself. There's an endless stream of entertainment
        online through video games and TV, and I thought I could never get sick
        of it. But somewhere along the way, I found myself everything dull and
        unfulfilling. I kept hopping from show to show, game to game, but I just
        didn't enjoy entertainment anymore. I was reminded of the concept of
        diminishing returns from Microeconomics, and I realized the more TV I
        watched, the less I enjoyed it. The more video games I played, the less
        I enjoyed them. To start enjoying entertainment again, I needed to try
        something new.
      </div>
      <div className="text-xl px-36 pb-4 pt-2 font-semibold">
        Dopamine Detox
      </div>
      <div className="text-lg px-36 pb-4">
        I began exploring the psychology behind entertainment and why people
        enjoy it, and came upon the 'dopamine detox'. Basically, people are
        hardwired to find a baseline level of happiness, and always return to
        it, regardless of circumstance. That's why someone who eats Michelin
        star food everyday isn't objectively happier than someone who eats
        regular food daily. It just becomes their new normal. This was what had
        happened to me with entertainment. I was so used to watching amazing
        shows, that it was just my new normal. To truly enjoy them again, I
        needed to take a break.
      </div>
      <div className="text-lg px-36 pb-4">
        I decided to take a month long break from all digital entertainment. No
        TV, no video games, no music. It wasn't easy, but after hearing about
        all the benefits of a dopamine detox, I knew I had to try it. A dopamine
        detox wouldn't just help me enjoy TV again. It would reduce the baseline
        levels for everything. This meant I would enjoy food more, spending time
        with family more, anything and everything. I would even enjoy(?)
        studying more!
      </div>
      <div className="text-lg px-36 pb-4">
        My first week was difficult. I felt a literal itch for entertainment,
        for any sort of stimulation. To keep myself occupied I started pursuing
        non-digital hobbies, mainly piano and running. But somewhere in the
        second week, it became a breeze. I didn't feel that itch anymore. I
        actually loved time away from technology. Colors seemed sharper. Food
        tasted better. I felt more present with my family when we ate dinner
        together. I found a new normal.
      </div>
      <div className="text-xl px-36 pb-4 pt-2 font-semibold">Running</div>
      <div className="text-lg px-36 pb-4">
        During my dopamine detox I decided to pick up running. I had recently
        read 'Cant Hurt Me', which made me realize I was leaving too much on the
        table. I wanted to see how far I could push myself, so I started
        running, and set a goal to run a sub-5:00 mile (my fastest mile was a
        6:57 in elementary school). I knew it was a crazy goal, but I had never
        had the courage to set a goal out of reach. Nothing is more painful than
        trying your hardest for something and failing, so I had always stayed in
        my comfort zone.
      </div>
      <div className="text-lg px-36 pb-4">
        I ran every single morning, using Saturdays as my timed mile day. I ran
        every morning at 8 AM, no matter what. But I made progress way faster
        than I expected. I started off with a 6:14 mile, which was already
        pretty good (I had been jogging on a regular basis in quarantine). As
        the weeks went by, I learned a lot about how far I could push myself
        (hint: it's always more than you think). For four months I ran
        consistently, pushing myself to the limit every day. It also was a great
        start to my day. Nothing feels better than finishing an intense workout.
      </div>
      <div className="text-lg px-36 pb-4">
        In the first month I pushed myself a little too hard. I had low blood
        pressure for a while. Every time I stood up, I would black out for a
        second. I also lost ten pounds, even though I was already in shape (some
        of it was muscle though). It's easy to want to go all out every workout,
        but sometimes you need to rest, so I scheduled in easier runs to let my
        body recover.
      </div>
      <div className="text-lg px-36 pb-4">
        I decided to stop running in winter, when the air got cold and my lungs
        would burn after a tough run. I had a PR of 5:25.6 (which also had
        uphill portions and pedestrians I had to avoid). Though I didn't hit my
        goal, I had proven to myself how much I could push myself, and am happy
        with my results.
      </div>
      <div className="text-xl px-36 pb-4 pt-2 font-semibold">Meditating</div>
      <div className="text-lg px-36 pb-4">
        During my dopamine detox, I also began meditating. I mainly did it to
        train my mind, because I heard meditating could physically change the
        brain. A lot of people train the body, but not many train the mind. I
        started off with Headspace, and did the free ten days, then moved onto
        the Headspace Pro with a student discount. Meditating seems easy, all
        you have to do is sit there. At the very least, it's easier than going
        for a run, right?
      </div>
      <div className="text-lg px-36 pb-4">
        I found meditating to be one of the hardest activity to pick up. It was
        difficult to keeping my mind from drifting, but over time I got the hang
        of it. And even though the sessions were hard, I alwasy felt amazing
        after a session, especially when I felt stressed beforehand. Meditating
        made me more aware of my body, increased my focus, and helped me be
        present in the moment. An interesting side effect is I'm more aware of
        how groggy I feel after eating junk food, and my diet has improved
        considerably. Greasy food tastes good in the moment, but when you don't
        have the energy to do anything for hours afterward, it's not worth it
        (not to mention the health problems junk food causes). Getting in touch
        with your body makes you realize just how bad some foods are.
      </div>
    </div>
  </>
);

export default RediscoveringBlogPost;
