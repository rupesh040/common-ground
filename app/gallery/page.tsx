import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ComponentRenderer from "@/components/ComponentRenderer";
import { getPageComponents, headerData, footerData } from "@/lib/content";

export const metadata = {
  title: "Gallery | Common Ground",
  description: "Small moments, something meaningful. A visual glimpse of connection and care at Common Ground.",
};

export default function GalleryPage() {
  const componentsList = getPageComponents("gallery");

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
