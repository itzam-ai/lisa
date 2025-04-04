export const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="relative z-10 container mx-auto flex h-screen flex-col items-center justify-between py-12">{children}</div>;
};
