import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ComponentRenderer from "@/components/ComponentRenderer";
import { getPageComponents, headerData, footerData } from "@/lib/content";

export const metadata = {
  title: "About Us | Common Ground",
  description: "Learn about Common Ground, our mission, values, and community-driven approach.",
};

export default function AboutUsPage() {
  const componentsList = getPageComponents("about-us");

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F3EE]">
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
