import React from 'react'
import { title, subtitle } from "@/components/primitives";

const MainHeadingContactUs = () => {
  return (
    <div>
      <div className="inline-block  text-start justify-start mt-20 mb-20">
    <h1
      className={title({
        color:
          "violet",
      })}
    >
   Contect and Connect With Us&nbsp;
    </h1>
    <br />
    <h2 className={subtitle({ class: "mt-4 " })}>
      We create custom software, mobile apps, and websites tailored to your
      needs Our expert <br></br> team turns your ideas into reality. Lets
      innovate together!  We create custom software, mobile apps, and websites tailored to your
          needs Our expert team turns your ideas into reality. Lets innovate
          together! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Expedita, voluptatibus? Maxime ea natus totam voluptatum, mollitia
          itaque. Ipsa quaerat quam, quis recusandae optio fuga nihil
          voluptatibus officia consequatur numquam minus?
    </h2>
  </div>
    </div>
  )
}

export default MainHeadingContactUs
