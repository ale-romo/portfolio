import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const RightColumn = ({ children }: Props) => {
  return (
    <div className="p-5 pr-2 pl-0 w-full md:w-3/5">
      <section className="flex flex-col gap-10 w-full scrollable overflow-y-scroll h-full pr-3">
      {children}
    </section>
    </div>

  );
};

export default RightColumn;
