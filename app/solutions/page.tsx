import { title } from "@/components/primitives";
import MainHeadingSolutions from "./MainHeadingSolution";
import { Cards } from "./Cards";
import Services from "./Services";

export default function BlogPage() {
  return (
    <div>
      <MainHeadingSolutions />
      <Cards />
      <Services />
    </div>
  );
}
