import { title, subtitle } from "@/components/primitives";
import DocCard from "./card";
import {Divider} from "@nextui-org/react";
export default function DocsPage() {
  return (
    <>
      <div className="inline-block  text-center justify-center mt-10 mb-20">
        <h1 className={title()}>Documentation of&nbsp;</h1>
        <h1
          className={title({
            color:
              "violet",
          })}
        >
          Cyber Nest&nbsp;
        </h1>
        <br />
        <h2 className={subtitle({ class: "mt-4 " })}>
          We create custom software, mobile apps, and websites tailored to your
          needs Our expert <br></br> team turns your ideas into reality. Lets
          innovate together!
        </h2>
      </div>

      <Divider className="mb-16" />

      <DocCard />
      
      <Divider className="mt-14" />
      
      <div className="text-start justify-start mt-28 mb-20">
        <h1 className={title({ color: "violet" })}>Cyber Nest :</h1>
        <br />
        <h3 className={subtitle({ class: "mt-4 " })}>
          We create custom software, mobile apps, and websites tailored to your
          needs Our expert team turns your ideas into reality. Lets innovate
          together! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Expedita, voluptatibus? Maxime ea natus totam voluptatum, mollitia
          itaque. Ipsa quaerat quam, quis recusandae optio fuga nihil
          voluptatibus officia consequatur numquam minus?
        </h3>
      </div>


      <Divider className="mt-14" />
      
      <div className="text-start justify-start mt-28 mb-20">
        <h1 className={title({ color: "violet" })}>Cyber Nest :</h1>
        <br />
        <h3 className={subtitle({ class: "mt-4 " })}>
          We create custom software, mobile apps, and websites tailored to your
          needs Our expert team turns your ideas into reality. Lets innovate
          together! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Expedita, voluptatibus? Maxime ea natus totam voluptatum, mollitia
          itaque. Ipsa quaerat quam, quis recusandae optio fuga nihil
          voluptatibus officia consequatur numquam minus?
        </h3>
      </div>


      <Divider className="mt-14" />
      
      <div className="text-start justify-start mt-28 mb-20">
        <h1 className={title({ color: "violet" })}>Cyber Nest :</h1>
        <br />
        <h3 className={subtitle({ class: "mt-4 " })}>
          We create custom software, mobile apps, and websites tailored to your
          needs Our expert team turns your ideas into reality. Lets innovate
          together! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Expedita, voluptatibus? Maxime ea natus totam voluptatum, mollitia
          itaque. Ipsa quaerat quam, quis recusandae optio fuga nihil
          voluptatibus officia consequatur numquam minus?
        </h3>
      </div>


      <Divider className="mt-14" />
      
      <div className="text-start justify-start mt-28 mb-20">
        <h1 className={title({ color: "violet" })}>Cyber Nest :</h1>
        <br />
        <h3 className={subtitle({ class: "mt-4 " })}>
          We create custom software, mobile apps, and websites tailored to your
          needs Our expert team turns your ideas into reality. Lets innovate
          together! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Expedita, voluptatibus? Maxime ea natus totam voluptatum, mollitia
          itaque. Ipsa quaerat quam, quis recusandae optio fuga nihil
          voluptatibus officia consequatur numquam minus?
        </h3>
      </div>


    </>
  );
}
