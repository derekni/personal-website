import Footer from 'components/footer';
import Header from 'components/header';
import Head from 'next/head';
import React, { ReactElement } from 'react';

const secret = (): ReactElement => (
  <>
    <Head>
      <title>Secret Page!</title>
    </Head>
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <div className="text-5xl flex items-center flex-col">
        WORK IN PROGRESS 🤫
      </div>
      <br></br>
      <div className="flex items-center flex-col">
        <img src="img/contemplation.JPG" style={{ width: 450 }}></img>
        <a href="https://open.spotify.com/user/1244367287?si=e681f381a1fe40e4">
          Check out my Spotify playlists (hyperlinked)!
        </a>
      </div>
      <Footer />
    </div>
  </>
);

export default secret;
