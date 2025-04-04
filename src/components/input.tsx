
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
    className="w-96 rounded-full border border-stone-800 bg-stone-900/70 px-5 py-4 text-sm text-stone-200 backdrop-blur-sm focus:outline-none disabled:opacity-80"
    placeholder="What's on your mind?"
    value={input}
    onChange={(e) => setInput(e.target.value)}
  />
);
