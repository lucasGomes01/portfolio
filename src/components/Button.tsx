type Props = {
  children: React.ReactNode;
};

export function Button({ children }: Props) {
  return (
    <button className="bg-[#00E5CC] text-black font-bold px-5 py-3 rounded-lg hover:opacity-80 transition">
      {children}
    </button>
  );
}