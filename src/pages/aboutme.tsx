import Head from 'next/head';
import React, { ReactElement } from 'react';

const aboutme = (): ReactElement => (
  <>
    <Head>
      <title>About Me</title>
    </Head>
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-gray-500 flex flex-1 shadow-sm justify-between">
        <a
          href="/"
          className="pl-4 p-3 text-3xl text-center font-semibold text-white"
        >
          DNI
        </a>
        <a
          href="/aboutme"
          className="pr-4 p-3.5 text-xl font-semibold text-white justify-center"
        >
          About Me
        </a>
      </div>
      <div className="text-3xl pl-28 pt-20 mb-2 font-semibold">WHO IS HE?!</div>
      <div className="px-28 text-lg mb-8">
        I am a Cornell undergraduate studying Computer Science. I'm passionate
        about learning, creating, and being outdoors. In my free time I listen
        to podcasts (my favorite is Hidden Brain), play ping pong, and goof off
        with friends.
      </div>
      <div className="text-3xl pl-28 mb-2 font-semibold">Music</div>
      <div className="px-28 text-lg mb-8">
        My favorite artists are Frank Ocean, Quinn XCII, and Khalid. My favorite
        song of all time is A Drop in the Ocean by Ron Pope. Some of my other
        favorites are Too Good by Drake, Location by Khalid, and Good Old Days
        by Macklemore. Favorite song to dance to: Teach Me How to Dougie by Cali
        Swag District.
      </div>
      <div className="text-3xl pl-28 mb-2 font-semibold">TV Shows</div>
      <div className="px-28 text-lg mb-8">
        My favorite movie of all time is Good Will Hunting. Honorable mentions
        include Kimi no Na Wa and Kung Fu Panda. My favorite shows are Attack on
        Titan, Tengen Toppa Gurren Lagann, and Iris.
      </div>
      <div className="text-3xl pl-28 mb-2 font-semibold">Books</div>
      <div className="px-28 text-lg mb-8">
        My favorite book of all time is The Great Gatsby. My other favorites
        include Gone With the Wind, Can't Hurt Me, and Atomic Habits.
      </div>
      <div className="text-3xl pl-28 mb-2 font-semibold">Hobbies</div>
      <div className="px-28 text-lg mb-16">
        I enjoy snowboarding, tennis, and ping pong with friends. When I'm not
        hanging out with my friends, you can often find me at the gym, exploring
        the great outdoors, or meditating. Though I do not particularly love
        running, I ran a 5:25.6 during the pandemic (might as well see how fast
        I can run if I can't go to the gym).
      </div>
    </div>
  </>
);

export default aboutme;
