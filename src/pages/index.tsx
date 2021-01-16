import Head from 'next/head';
import { ReactElement } from 'react';

const IndexPage = (): ReactElement => (
  <>
    <Head>
      <title>DNI</title>
    </Head>
    <div className="bg-gray-100 flex flex-1 shadow-sm justify-between">
      <div className="pl-4 p-3 text-3xl text-center font-semibold">DNI</div>
      <div className="pr-4 p-3 text-xl font-semibold align-middle">
        <div>About Me</div>
      </div>
    </div>
    <div className="bg-gray-50 flex flex-1 w-full h-full"></div>
  </>
);

export default IndexPage;
