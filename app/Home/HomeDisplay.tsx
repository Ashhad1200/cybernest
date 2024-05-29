import React from "react";
import { HomeMainHeader } from "./HomeMainHeader";
import { Quotation } from "../../components/quotation";
import { HomeLayout } from "../../components/CardGridLayout";

import { Divider } from "@nextui-org/react";
import AboutOurUsers from "../../components/AboutOurUsers";
import { UsersFeedback } from "@/components/UsersFeedback";
import OurTeamLayout from "@/components/OurTeamLayout";
import { OurGoal } from "@/components/OurGoal";

const HomeDisplay = () => {
  return (
    <React.Fragment>
      <HomeMainHeader />
      <Divider className="mb-16" />
      <OurGoal />
      <Divider className="mb-16" />
      <AboutOurUsers />
      <UsersFeedback />
      <Divider className="mb-16" />
      <OurTeamLayout />
    </React.Fragment>
  );
};

export default HomeDisplay;
