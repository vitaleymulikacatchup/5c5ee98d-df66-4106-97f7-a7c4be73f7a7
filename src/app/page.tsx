"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { SportsIcon } from 'lucide-react';

const assetMap = [
  {"id": "hero-image", "url": "https://images.pexels.com/photos/2072181/pexels-photo-2072181.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Charming birthday greeting card layout with macarons, flowers, and gift box."},
  {"id": "about-image", "url": "https://images.pexels.com/photos/34292231/pexels-photo-34292231.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "happy birthday family - Photo by krishna Kids  Photography"},
  {"id": "team-image", "url": "https://images.pexels.com/photos/32333373/pexels-photo-32333373.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "A group of friends joyfully celebrating a birthday party indoors with food and laughter."},
  {"id": "contact-image", "url": "https://images.pexels.com/photos/2576194/pexels-photo-2576194.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "A laptop displaying Star Wars party invitation design in a workspace setting."}
];

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav" className="scroll-mt-24">
        <NavbarStyleMinimal brandName="Anish's Birthday" />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24 ">
        <div className="mx-auto px-4 md:px-6 ">
          <HeroBillboard
            title="Happy Birthday Anish!"
            description="Join us to celebrate this special day."
            imageSrc={assetMap.find(a => a.id === "hero-image")?.url ?? "/public/images/placeholder.webp"}
            buttons={[{ text: "Join the Party", href: "contact" }]}
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24 ">
        <div className="mx-auto px-4 md:px-6 ">
          <SplitAbout
            title="About Anish"
            description="Anish is a happy-go-lucky person who loves to celebrate."
            bulletPoints={[
              { title: "Loves Sports", description: "An avid cricket fan.", icon: SportsIcon },
              { title: "Traveler", description: "Enjoys exploring new places." }
            ]}
            imageSrc={assetMap.find(a => a.id === "about-image")?.url ?? "/public/images/placeholder.webp"}
          />
        </div>
      </div>
      <div id="team" data-section="team" className="scroll-mt-24 ">
        <div className="mx-auto px-4 md:px-6 ">
          <TeamCardOne
            title="Party Attendees"
            description="Join Anish and friends to make everlasting memories."
            members={[
              { id: "1", name: "Sophie Turner", role: "Friend", imageSrc: assetMap.find(a => a.id === "team-image")?.url ?? "/public/images/placeholder.webp" },
              { id: "2", name: "Arya Stark", role: "Friend", imageSrc: assetMap.find(a => a.id === "team-image")?.url ?? "/public/images/placeholder.webp" }
            ]}
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24 ">
        <div className="mx-auto px-4 md:px-6 ">
          <ContactSplit
            tag="RSVP"
            title="Let Us Know"
            description="Please RSVP to join Anish's birthday party."
            imageSrc={assetMap.find(a => a.id === "contact-image")?.url ?? "/public/images/placeholder.webp"}
            onSubmit={(email) => alert(`Thank you for RSVPing, ${email}`)}
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24 ">
        <div className="mx-auto px-4 md:px-6 ">
          <FooterBase
            columns={[
              { title: "Navigation", items: [{ label: "Home", href: "/" }, { label: "About", href: "#about" }, { label: "Contact", href: "#contact" }] }
            ]}
            copyrightText="© 2023 Anish's Birthday"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
