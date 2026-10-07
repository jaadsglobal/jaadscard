import Image from "next/image";
import type { Profile } from "@/config/profile";

type ProfileHeaderProps = {
  profile: Profile;
};

export function ProfileHeader({ profile }: ProfileHeaderProps) {
  return (
    <header className="text-center">
      <div className="mx-auto mb-6 flex size-24 items-center justify-center overflow-hidden rounded-full border border-[var(--accent)]/70 bg-white p-2 shadow-[0_0_28px_rgba(225,25,45,0.24)]">
        <Image
          src={profile.logoImage}
          width={160}
          height={160}
          alt={`Logo de ${profile.company}`}
          priority
          className="relative -top-1 size-[110%] max-w-none object-contain object-center"
        />
      </div>
      <div className="relative mx-auto size-28 overflow-hidden rounded-full border border-[var(--accent)] bg-black shadow-[0_0_28px_rgba(225,25,45,0.24)] min-[390px]:size-32">
        <Image
          src={profile.profileImage}
          width={360}
          height={540}
          alt={`Foto de ${profile.name}`}
          priority
          className="absolute left-[49%] -top-6 h-[270%] w-auto max-w-none -translate-x-1/2 object-contain object-top"
        />
      </div>
      <div className="mt-5">
        <p className="text-sm font-semibold tracking-[0.08em] text-[var(--accent)]">
          {profile.company}
        </p>
        <h1 className="mt-2 text-balance break-words text-2xl font-semibold leading-tight text-white min-[370px]:text-3xl">
          {profile.name}
        </h1>
        <p className="mt-2 text-base font-medium text-slate-200">
          {profile.role}
        </p>
        <p className="mx-auto mt-3 max-w-[19rem] text-pretty text-sm leading-6 text-slate-300">
          {profile.bio}
        </p>
      </div>
    </header>
  );
}
