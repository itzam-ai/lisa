"use client";

import { AnimatePresence, motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BounceContainer, useBounce } from "~/components/bounce-container";
import { Button } from "~/components/button";
import { Container } from "~/components/container";
import { cormorant } from "~/components/font";
import { Input } from "~/components/input";
import LisaOrb from "~/components/orb";
import { sendMessageToLisa } from "./actions";

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

    const response = await sendMessageToLisa(input);

    for await (const chunk of response.stream) {
      setResponse((prev) => prev + chunk);
    }

    setIsLoading(false);
    setInput("");
  };

  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-gradient-to-tl from-neutral-950 to-neutral-900 text-white">
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
              <motion.div
                initial={{
                  opacity: 0,
                  marginTop: 0,
                  height: 0,
                  filter: "blur(12px)",
                }}
                animate={{
                  opacity: 1,
                  marginTop: 24,
                  height: "auto",
                  filter: "blur(0px)",
                }}
                exit={{
                  opacity: 0,
                  marginTop: 0,
                  height: 0,
                  filter: "blur(12px)",
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.2,
                  opacity: { duration: 0.3, delay: 0.1 },
                }}
                className="max-w-lg overflow-hidden text-center text-sm text-neutral-200"
              >
                <div className="prose prose-sm dark:prose-invert prose-neutral prose-p:my-2 prose-headings:my-3 prose-ul:my-2 prose-ol:my-2 prose-pre:my-2 prose-blockquote:my-2 max-w-none pr-6 pb-8">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {response}
                  </ReactMarkdown>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <p className={`${cormorant.className} text-neutral-500`}>
          Powered by{" "}
          <Link
            href="https://itz.am"
            target="_blank"
            className="transition-opacity hover:opacity-80"
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
