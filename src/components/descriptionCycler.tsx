import { ReactElement, useEffect, useState } from 'react';

import Description from './description';

const DescriptionCycler = ({
  descriptions,
}: {
  descriptions: string[];
}): ReactElement => {
  const [descriptor, setDescriptor] = useState('');
  const [index, setIndex] = useState(0);
  const [cycles, setCycles] = useState(0);

  const updateWord = () => {
    if (cycles < descriptions[index].length) {
      const c = descriptions[index][cycles];
      if (c == '') {
        setCycles(cycles + 2);
        setDescriptor(
          descriptor + descriptions[index].substring(cycles, cycles + 2),
        );
      } else {
        setCycles(cycles + 1);
        setDescriptor(descriptor + descriptions[index][cycles]);
      }
    } else if (
      descriptions[index].length <= cycles &&
      cycles < descriptions[index].length * 2
    ) {
      if (descriptions[index].length == cycles) {
        setTimeout(() => {
          setCycles(cycles + 1);
          setDescriptor(descriptor.substring(0, descriptor.length - 1));
        }, 3000);
      } else {
        setCycles(cycles + 1);
        setDescriptor(descriptor.substring(0, descriptor.length - 1));
      }
    } else {
      setCycles(0);
      setTimeout(() => {
        if (index < descriptions.length - 1) {
          setIndex(index + 1);
        } else {
          setIndex(0);
        }
      }, 2000);
    }
  };

  useEffect(() => {
    setTimeout(updateWord, 100);
  }, [descriptor, index]);

  return <Description description={descriptor} />;
};
export default DescriptionCycler;
