import { ReactElement, useEffect, useState } from 'react';

const TextCycler = ({
  descriptions,
  intro,
}: {
  descriptions: string[];
  intro: string;
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
        }, 2400);
      } else {
        setCycles(cycles + 1);
        setDescriptor(descriptor.substring(0, descriptor.length - 1));
      }
    } else {
      setCycles(0);
      if (index < descriptions.length - 1) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    }
  };

  useEffect(() => {
    setTimeout(updateWord, 100);
  }, [descriptor, index]);

  return (
    <div className="text-5xl font-bold pt-4 text-center">
      <span>
        {intro} {descriptor}
      </span>
    </div>
  );
};
export default TextCycler;
