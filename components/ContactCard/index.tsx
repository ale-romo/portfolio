import Image from "next/image";
import SpaceInvader from "../SpaceInvader";

const ContactCard = () => (<footer className="flex gap-4 items-center justify-center pb-5 w-full md:pr-5">

    <div className="flex items-center gap-3 bg-slate-300/60 hover:bg-slate-100/50 border rounded-md px-3 py-1">
      <a href="/Alejandro-Romo-CV-2024.pdf" target="_blank" className="hover:bg-white p-1 rounded"><Image src="/images/cv-icon.svg" width="0" height="0" alt="Github" className="w-6 h-auto" /></a>
      <a href="mailto:alejandro@mintitmedia.com" target="_blank" className="hover:bg-white p-1 rounded"><Image src="/images/mail-icon.svg" width="0" height="0" alt="LinkedIn" className="w-6 h-auto" /></a>
      <a href="https://wa.me/526643082240" target="_blank" className="hover:bg-white p-1 rounded-full"><Image src="/images/whatsapp-icon.svg" width="0" height="0" alt="Github" className="w-6 h-auto" /></a>
      <a href="https://www.linkedin.com/in/alex-romo/" target="_blank" className="hover:bg-white p-1 rounded"><Image src="/images/linkedin-icon.svg" width="0" height="0" alt="LinkedIn" className="w-6 h-auto" /></a>
      <a href="https://github.com/ale-romo" target="_blank" className="hover:bg-white p-1 rounded-full"><Image src="/images/github-icon.svg" width="0" height="0" alt="Github" className="w-6 h-auto" /></a>
    </div>
    <a href="mailto:alejandro@mintitmedia.com" target="_blank" className="flex gap-2 items-center bg-black font-heading text-white/80 hover:text-white border rounded-md px-3 py-2"><SpaceInvader size={2} slug="Collaborate" color="#ffffff" />Trabajemos juntos!</a>
  </footer>
);

export default ContactCard;
