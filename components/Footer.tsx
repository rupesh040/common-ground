"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import type { CommonGroundFooter1Data } from "@/types/content";
import { footerData } from "@/lib/content";

interface FooterProps {
  data?: CommonGroundFooter1Data;
}

export default function Footer({ data = footerData }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#143323] text-[#FAFBF7] pt-16 pb-12 border-t border-[#1C412E] overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 pb-12">
          
          <div className="flex flex-col items-start">
            <Link href="/" className="flex items-center gap-2 group mb-3">
              <div className="text-white transition-transform group-hover:scale-105">
                <svg
                  className="w-6 h-6 stroke-white fill-none stroke-[2.2]"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21V11M12 11C12 7 9 4 5 4c0 4 3 7 7 7zm0 0c0-4 3-7 7-7 0 4-3 7-7 7z"
                  />
                </svg>
              </div>
              <div className="flex flex-col leading-[0.92] font-bold text-white tracking-tight font-sans text-[17px]">
                <span>common</span>
                <span>ground.</span>
              </div>
            </Link>
            <p className="text-xs text-[#8DA494] font-medium">
              {data.logo.tagline}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-10 sm:gap-x-12 gap-y-3.5 text-xs sm:text-[13px] font-medium text-[#FAFBF7]/80">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/about-us" className="hover:text-white transition-colors">About Us</Link>
            <Link href="/causes" className="hover:text-white transition-colors">Our Causes</Link>
            <Link href="/our-team" className="hover:text-white transition-colors">Our Team</Link>
            <Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <Link href="/faq" className="hover:text-white transition-colors">FAQs</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link>
          </div>

          <div className="self-end lg:self-center">
            <motion.button
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FAFBF7]/80 hover:text-white transition-colors cursor-pointer"
            >
              <span>{data.backToTopText}</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </motion.button>
          </div>

        </div>

        <div className="pt-8 border-t border-[#1C412E] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[10.5px] text-[#FAFBF7]/50 leading-relaxed">
          <div>
            <p className="mb-1">{data.copyright}</p>
            <p className="max-w-3xl text-[#FAFBF7]/40 text-[10px]">
              {data.missionNote}
            </p>
          </div>
          <div className="shrink-0">
            <Link
              href="/contact#privacy"
              className="hover:text-white transition-colors"
            >
              Privacy
            </Link>
          </div>
        </div>

      </motion.div>
    </footer>
  );
}
