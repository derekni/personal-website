import { ReactElement } from 'react';

const IndexPage = (): ReactElement => {
  return (
    <div className="">
      <img src="img/1.png" className="w-full" />
      <img src="img/2.png" className="w-full" />
      <img src="img/3.png" className="w-full" />
      <img src="img/4.png" className="w-full" />
      <img src="img/5.png" className="w-full" />
      <div className="text-5xl bg-gray-100 font-semibold text-center pt-20 pb-12">
        Redefine productivity.
      </div>
      <ul className="text-2xl bg-gray-100 text-center pb-12 list-disc">
        <li className="mb-0.5">Earn a mint for every minute worked.</li>
        <li className="mb-0.5">Spend mints on rewards you create.</li>
        <li className="mb-0.5">Customize work timers and notifications.</li>
        <li className="mb-0.5">Block specific sites when working.</li>
      </ul>
      <div className="text-3xl bg-gray-100 font-semibold text-center pb-20">
        Change the way you work.
      </div>
    </div>
  );
};

export default IndexPage;
