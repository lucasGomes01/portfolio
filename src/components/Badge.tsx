type Props = {
  label: string;
  color: string;
};

export function Badge({ label, color, ...props }: Props) {
  return (
    <span
      className="text-white text-xs px-3 py-1 rounded-md"
      style={{ backgroundColor: color }}
      {...props}
    >
      {label}
    </span>
  );
}