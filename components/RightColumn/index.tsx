import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const RightColumn = ({ children }: Props) => {
  return (
    <section className="flex flex-col gap-5 w-full md:w-2/3 scrollable overflow-y-scroll h-full pr-3">
      {children}
    </section>
  );
};

export default RightColumn;
