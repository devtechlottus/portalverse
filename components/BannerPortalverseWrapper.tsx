import BannerPortalverse from "@/old-components/BannerPortalverse";
import BannerPortalverseComponentData, { BannerPortalverseConfig } from "@/types/BannerPortalverse.types";
import { parseStrapiImage } from "@/utils/strapi";
import { BannerSection } from "@/utils/strapi/sections/Banner";
import { Replace } from "@/utils/typescript";

type BannerPortalverseTextPosition =
  | "" // maps to left_top position
  | "center"
  | "right"
  | "middle"
  | "middle-left"
  | "middle-right"
  | "middle-center"
  | "left-bottom"
  | "center-bottom"
  | "right-bottom";

const getTextPosition = (
  textPosition: BannerSection["textPosition"]
): BannerPortalverseTextPosition => {
  console.log("textPosition", textPosition);
  switch (textPosition) {
    case "center":
      return "middle-center";
    case "center_bottom":
      return "center-bottom";
    case "center_top":
      return "center";
    case "left_bottom":
      return "left-bottom";
    case "left_center":
      return "middle";
    case "left_top":
      return "";
    case "right_bottom":
      return "right-bottom";
    case "right_center":
      return "middle-right";
    case "right_top":
      return "right";
  }
};

const parseStrapiData = (props: BannerPortalverseWrapper): BannerPortalverseConfig => {
  const { data } = props;

  const parsedData: BannerPortalverseConfig = {
    image: {
      mobile: parseStrapiImage(data?.mobileImage),
      tablet: parseStrapiImage(data?.tabletImage),
      desktop: parseStrapiImage(data?.desktopImage)
    },
    title: data?.title,
    subtitle: data?.subtitle,
    position: getTextPosition(data?.textPosition),
    height: data?.height,
    overlayWhite: data?.overlay === "white",
    overlayDak: data?.overlay === "black",
    button: {
      id: "",
      type: "",
      title: data?.ctaText,
      size: "",
      icon: "",
      lyIcon: false,
      disabled: false,
      isExpand: false,
      tagOnClick: "",
      test: "",
    },
    noAction: false,
    dimensions: [],
    font: "",
  }

  return parsedData;
};

type BannerPortalverseWrapper = Replace<
  BannerPortalverseComponentData,
  "data",
  BannerSection & { height: string }
>;

const BannerPortalverseWrapper = (props: BannerPortalverseWrapper) => {
  const parsedData = parseStrapiData(props);

  return <BannerPortalverse {...props} data={parsedData} />;
};

export default BannerPortalverseWrapper