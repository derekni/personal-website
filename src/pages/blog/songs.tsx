import Head from 'next/head';
import React, { ReactElement } from 'react';

import Header from '../../components/header';

const FavoriteSongsPost = (): ReactElement => (
  <>
    <Head>
      <title>Favorite songs</title>
    </Head>
    <div className="bg-gray-50 min-h-screen pb-16">
      <Header />
      <div className="text-4xl font-semibold pb-12 text-center">
        My Favorite Songs
      </div>
      <div className="text-lg px-36 pb-4">
        Music and podcasts are a huge part of my life. Whenever I'm working out,
        I'm either listening to a podcast by Huberman Lab or Hidden Brain, or
        playing whatever song I'm obsessed with on repeat. Some of my favorite
        songs, sorted by vibe, are:
      </div>
      <div className="pl-36 pr-16 text-lg mb-6">
        R&B: The Color Violet - Tory Lanez, Girls Love Rod Wave - Scorey, Don't
        Go - Yatta Bandz, Street Lights - Kanye, Summer Games - Drake
        <br></br>
        Hip Hop: All the Smoke - Tyla Yaweh, Swervin - A Boogie Wit da Hoodie,
        Blueberry Faygo - Lil Mosey, Blue Notes - Meek Mill, Kamikaze - Lil
        Mosey, Runaway - Kanye
        <br></br>
        Pop: First Time - ILLENIUM, Colorado Boulder - charlieonnafriday, ONE
        PUNCH - Aries, Sweet & Sour - Jawsh 685, Love Yourself - Justin Bieber,
        NUMB - Chri$tian Gate$, After Hours - charlieonnafriday, FourFiveSeconds
        - Rihanna, Location - Khalid, Growing Up - Macklemore
        <br></br>
        Sad boy: Just Like U - Yung Pinch, We Won't - Jaymes Young, like i need
        u - keshi, fuck, i'm lonely - Lauv
        <br></br>
        Old school: Run This Town - JAY-Z, Empire State Of Mind - JAY-Z, Power
        Trip - J. Cole, Love The Way You Lie - Eminem, Bound 2 - Kanye, Coming
        Home - Diddy
        <br></br>
        Emo: six speed - ROLE MODEL, Nobody Knows - Russ, Jocelyn Flores -
        XXXTentacion, Kiss Fight - Tulpa
        <br></br>
        K-pop: LOVE SCENARIO - iKON, Spring Day - BTS
      </div>
    </div>
  </>
);

export default FavoriteSongsPost;
