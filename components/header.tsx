import { title, subtitle } from "@/components/primitives";

const Header = ({ description }) => {
  return (
    <div className="inline-block text-center justify-center">
      {/* <h1 className="title">{heading}&nbsp;</h1>
      <h1 className="title" style={{ color: "violet" }}>
        {highlightedText}&nbsp;
      </h1>
      <br /> */}
      <h2 className="subtitle mt-4">{description}</h2>
    </div>
  );
};
export default Header;
