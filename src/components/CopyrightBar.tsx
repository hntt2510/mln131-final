import { copyright, team } from '../data/content'

export default function CopyrightBar() {
  return (
    <div id="copyright" className="mx-auto max-w-[1200px] px-6 py-4">
      <div className="mb-4 flex flex-wrap gap-2">
        {team.map((m) => (
          <span
            key={m.id}
            className="rounded-full border border-[#051A24]/10 px-3 py-1 text-xs text-[#273C46]"
          >
            {m.name} · <span className="font-mono">{m.id}</span>
          </span>
        ))}
      </div>
      <div className="flex justify-between text-sm text-[#051A24]">
        <span>{copyright.left}</span>
        <span>{copyright.right}</span>
      </div>
    </div>
  )
}
