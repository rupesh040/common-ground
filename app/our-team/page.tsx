import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ComponentRenderer from "@/components/ComponentRenderer";
import { getPageComponents, headerData, footerData } from "@/lib/content";

export const metadata = {
  title: "Our Team | Common Ground",
  description: "Different strengths, one shared purpose. Meet the caring community and team behind Common Ground.",
};

export default function OurTeamPage() {
  const componentsList = getPageComponents("our-team");

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F7F0]">
      <Navbar data={headerData} />
      <main className="flex-1">
        {componentsList.map((compRef, index) => (
          <ComponentRenderer
            key={`${compRef.key}-${compRef.component}-${index}`}
            componentRef={compRef}
          />
        ))}
      </main>
      <Footer data={footerData} />
    </div>
  );
}
