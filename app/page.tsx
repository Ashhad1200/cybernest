import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 mt-16  ">
      <div className="inline-block  text-center justify-center">
        <h1 className={title()}>Easy Solutions With&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>Cyber Nest&nbsp;</h1>
        <br />
        <h2 className={subtitle({ class: "mt-4 " })}>
          We create custom software, mobile apps, and websites tailored to your
          needs Our expert <br></br> team turns your ideas into reality. Lets innovate
          together!
        </h2>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.links.documentation}
        >
          Documentation
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>
    </section>
  );
}
