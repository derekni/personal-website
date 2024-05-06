import { ReactElement } from 'react';

const Title = ({ children }: { children: string }): ReactElement => {
  return (
    <div className="text-xl tablet:text-2xl laptop:text-4xl font-semibold pb-4 tablet:pb-8 laptop:pb-12 text-center">
      {{ children }}
    </div>
  );
};

export default Title;