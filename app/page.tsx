import { ContactActions } from "@/components/ContactActions";
import { Footer } from "@/components/Footer";
import { PrimaryCTA } from "@/components/PrimaryCTA";
import { ProfileHeader } from "@/components/ProfileHeader";
import { QRCodeCard } from "@/components/QRCodeCard";
import { SaveContactButton } from "@/components/SaveContactButton";
import { ShareButton } from "@/components/ShareButton";
import { SocialLinks } from "@/components/SocialLinks";
import { profile } from "@/config/profile";

export default function Home() {
  return (
    <main
      className="min-h-dvh w-screen overflow-x-hidden py-5 sm:py-8"
      style={{ "--accent": profile.accentColor } as React.CSSProperties}
    >
      <article className="soft-enter glass-panel mx-auto w-[calc(100vw-2rem)] max-w-[430px] overflow-hidden rounded-[28px]">
        <div className="px-5 pb-5 pt-6 sm:px-7 sm:pb-7">
          <ProfileHeader profile={profile} />
          <ContactActions profile={profile} />
          <PrimaryCTA profile={profile} />
          <div className="mt-3 grid grid-cols-2 gap-3">
            <SaveContactButton profile={profile} />
            <ShareButton
              title={profile.metadata.title}
              description={profile.metadata.description}
            />
          </div>
          <SocialLinks />
          <QRCodeCard profile={profile} />
        </div>
        <Footer profile={profile} />
      </article>
    </main>
  );
}
