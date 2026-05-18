import { Card } from "@/components/ui/Card";

const layers = [
  { n: "01", title: "Demographic", body: "Who the user is." },
  { n: "02", title: "Situational", body: "What is happening in their life or business right now." },
  { n: "03", title: "Behavioral", body: "What they actually do, not just what they say." },
  { n: "04", title: "Emotional", body: "How the problem feels." },
  { n: "05", title: "Economic", body: "What the problem costs in time, money, stress, and missed opportunity." },
  { n: "06", title: "Social", body: "Who else influences the decision." },
  { n: "07", title: "Language", body: "The exact words users use to describe the pain." },
  {
    n: "08",
    title: "Existing alternatives",
    body: "What they use now, including spreadsheets, notes, consultants, competitors, or doing nothing.",
  },
  { n: "09", title: "Buying trigger", body: "What makes them act now." },
  { n: "10", title: "Desired identity", body: "Who they want to become." },
];

export function UserLayerGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {layers.map((layer, idx) => (
        <Card
          key={layer.title}
          glow={idx % 3 === 0 ? "blue" : idx % 3 === 1 ? "violet" : "teal"}
          className="relative overflow-hidden p-5"
        >
          <div className="flex items-start justify-between gap-3">
            <span className="font-mono text-[11px] text-slate-500">{layer.n}</span>
            <span className="h-1.5 w-10 rounded-full bg-gradient-to-r from-sky-400/60 via-indigo-400/50 to-teal-300/60" />
          </div>
          <h3 className="mt-3 text-lg font-semibold text-white">{layer.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">{layer.body}</p>
        </Card>
      ))}
    </div>
  );
}
