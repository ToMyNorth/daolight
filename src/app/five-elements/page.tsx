import type { Metadata } from "next";
import FiveElementsClient from "@/components/divination/FiveElementsClient";

export const metadata: Metadata = {
  title: "Five Elements Personality Test - Discover Your Element | Dao Light",
  description:
    "Take our Five Elements personality quiz to discover if you're Wood, Fire, Earth, Metal, or Water. Based on 5,000 years of Eastern philosophy.",
};

export default function FiveElementsPage() {
  return <FiveElementsClient />;
}
