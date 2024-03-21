import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Description = ({ children }: Props) => <div className="flex flex-col gap-5 justify-between pt-3 h-full items-center">{children}</div>

export default Description;
