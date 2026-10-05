import { MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import CopyEmailButton from "@/components/CopyEmailButton";
import { profile } from "@/data/portfolio";
export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <p className="font-display font-bold">juan<span className="text-[#c8f04a]">.dev</span> <span className="ml-2 text-sm font-normal text-slate-400">© 2026 · Hecho con Next.js en Medellín</span></p>
        <div className="flex items-center gap-4 text-slate-300">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub"><GithubIcon size={20} /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn"><LinkedinIcon size={20} /></a>
          <CopyEmailButton email={profile.email} />
          <span className="flex items-center gap-1 text-xs text-slate-500"><MapPin size={13} /> {profile.location}</span>
        </div>
      </div>
    </footer>
  );
}
