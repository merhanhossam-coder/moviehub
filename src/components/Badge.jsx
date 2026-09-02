function Badge({ text, tone = "default" }) {
  const tones = {
    default: "bg-slate-700 text-slate-300",
    neutral: "bg-slate-700 text-slate-300",
    live: "bg-red-500/15 text-red-400",
    new: "bg-emerald-500/15 text-emerald-400",
  }
  return (
    <span className={`inline-block text-[10px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full ${tones[tone]}`}>
      {text}
    </span>
  )
}

export default Badge
