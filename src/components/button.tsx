import { ArrowUpIcon, Loader2 } from "lucide-react";

export const Button = ({ isLoading }: { isLoading: boolean }) => (
  <button
    disabled={isLoading}
    type="submit"
    className="absolute top-1/2 right-3 -translate-y-1/2 rounded-full bg-neutral-800 px-2 py-2 text-xs text-neutral-300 transition-colors hover:cursor-pointer hover:bg-neutral-700 hover:text-neutral-100 disabled:bg-transparent disabled:text-neutral-500 disabled:opacity-60"
  >
    {isLoading ? (
      <Loader2 className="size-4 animate-spin" />
    ) : (
      <ArrowUpIcon className="size-4" />
    )}
  </button>
);
