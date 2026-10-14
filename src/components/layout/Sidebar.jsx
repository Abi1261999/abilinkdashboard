import {
  ArrowUpRight, ChevronDown, CircleHelp, Command, FolderKanban, LayoutDashboard, ListTodo,
  LogOut, Settings, Sparkles, Users, MoreHorizontal, X
} from "lucide-react";
import { navItems } from "../../data/workspaceData";
import Avatar from "../ui/Avatar";

export default function Sidebar({active,onSelect,mobileOpen,onClose}) {
  return (
    <aside className={`fixed inset-y-0 left-0 z-50 flex w-[258px] flex-col border-r border-slate-100 bg-white px-4 pb-4 pt-5 transition-transform duration-300 md:translate-x-0 ${mobileOpen?"translate-x-0":"-translate-x-full"}`}>
      <div className="flex items-center justify-between px-2"><a href="#top" onClick={()=>onSelect("Overview")} className="flex items-center gap-2.5"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-glow"><Command size={21}/></span><span className="font-display text-xl font-extrabold tracking-tight text-slate-900">abilink<span className="text-brand-600">.</span></span></a><button onClick={onClose} className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 md:hidden" aria-label="Close sidebar"><X size={18}/></button></div>
      <button onClick={()=>onSelect("Website")} className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-3 py-2.5 text-sm font-bold text-white transition hover:bg-violet-700"><ArrowUpRight size={16}/> View marketing website</button>
      <button onClick={()=>onSelect("Projects")} className="mt-4 flex items-center gap-3 rounded-xl border border-slate-200 p-3 text-left transition hover:border-brand-200 hover:bg-brand-50"><div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-100 text-brand-700"><FolderKanban size={18}/></div><div className="min-w-0 flex-1"><p className="truncate text-sm font-bold text-slate-800">My workspace</p><p className="mt-0.5 text-xs text-slate-400">Free plan</p></div><ChevronDown size={15} className="text-slate-400"/></button>
      <p className="muted-label mb-2 mt-8 px-3">Workspace</p>
      <nav className="space-y-1">{navItems.map(({label,icon:Icon,count})=><button key={label} onClick={()=>onSelect(label)} className={`nav-link w-full ${active===label?"nav-link-active":""}`}><Icon size={18}/><span className="flex-1 text-left">{label}</span>{count&&<span className="rounded-md bg-white px-2 py-0.5 text-xs text-brand-700">{count}</span>}</button>)}</nav>
      <p className="muted-label mb-2 mt-8 px-3">Preferences</p>
      <nav className="space-y-1"><button onClick={()=>onSelect("Settings")} className={`nav-link w-full ${active==="Settings"?"nav-link-active":""}`}><Settings size={18}/>Settings</button><button onClick={()=>onSelect("Help center")} className={`nav-link w-full ${active==="Help center"?"nav-link-active":""}`}><CircleHelp size={18}/>Help center</button></nav>
      <div className="mt-auto">
        <div className="rounded-2xl bg-gradient-to-br from-brand-50 to-violet-100/70 p-4"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-brand-700 shadow-sm"><Sparkles size={18}/></span><p className="mt-3 text-sm font-extrabold text-slate-800">Do more with Pro</p><p className="mt-1 text-xs leading-5 text-slate-500">Unlock powerful tools for your growing team.</p><button onClick={()=>onSelect("Upgrade plan")} className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-brand-600 py-2.5 text-xs font-bold text-white transition hover:bg-brand-700">Explore plans <ArrowUpRight size={14}/></button></div>
        <button onClick={()=>onSelect("Settings")} className="mt-4 flex w-full items-center gap-3 rounded-xl border-t border-slate-100 px-2 pt-4 text-left"><Avatar initials="SS" color="violet"/><div className="min-w-0 flex-1"><p className="text-sm font-bold text-slate-800">Sam Smith</p><p className="text-xs text-slate-400">sam@abilink.demo</p></div><MoreHorizontal size={18} className="text-slate-400"/></button>
      </div>
    </aside>
  );
}
