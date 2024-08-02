import React from "react";
import { Image, useMediaQuery } from "@chakra-ui/react";
import rosemont_full_light from "../../assets/logos/rosemont_full_light.svg";
import rosemont_med_light from "../../assets/logos/rosemont_med_light.svg";
import rosemont_mobile from "../../assets/logos/rosemont_mobile.svg";

function NavLogo() {
  const [isLargerThan1024] = useMediaQuery("(min-width: 1024px)");
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  let logoSrc = rosemont_mobile;
  let logoSize = "h-12";

  if (isLargerThan1024) {
    logoSrc = rosemont_full_light;
    logoSize = "h-10";
  } else if (isLargerThan768) {
    logoSrc = rosemont_med_light;
    logoSize = "h-8";
  }

  return <Image src={logoSrc} alt="Rosemont Estates Logo" className={logoSize} />;
}

export default NavLogo;
