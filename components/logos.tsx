import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animation-variants";
import TextBlur from "./ui/text-blur";

const logos = [
  { href: "https://nextjs.org", src: "/nextjs.svg", alt: "Next.js Logo" },
  { href: "https://notion.so", src: "/notion.svg", alt: "Notion Logo" },
  { href: "https://resend.com", src: "/resend.svg", alt: "Resend Logo" },
  { href: "https://upstash.com", src: "/upstash.svg", alt: "Upstash Logo" },
  { href: "https://ui.shadcn.com", src: "/shadcn.svg", alt: "shadcn Logo" },
  { href: "https://vercel.com", src: "/vercel.svg", alt: "Vercel Logo" },
];

export default function Logos() {
  return (
    <motion.div
      className="flex h-full w-full flex-col gap-2 pb-12 pt-12 md:pb-24 md:pt-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible">
    </motion.div>
  )
}
