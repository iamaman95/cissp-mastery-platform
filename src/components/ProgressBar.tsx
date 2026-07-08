export default function ProgressBar({ pct, colorClass = 'bg-emerald-500' }: { pct: number; colorClass?: string }) {
  return (
    <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
      <div
        className={`h-full ${colorClass} transition-all`}
        style={{ width: `${Math.round(Math.min(1, Math.max(0, pct)) * 100)}%` }}
      />
    </div>
  );
}
