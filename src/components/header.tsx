import { ReactElement } from 'react';

const Header = (): ReactElement => (
  <div className="flex flex-1 justify-between px-28 py-12">
    <a href="/" className="text-3xl text-center font-semibold pl-2">
      Derek Ni
    </a>
    <div className="">
      <a
        href="/resume.pdf"
        className="pr-6 p-3.5 text-lg font-semibold justify-center"
      >
        Resume
      </a>
      <a href="/aboutme" className="p-3.5 text-lg font-semibold justify-center">
        About Me
      </a>
    </div>
  </div>
);
export default Header;
