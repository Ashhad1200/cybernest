"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
import { title, subtitle } from "@/components/primitives";
const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
];
export function OurGoal() {
  return (
    <React.Fragment>
      <div className="inline-block  text-center justify-center mt-10 mb-20">
        <h1
          className={title({
            color: "violet",
          })}
        >
          Our Goals&nbsp;
        </h1>
        <br />
        <h2 className={subtitle({ class: "mt-4 " })}>
          We create custom software, mobile apps, and websites tailored to your
          needs Our expert <br></br> team turns your ideas into reality. Lets
          innovate together! We create custom software, mobile apps, and
          websites tailored to your needs Our expert team turns your ideas into
          reality. Lets innovate together! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Expedita, voluptatibus? Maxime ea natus
          totam voluptatum, mollitia itaque. Ipsa quaerat quam, quis recusandae
          optio fuga nihil voluptatibus officia consequatur numquam minus?
        </h2>
      </div>

      <div className="p-10">
        <StickyScroll content={content} />
      </div>
    </React.Fragment>
  );
}
