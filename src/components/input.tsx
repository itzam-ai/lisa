export const Input = ({
  input,
  setInput,
  isLoading,
}: {
  input: string;
  setInput: (input: string) => void;
  isLoading: boolean;
}) => (
  <input
    disabled={isLoading}
    className="w-[600px] rounded-full border border-neutral-800 bg-neutral-900/40 px-5 py-4 text-sm text-neutral-200 backdrop-blur-sm focus:outline-none disabled:opacity-80"
    placeholder="What's on your mind?"
    value={input}
    onChange={(e) => setInput(e.target.value)}
  />
);
