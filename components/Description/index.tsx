import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Description = ({ children }: Props) => <div className="flex justify-between bg-slate-100 p-5 rounded-b">{children}</div>

export default Description;
