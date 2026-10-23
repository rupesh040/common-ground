"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import type { CommonGroundFAQ1Data } from "@/types/content";
import { faqData } from "@/lib/content";

interface FAQProps {
  data?: CommonGroundFAQ1Data;
}

export default function FAQ({ data = faqData }: FAQProps) {
  const [openId, setOpenId] = useState<string | null>(data.items[0]?.id || null);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#F4F3EE] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#55685A] block mb-3 font-sans">
              {data.eyebrow}
            </span>

            <h2 className="font-editorial text-4xl sm:text-5xl font-bold tracking-tight text-[#143323] leading-[1.15] mb-6">
              {data.headingPart1}
              <br />
              <span className="italic font-serif font-normal text-[#143323]">
                {data.headingItalic}
              </span>
            </h2>

            <Link
              href={data.topLink.href}
              className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#143323] hover:text-[#3B651B] transition-colors border-b border-[#143323]/30 pb-0.5"
            >
              <span>{data.topLink.text}</span>
              <svg
                className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>

          <div className="lg:col-span-7 divide-y divide-[#E2E6DA]">
            {data.items.map((item, idx) => {
              const isOpen = openId === item.id;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  className="py-5 first:pt-0 last:pb-0"
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full flex items-center justify-between text-left gap-4 py-2 group focus:outline-none cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-semibold text-[#132F22] group-hover:text-[#4A7320] transition-colors">
                      {item.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className={`w-7 h-7 rounded-full border border-[#E5E8DF] flex items-center justify-center shrink-0 transition-colors ${
                        isOpen ? "bg-[#132F22] text-[#C7E878]" : "bg-white text-[#132F22] group-hover:border-[#132F22]"
                      }`}
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-2 pb-3 pr-8">
                          <p className="text-sm sm:text-base text-[#57685D] leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
