export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button>
      <span>{children}</span>
    </button>
  );
}
