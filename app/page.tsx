  "use client";

  import { toast } from "sonner";
  import { useState } from "react";
  import CTA from "@/components/cta";
  import Form from "@/components/form";
  import Logos from "@/components/logos";
  import Particles from "@/components/ui/particles";
  import Header from "@/components/header";
  import Footer from "@/components/footer";

  export default function Home() {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
    };

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setName(event.target.value);
    };

    const isValidEmail = (email: string) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    const sendToTelegram = async (name: string, email: string) => {
      const token = "7830524046:AAG6MqBG1xVQ58hMRHiwCipMPO47Un9Qti8"; // <-- o'zingizning Telegram bot tokeningiz
      const chatId = "1052097431";
      const message = `📥 Yangi ro'yxatdan o'tuvchi:\n\n👤 Ismi: ${name}\n📧 Email: ${email}`;

      const telegramApiUrl = `https://api.telegram.org/bot${token}/sendMessage`;

      try {
        await fetch(telegramApiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: message,
            parse_mode: "HTML",
          }),
        });
      } catch (error) {
        console.error("Telegramga yuborishda xatolik:", error);
        throw error;
      }
    };

    const handleSubmit = async () => {
  if (!name || !email) {
    toast.error("Iltimos, barcha maydonlarni to'ldiring 😠");
    return;
  }

  if (localStorage.getItem("submitted")) {
    toast.error("Siz allaqachon yuborgansiz 😇");
    return;
  }

  setLoading(true);

  toast.promise(
    sendToTelegram(name, email).then(() => {
      localStorage.setItem("submitted", "true"); // ❗ Belgilab qo'yiladi
      setName("");
      setEmail("");
    }),
    {
      loading: "Telegramga yuborilmoqda... 📩",
      success: "Ma'lumot muvaffaqiyatli yuborildi! 🎉",
      error: "Telegramga yuborishda xatolik yuz berdi 😢",
    }
  );

  setLoading(false);
};


    return (
      <main className="flex min-h-screen flex-col items-center overflow-x-clip pt-12 md:pt-24">
        <section className="flex flex-col items-center px-4 sm:px-6 lg:px-8">
          {/* <Header /> */}

          <CTA />

          <Form
            name={name}
            email={email}
            handleNameChange={handleNameChange}
            handleEmailChange={handleEmailChange}
            handleSubmit={handleSubmit}
            loading={loading}
          />

          {/* <Logos /> */}
        </section>

        {/* <Footer /> */}

        <Particles
          quantityDesktop={350}
          quantityMobile={100}
          ease={80}
          color={"#F7FF9B"}
          refresh
        />
      </main>
    );
  }
