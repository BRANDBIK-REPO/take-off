import CollaborationIcon from "@/components/icons/CollaborationIcon";
import CommunityIcon from "@/components/icons/CommunityIcon";
import CultureIcon from "@/components/icons/CultureIcon";
import GrowthIcon from "@/components/icons/GrowthIcon";
import InnovationIcon from "@/components/icons/InnovationIcon";
import TrustIcon from "@/components/icons/TrustIcon";

export type OurValue = {
  number: string;
  icon: any;
  title: string;
  description: string;
};

export const values: OurValue[] = [
  {
    number: "01",
    icon: CollaborationIcon,
    title: "Collaboration Over Competition",
    description:
      "We believe that together we achieve more. Our community thrives on mutual support and shared success.",
  },
  {
    number: "02",
    icon: TrustIcon,
    title: "Trust &\nTransparency",
    description:
      "Honest relationships built on integrity form the foundation of everything we do.",
  },
  {
    number: "03",
    icon: GrowthIcon,
    title: "Actionable Growth",
    description:
      "We focus on practical strategies and measurable results that drive real business impact.",
  },
  {
    number: "04",
    icon: CultureIcon,
    title: "Cultural Intelligence",
    description:
      "Leveraging our unique UAE-Kerala-GCC roots to bridge markets and create global opportunities.",
  },
  {
    number: "05",
    icon: InnovationIcon,
    title: "Innovation in\nNetwork",
    description:
      "Continuously evolving how entrepreneurs connect, collaborate, and grow together.",
  },
  {
    number: "06",
    icon: CommunityIcon,
    title: "Community First",
    description:
      "Every decision we make prioritizes the growth and success of our members.",
  },
];
