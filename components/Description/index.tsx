import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Description = ({ children }: Props) => <div className="flex justify-between pt-3 pl-5 items-center">{children}</div>

export default Description;
