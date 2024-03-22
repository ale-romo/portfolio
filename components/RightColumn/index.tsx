import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const RightColumn = ({ children }: Props) => {
  return (
    <div className="flex justify-start p-5 md:pr-2 md:pl-0 w-full md:w-1/2">
      <section className="flex flex-col gap-10 w-full scrollable md:overflow-y-scroll md:h-full md:pr-3 max-w-screen-md">
      {children}
    </section>
    </div>

  );
};

export default RightColumn;
