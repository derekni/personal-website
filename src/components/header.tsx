import { ReactElement } from 'react';

const Header = (): ReactElement => (
  <div className="flex flex-1 justify-between px-8 tablet:px-16 laptop:px-28 py-4 tablet:py-8 laptop:py-12">
    <a
      href="/"
      className="text-xl tablet:text-2xl laptop:text-3xl text-center font-semibold"
    >
      Derek Ni
    </a>
    <div className="font-semibold text-sm tablet:text-base laptop:text-lg">
      <a href="/resume.pdf" className="pr-2 tablet:pr-3 laptop:pr-3.5">
        Resume
      </a>
      <a href="/blog" className="px-2 tablet:px-3 laptop:px-3.5">
        Blog
      </a>
      <a href="/aboutme" className="pl-2 tablet:pl-3 laptop:pl-3.5">
        About Me
      </a>
    </div>
  </div>
);
export default Header;
