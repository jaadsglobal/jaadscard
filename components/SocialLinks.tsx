import { AtSign, BriefcaseBusiness, Globe } from "lucide-react";
const socialClass =
  "flex min-h-12 min-w-0 items-center justify-center gap-1.5 rounded-2xl border border-white/10 bg-white/[0.045] px-2 text-sm font-medium text-slate-100 transition hover:border-white/20 hover:bg-white/[0.08]";

export function SocialLinks() {
  return (
    <section aria-label="Redes sociales" className="mt-5">
      <div className="grid grid-cols-3 gap-2.5">
        <a
          href="/api/contact/linkedin"
          target="_blank"
          rel="noreferrer"
          aria-label="Visitar LinkedIn"
          className={socialClass}
        >
          <BriefcaseBusiness aria-hidden="true" size={17} />
          <span className="min-w-0 truncate">LinkedIn</span>
        </a>
        <a
          href="/api/contact/instagram"
          target="_blank"
          rel="noreferrer"
          aria-label="Visitar Instagram"
          className={socialClass}
        >
          <AtSign aria-hidden="true" size={17} />
          <span className="min-w-0 truncate">Instagram</span>
        </a>
        <a
          href="/api/contact/website"
          target="_blank"
          rel="noreferrer"
          aria-label="Visitar web"
          className={socialClass}
        >
          <Globe aria-hidden="true" size={17} />
          <span className="min-w-0 truncate">Web</span>
        </a>
      </div>
    </section>
  );
}
