"use client";
import React from "react";
import { color, motion } from "framer-motion";
import { LampContainer } from "../../components/ui/lamp";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { ScrollShadow } from "@nextui-org/react";

export function HomeMainHeader() {
  return (

    


    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-black py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        <div className="inline-block  text-center justify-center">
          <h1 className={title({ color: "foreground" })}>
            Easy Solutions With&nbsp;
          </h1>
          <h1 className={title({ color: "violet" })}>Cyber Nest&nbsp;</h1>
          <br />
          <h2 className={subtitle({ class: "mt-4 " })}>
            We create custom software, mobile apps, and websites tailored to
            your needs Our expert <br></br> team turns your ideas into reality.
            Lets innovate together!
          </h2>
        </div>

 
      </motion.h1>
    </LampContainer>
  );
}
