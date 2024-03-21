import { ReactNode } from 'react';
import Image from 'next/image';

interface Props {
  children: ReactNode;
}

const LeftColumn = ({ children }: Props) => {
  return (
    <section className="flex flex-col gap-5 justify-between w-full md:w-1/2 items-start bg-slate-200 items-stretch p-5 md:pr-0 md:border-r md:border-black">
        {children}
    </section>
  );
};

export default LeftColumn;
