import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ComponentRenderer from "@/components/ComponentRenderer";
import { getPageComponents, headerData, footerData } from "@/lib/content";

export const metadata = {
  title: "Contact Us | Common Ground",
  description: "A little hello, a new possibility. Connect with Common Ground and share your ideas or time.",
};

export default function ContactPage() {
  const componentsList = getPageComponents("contact");

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
