import { FolderKanban } from "lucide-react";
import { motion } from "framer-motion";
import { colorMap } from "../../data/workspaceData";
import Avatar from "../ui/Avatar";

export default function ProjectRow({project,index}) {
  const progressColor = {violet:"bg-brand-600",pink:"bg-pink-500",blue:"bg-sky-500"}[project.color];
  return <div className="group"><div className="flex items-start gap-3"><div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${colorMap[project.color]}`}><FolderKanban size={18}/></div><div className="min-w-0 flex-1"><div className="flex flex-wrap items-center justify-between gap-2"><h3 className="text-sm font-bold text-slate-800">{project.name}</h3><span className="text-xs text-slate-400">{project.date}</span></div><div className="mt-1 flex items-center gap-2"><span className="text-xs text-slate-400">{project.type}</span><span className="h-1 w-1 rounded-full bg-slate-300"/><span className="text-xs text-slate-400">{project.tasks}</span></div></div></div><div className="mt-3 flex items-center gap-3"><div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-100"><motion.div initial={{width:0}} animate={{width:`${project.progress}%`}} transition={{duration:.7,delay:index*.1}} className={`h-full rounded-full ${progressColor}`}/></div><span className="w-9 text-right text-xs font-extrabold text-slate-600">{project.progress}%</span></div><div className="mt-3 flex -space-x-2">{project.people.map((person,i)=><Avatar key={person} initials={person} color={["violet","blue","pink"][i]} size="h-7 w-7" />)}</div></div>;
}
