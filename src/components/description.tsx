import { ReactElement } from 'react';

const Description = ({
  description,
}: {
  description: string;
}): ReactElement => {
  return (
    <div className="text-5xl font-bold pt-4 text-center">
      <span>Hi, I'm {description}</span>
    </div>
  );
};
export default Description;
