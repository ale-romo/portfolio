import { ReactNode } from 'react';
import ContactCard from '../ContactCard';

interface Props {
  children: ReactNode;
}

const LeftColumn = ({ children }: Props) => (
    <section className="flex justify-end w-full md:w-1/2  bg-slate-200  p-5 md:pr-0 md:border-r md:border-black">
        <div className="flex flex-col gap-5 items-stretch justify-start max-w-screen-md">
          <ContactCard />
          {children}
        </div>
    </section>
  );


export default LeftColumn;
