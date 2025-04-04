export default function LisaOrb({ active }: { active: boolean }) {
  return (
    <div
      className={`pointer-events-none fixed inset-0 z-0 animate-[bounce_1s_ease-in-out_infinite] flex items-center justify-center overflow-hidden transition-opacity duration-700 ${active ? "opacity-80" : "opacity-30"} animate-[spin_20s_ease-in-out_infinite]`}
    >
      {/* Main orb container with relative positioning */}
      <div className={`relative transition-all  animate-[pulse_12s_ease-in-out_infinite] duration-700 ${active ? "h-[450px] w-[450px]" : "h-[400px] w-[400px]"}`}>
        {/* Primary orange core */}
        <div className="animate-[bounce_20s_ease-in-out_infinite] absolute top-1/2 left-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-600/50 blur-3xl"></div>

        {/* Orbiting elements */}
        <div
          className="absolute top-1/2 left-1/2 h-[80px] w-[80px] -translate-x-1/2 -translate-y-1/2 animate-[pulse_12s_ease-in-out_infinite] rounded-full bg-orange-500/60 blur-xl"
          style={{
            transformOrigin: "center",
            transform: "translateX(80px) translateY(0px)",
          }}
        ></div>

        <div
          className="animate-spin absolute top-1/2 left-1/2 h-[100px] w-[100px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-yellow-400/20 to-orange-400/20 blur-2xl"
        ></div>

        <div
          className="animate-spin-slow absolute top-1/2 left-1/2 h-[60px] w-[60px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-400/70 blur-2xl"
          style={{
            transformOrigin: "center",
            transform: "translateX(0px) translateY(40px)",
          }}
        ></div>

        <div
          className="animate-spin-reverse absolute top-1/2 left-1/2 h-[40px] w-[40px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-300/40 blur-xl"
          style={{
            transformOrigin: "center",
            transform: "translateX(0px) translateY(-120px)",
          }}
        ></div>

        {/* Pink element with floating animation */}
        <div
          className="absolute top-1/2 left-1/2 h-[70px] w-[70px] -translate-x-1/2 -translate-y-1/2 animate-[pulse_6s_ease-in-out_infinite] rounded-full bg-red-400/60 blur-2xl"
          style={{
            transformOrigin: "center",
            transform: "translateX(100px) translateY(-80px)",
          }}
        ></div>

        {/* Pulsing outer aura */}
        <div className="animate-[pulse_4s_ease-in-out_infinite] absolute top-1/2 left-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-600/30 blur-3xl"></div>
      </div>
    </div>
  );
}
