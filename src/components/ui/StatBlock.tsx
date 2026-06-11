interface StatBlockProps {
  value: string;
  label: string;
  labelFa?: string;
}

export default function StatBlock({ value, label, labelFa }: StatBlockProps) {
  return (
    <div className="flex flex-col items-center gap-1">
      <span
        className="text-blood-500 font-black text-4xl sm:text-5xl leading-none glow-red"
        style={{ fontFamily: "Impact, Arial Black, sans-serif" }}
      >
        {value}
      </span>
      <span className="text-void-300 text-xs uppercase tracking-widest font-medium text-center">
        {label}
      </span>
      {labelFa && (
        <span className="fa-text text-void-600 text-xs">{labelFa}</span>
      )}
    </div>
  );
}
