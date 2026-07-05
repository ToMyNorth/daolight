import type { Metadata } from "next";
import IChingClient from "./IChingClient";

export const metadata: Metadata = {
  title: "I Ching Oracle - Ancient Wisdom Reading",
  description:
    "Cast the I Ching oracle through an interactive coin toss ritual. Receive AI-powered interpretations of your hexagram with 5,000 years of philosophical depth.",
};

export default function IChingPage() {
  return <IChingClient />;
}
