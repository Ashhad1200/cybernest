import React from 'react';
import { title, subtitle } from "@/components/primitives";

const MainHeader = ({ mainTitle, highlightTitle, subtitleText }) => {
  return (
    <div className="inline-block text-center justify-center mt-10 mb-20">
      <h1 className={title()}>{mainTitle}&nbsp;</h1>
      <h1 className={title({ color: "violet" })}>
        {highlightTitle}&nbsp;
      </h1>
      <br />
      <h2 className={subtitle({ class: "mt-4 " })}>
        {subtitleText}
      </h2>
    </div>
  );
};

export default MainHeader;
