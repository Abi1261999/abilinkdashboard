import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function StatCard({title,value,change,icon:Icon,tone}) {
  const tones = {violet:"bg-brand-50 text-brand-700",green:"bg-emerald-50 text-emerald-700",blue:"bg-sky-50 text-sky-700",orange:"bg-orange-50 text-orange-700"};
  return <motion.article initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} whileHover={{y:-3}} className="rounded-2xl border border-slate-100 bg-white p-5 shadow-panel"><div className="flex items-center justify-between"><span className="text-sm font-semibold text-slate-500">{title}</span><span className={`flex h-10 w-10 items-center justify-center rounded-xl ${tones[tone]}`}><Icon size={19}/></span></div><div className="mt-4 flex items-end justify-between gap-2"><span className="font-display text-3xl font-extrabold tracking-tight text-slate-900">{value}</span><span className="mb-1 inline-flex items-center gap-1 whitespace-nowrap text-xs font-bold text-emerald-600"><ArrowUpRight size={14}/>{change}</span></div></motion.article>;
}
