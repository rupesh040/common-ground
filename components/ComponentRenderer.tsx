import React from "react";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import About from "@/components/About";
import Causes from "@/components/Causes";
import RootedInCare from "@/components/RootedInCare";
import VolunteerCTA from "@/components/VolunteerCTA";
import FAQ from "@/components/FAQ";
import Blog from "@/components/Blog";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import TeamGrid from "@/components/TeamGrid";
import GalleryView from "@/components/GalleryView";
import ContactForm from "@/components/ContactForm";
import FAQPageSection from "@/components/FAQPageSection";
import PreFooterCTA from "@/components/PreFooterCTA";
import MarqueeBannerSmall from "@/components/MarqueeBannerSmall";
import { getSectionData, getPageBannerData } from "@/lib/content";
import type {
  PageComponentRef,
  CommonGroundHero1Data,
  CommonGroundTicker1Data,
  CommonGroundAbout1Data,
  CommonGroundCauses1Data,
  CommonGroundRooted1Data,
  CommonGroundVolunteerCTA1Data,
  CommonGroundFAQ1Data,
  CommonGroundBlog1Data,
  CommonGroundHeader1Data,
  CommonGroundFooter1Data,
  TeamSectionData,
  GallerySectionData,
  ContactSectionData,
  FAQPageSectionData,
  PreFooterCTAData,
  MarqueeBannerSmallData,
} from "@/types/content";

interface ComponentRendererProps {
  componentRef: PageComponentRef;
}

export default function ComponentRenderer({ componentRef }: ComponentRendererProps) {
  const { key, component } = componentRef;

  if (key === "PageBanner" || component.endsWith("PageBanner")) {
    const data = getPageBannerData(component);
    return <PageBanner data={data} />;
  }

  switch (component) {
    case "CommonGroundHero1":
    case "TourBanner1": {
      const data = getSectionData<CommonGroundHero1Data>(key, component);
      return <Hero data={data} />;
    }

    case "CommonGroundTicker1": {
      const data = getSectionData<CommonGroundTicker1Data>(key, component);
      return <Ticker data={data} />;
    }

    case "CommonGroundAbout1":
    case "TourAbout1": {
      const data = getSectionData<CommonGroundAbout1Data>(key, component);
      return <About data={data} />;
    }

    case "CommonGroundCauses1":
    case "TourPopularTours1": {
      const data = getSectionData<CommonGroundCauses1Data>(key, component);
      return <Causes data={data} />;
    }

    case "CommonGroundRooted1":
    case "TourWhyChooseUs1": {
      const data = getSectionData<CommonGroundRooted1Data>(key, component);
      return <RootedInCare data={data} />;
    }

    case "CommonGroundVolunteerCTA1": {
      const data = getSectionData<CommonGroundVolunteerCTA1Data>(key, component);
      return <VolunteerCTA data={data} />;
    }

    case "CommonGroundFAQ1":
    case "TourFAQ1": {
      const data = getSectionData<CommonGroundFAQ1Data>(key, component);
      return <FAQ data={data} />;
    }

    case "CommonGroundBlog1":
    case "TourBlog1": {
      const data = getSectionData<CommonGroundBlog1Data>(key, component);
      return <Blog data={data} />;
    }

    case "CommonGroundTeam1": {
      const data = getSectionData<TeamSectionData>(key, component);
      return <TeamGrid data={data} />;
    }

    case "CommonGroundGallery1": {
      const data = getSectionData<GallerySectionData>(key, component);
      return <GalleryView data={data} />;
    }

    case "CommonGroundContact1": {
      const data = getSectionData<ContactSectionData>(key, component);
      return <ContactForm data={data} />;
    }

    case "CommonGroundFAQPage1": {
      const data = getSectionData<FAQPageSectionData>(key, component);
      return <FAQPageSection data={data} />;
    }

    case "CommonGroundPreFooterCTA1": {
      const data = getSectionData<PreFooterCTAData>(key, component);
      return <PreFooterCTA data={data} />;
    }

    case "CommonGroundMarqueeBannerSmall1": {
      const data = getSectionData<MarqueeBannerSmallData>(key, component);
      return <MarqueeBannerSmall data={data} />;
    }

    case "CommonGroundHeader1":
    case "TourHeader1": {
      const data = getSectionData<CommonGroundHeader1Data>(key, component);
      return <Navbar data={data} />;
    }

    case "CommonGroundFooter1":
    case "TourFooter1": {
      const data = getSectionData<CommonGroundFooter1Data>(key, component);
      return <Footer data={data} />;
    }

    default:
      console.warn(`Component '${component}' for section '${key}' not registered.`);
      return null;
  }
}
