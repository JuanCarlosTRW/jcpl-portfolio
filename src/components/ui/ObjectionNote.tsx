export default function ObjectionNote({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-8 text-center text-[12px] text-[var(--text-muted)] max-w-2xl mx-auto italic">
      {children}
    </div>
  );
}
