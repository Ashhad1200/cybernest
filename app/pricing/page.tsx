import { title } from "@/components/primitives";
import MainHeadingPricing from "./MainHeadingPricing";
import { PricingCards } from "./MainPricingCards";

export default function PricingPage() {
  return (
    <div>
      <MainHeadingPricing/>
      <PricingCards/>
    </div>
  );
}
