import type { Profile } from "@/config/profile";

type FooterProps = {
  profile: Profile;
};

export function Footer({ profile }: FooterProps) {
  return (
    <footer className="border-t border-white/10 bg-black/20 px-5 py-4 text-center text-xs text-slate-400">
      <p>
        {profile.company}® <span aria-hidden="true">·</span> Sistemas
        comerciales con IA
      </p>
    </footer>
  );
}
