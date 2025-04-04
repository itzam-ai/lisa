import Image from "next/image";

export default function Credits() {
  return (
    <p className="text-sm text-stone-700">
      Powered by{" "}
      <Image
        src="/logo.png"
        alt="logo"
        width={64}
        height={64}
        className="mb-1 ml-1 inline-block"
      />
    </p>
  );
}
