import { ReactElement } from 'react';

import MailIcon from './MailIcon';

const Footer = (): ReactElement => (
  <div className="flex flex-1 px-28 py-12 flex-row justify-end">
    <a href="mailto:dan82@cornell.edu" className="pr-6">
      <MailIcon />
    </a>
    <a href="https://www.linkedin.com/in/derek-ni/" className="h-7 w-7">
      <img src="img/linkedin.png" />
    </a>
    <a href="https://github.com/derekni" className="pl-6 pr-3.5">
      <img src="img/github.svg" />
    </a>
  </div>
);
export default Footer;
