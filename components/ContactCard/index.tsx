import Image from "next/image";

const ContactCard = () => (<footer className="flex gap-4 items-center justify-center pb-5 w-full md:pr-5">
    <a href="mailto:alejandro@mintitmedia.com" target="_blank" className="flex gap-2 items-center bg-slate-300/60 hover:bg-slate-100 border rounded-md px-3 py-2">Email me</a>
    <a href="/Alejandro-Romo-CV-2024.pdf" target="_blank" className="flex gap-2 items-center bg-slate-300/60 hover:bg-slate-100 border rounded-md px-3 py-2">My CV</a>
    <div className="flex items-center gap-3 bg-slate-300/60 hover:bg-slate-100/50 border rounded-md px-3 py-1">
      <a href="https://www.linkedin.com/in/alex-romo/" target="_blank" className="hover:bg-white p-1 rounded"><Image src="/images/linkedin-icon.svg" width="0" height="0" alt="LinkedIn" className="w-6 h-auto" /></a>
      <a href="https://github.com/ale-romo" target="_blank" className="hover:bg-white p-1 rounded-full"><Image src="/images/github-icon.svg" width="0" height="0" alt="Github" className="w-6 h-auto" /></a>
    </div>
  </footer>
);

export default ContactCard;
