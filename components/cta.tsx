import { motion } from "framer-motion";
import TextBlur from "@/components/ui/text-blur";
import AnimatedShinyText from "@/components/ui/shimmer-text";
import { containerVariants, itemVariants } from "@/lib/animation-variants";

export default function CTA() {
  return (
    <motion.div
      className="flex w-full max-w-2xl flex-col gap-2"
      variants={containerVariants}
      initial="hidden"
      animate="visible">
      <motion.div variants={itemVariants}>
        <div className="flex items-center justify-center">
          <div className="flex w-fit items-center justify-center rounded-full bg-muted/80 text-center">
            <AnimatedShinyText className="px-4 py-1">
              <span>Tez orada!</span>
            </AnimatedShinyText>
          </div>
        </div>
      </motion.div>

      <motion.img
        src="/smartring.jpg"
        alt="logo"
        className="mx-auto my-4 rounded-full h-24 w-24"
        variants={itemVariants}
      />

      <motion.div variants={itemVariants}>
        <TextBlur
          className="text-center text-3xl font-medium tracking-tighter sm:text-5xl"
          text="Aqlli to’lovlar uchun Smart Ring!"
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <TextBlur
          className="mx-auto max-w-[27rem] pt-1.5 text-center text-base text-zinc-300 sm:text-lg"
          text="Aqlli uzuk uchun navbat ro'yxatiga qo'shiling — birinchilar qatorida buyurtma bering va yangiliklardan xabardor bo’ling!"
          duration={0.8}
        />
      </motion.div>
    </motion.div>
  );
}
