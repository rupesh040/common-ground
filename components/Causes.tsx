"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { CommonGroundCauses1Data } from "@/types/content";
import { causesData } from "@/lib/content";

interface CausesProps {
  data?: CommonGroundCauses1Data;
}

export default function Causes({ data = causesData }: CausesProps) {
  return (
    <section id="causes" className="py-20 lg:py-28 bg-[#F7F7F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#55685A] block mb-3 font-sans">
              {data.eyebrow}
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl font-bold tracking-tight text-[#143323] leading-tight">
              {data.headingPart1}
              <br />
              <span className="italic font-serif font-normal text-[#143323]">
                {data.headingItalic}
              </span>
            </h2>
          </div>

          <Link
            href={data.topLink.href}
            className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#143323] hover:text-[#3B651B] transition-colors self-start md:self-end border-b border-[#143323]/30 pb-0.5"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {data.items.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: "easeOut" }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group bg-white rounded-3xl p-5 border border-[#E2E6DA] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-[#E8EDE2]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-[#D4EAA2] text-[#143323] font-bold text-xs flex items-center justify-center shadow-md font-sans">
                    0{idx + 1}
                  </div>

                  <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-[#D4EAA2] text-[#143323] flex items-center justify-center shadow-md transition-transform group-hover:scale-110">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M7 17L17 7M17 7H9M17 7v8" />
                    </svg>
                  </div>
                </div>

                <span className="text-[10.5px] font-bold tracking-wider text-[#55685A] uppercase block mb-2 font-sans">
                  {item.category}
                </span>

                <h3 className="font-editorial text-2xl font-bold text-[#132F22] mb-3 leading-snug">
                  {item.title}
                </h3>

                <p className="text-sm text-[#57685D] leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <Link
                href={item.href}
                className="group/link inline-flex items-center gap-2 text-sm font-semibold text-[#132F22] hover:text-[#4A7320] transition-colors pt-3 border-t border-[#E5E8DF]/60"
              >
                <span>{item.linkText}</span>
                <svg
                  className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-end"
        >
          <Link
            href={data.bottomButton.href}
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[#132F22] hover:text-[#4A7320] transition-colors"
          >
            <span>{data.bottomButton.text}</span>
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}

