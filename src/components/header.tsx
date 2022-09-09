import { ReactElement } from 'react';

const Header = (): ReactElement => (
  <div className="flex flex-1 justify-between px-16 py-10">
    <a href="/" className="text-3xl text-center font-semibold pl-2">
      Derek Ni
    </a>
    <div className="pr-2">
      <a
        href="/resume.pdf"
        className="pr-2 p-3.5 text-lg font-semibold justify-center"
      >
        Resume
      </a>
      <a
        href="/aboutme"
        className="pr-4 p-3.5 text-lg font-semibold justify-center"
      >
        About Me
      </a>
    </div>
  </div>
);
export default Header;
