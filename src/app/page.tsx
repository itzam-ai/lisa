"use client";

import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BounceContainer, useBounce } from "~/components/bounce-container";
import { Button } from "~/components/button";
import { Container } from "~/components/container";
import { cormorant } from "~/components/font";
import { Input } from "~/components/input";
import LisaOrb from "~/components/orb";
import { TextEffect } from "~/components/text-effect";

export default function HomePage() {
  const { bounce, triggerBounce } = useBounce();

  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    triggerBounce();

    setIsLoading(true);
    setResponse("");

    const res = await fetch("/api/generate-text", {
      method: "POST",
      body: JSON.stringify({ input }),
    });

    const reader = res.body?.getReader();

    if (!reader) {
      setIsLoading(false);
      return;
    }

    while (true) {
      const { done, value } = await reader.read();

      if (done) {
        break;
      }

      const text = new TextDecoder().decode(value);
      setResponse((prev) => prev + text);
    }

    setInput("");
    setIsLoading(false);
  };

  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-gradient-to-tl from-stone-950 to-stone-900 text-white">
      <LisaOrb active={isLoading} />

      <Container>
        <h1 className={`${cormorant.className} text-3xl`}>Lisa</h1>

        <div className="flex flex-col items-center">
          <BounceContainer bounce={bounce}>
            <form onSubmit={handleSubmit}>
              <Input input={input} setInput={setInput} isLoading={isLoading} />
              <Button isLoading={isLoading} />
            </form>
          </BounceContainer>

          <AnimatePresence>
            {response && (
              <TextEffect per="word" as="h3" preset="blur">
                {response}
              </TextEffect>
            )}
          </AnimatePresence>
        </div>

        <p className={`${cormorant.className} text-stone-700`}>
          Powered by{" "}
          <Link
            href="https://itz.am"
            target="_blank"
            className="hover:opacity-80 transition-opacity"
          >
            <Image
              src="/logo.png"
              alt="logo"
              width={64}
              height={64}
              className="mb-1 ml-1 inline-block"
            />
          </Link>
        </p>
      </Container>
    </main>
  );
}
