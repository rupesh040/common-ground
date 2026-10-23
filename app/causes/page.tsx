import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ComponentRenderer from "@/components/ComponentRenderer";
import { getPageComponents, headerData, footerData } from "@/lib/content";

export const metadata = {
  title: "Our Causes | Common Ground",
  description: "Explore our active impact areas in nature conservation, youth education, and community wellbeing.",
};

export default function CausesPage() {
  const componentsList = getPageComponents("causes");

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
