import type { Metadata } from "next";
import HomePage from "@/components/home/HomePage";

export const metadata: Metadata = {
  title: "Ancient Eastern Wisdom, Powered by AI",
  description:
    "Discover I Ching divination, AI Tarot readings, daily horoscopes and Five Elements personality insights. Ancient Eastern wisdom meets modern AI technology.",
};

export default function Page() {
  return <HomePage />;
}
