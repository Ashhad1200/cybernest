import { title } from "@/components/primitives";
import MainHeadingContactUs from "./MainHeadingContactUs";
import { Globe } from "./Globe";
import { ContactUsForm } from "./From";

export default function contectUsPage() {
  return (
    <div>
      <MainHeadingContactUs/>
      {/* <Globe/> */}
      <ContactUsForm/>
    </div>
  );
}
