import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ComponentRenderer from "@/components/ComponentRenderer";
import { homePageComponentsList, headerData, footerData } from "@/lib/content";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F7F0]">
      <Navbar data={headerData} />
      <main className="flex-1">
        {homePageComponentsList.map((compRef, index) => (
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
