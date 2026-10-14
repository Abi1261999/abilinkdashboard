import { useMemo, useState } from "react";
import {
  ArrowDownRight, ArrowRight, Bell, CalendarDays, Check, CheckCheck,
  ChevronDown, FolderKanban, Menu, MoreHorizontal, Plus, Search, ShieldCheck,
  Sparkles, TrendingUp, Users, X, Zap, Activity
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Sidebar from "./components/layout/Sidebar";
import Avatar from "./components/ui/Avatar";
import StatCard from "./components/dashboard/StatCard";
import ProjectRow from "./components/projects/ProjectRow";
import TaskRow from "./components/tasks/TaskRow";
import OtherView from "./components/views/OtherView";
import LandingPage from "./components/views/LandingPage";
import { initialTasks, projects, initialActivity, team } from "./data/workspaceData";

export default function App() {
  const [active, setActive] = useState("Overview");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState("All tasks");
  const [showNotifications, setShowNotifications] = useState(false);
  const [showNewTask, setShowNewTask] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [toast, setToast] = useState("");

  const filteredTasks = useMemo(() => tasks.filter((task) => {
    const matchesSearch = `${task.title} ${task.project} ${task.priority}`.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "All tasks" || (filter === "Completed" ? task.done : !task.done);
    return matchesSearch && matchesFilter;
  }), [tasks, search, filter]);

  const notify = (message) => {
    setToast(message);
    window.setTimeout(() => setToast(""), 2600);
  };

  const toggleTask = (id) => setTasks((prev) => prev.map((task) => task.id === id ? { ...task, done: !task.done } : task));

  const addTask = (event) => {
    event.preventDefault();
    if (!newTitle.trim()) return;
    setTasks((prev) => [{ id: Date.now(), title: newTitle.trim(), project: "Personal tasks", due: "Today", priority: "Medium", done: false, color: "violet" }, ...prev]);
    setNewTitle("");
    setShowNewTask(false);
    setFilter("All tasks");
    notify("Task added successfully");
  };

  const chooseNav = (label) => {
    setActive(label);
    setMobileOpen(false);
    if (label !== "Overview") notify(`${label} view selected — demo workspace`);
  };

  if (active === "Website") return <LandingPage onOpenWorkspace={() => chooseNav("Overview")} />;

  return (
    <div className="min-h-screen bg-[#f8f7fc] text-slate-800">
      <AnimatePresence>
        {mobileOpen && <motion.button aria-label="Close sidebar overlay" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setMobileOpen(false)} className="fixed inset-0 z-40 bg-slate-950/35 md:hidden"/>}
      </AnimatePresence>
      <Sidebar active={active} onSelect={chooseNav} mobileOpen={mobileOpen} onClose={()=>setMobileOpen(false)} />

      <div className="min-h-screen md:pl-[258px]">
        <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
          <div className="flex h-[74px] items-center justify-between gap-3 px-4 sm:px-7 lg:px-9">
            <div className="flex min-w-0 items-center gap-3">
              <button onClick={()=>setMobileOpen(true)} className="rounded-xl border border-slate-200 p-2 text-slate-600 md:hidden" aria-label="Open sidebar"><Menu size={19}/></button>
              <div className="hidden items-center gap-2 text-sm text-slate-400 sm:flex"><span>Workspace</span><span>/</span><span className="font-bold text-slate-800">{active}</span></div>
              <div className="sm:hidden"><p className="text-xs text-slate-400">Workspace</p><p className="text-sm font-bold">{active}</p></div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <label className="relative hidden lg:block"><Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"/><input value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search tasks..." className="h-10 w-52 rounded-xl border border-slate-200 bg-slate-50 pl-9 pr-12 text-sm outline-none transition focus:border-brand-300 focus:bg-white focus:ring-4 focus:ring-brand-50"/><kbd className="absolute right-2 top-1/2 -translate-y-1/2 rounded border border-slate-200 bg-white px-1.5 py-0.5 text-[10px] text-slate-400">⌘ K</kbd></label>
              <div className="relative">
                <button onClick={()=>setShowNotifications(!showNotifications)} aria-label="Notifications" className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 transition hover:bg-brand-50 hover:text-brand-700"><Bell size={18}/><span className="absolute right-2 top-2 h-2 w-2 rounded-full border-2 border-white bg-rose-500"/></button>
                {showNotifications && <div className="absolute right-0 top-12 z-50 w-72 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl"><div className="flex items-center justify-between"><p className="font-bold">Notifications</p><button onClick={()=>setShowNotifications(false)}><X size={16}/></button></div><p className="mt-3 rounded-xl bg-brand-50 p-3 text-sm text-slate-600">Maya completed “Homepage wireframes”.</p><p className="mt-2 rounded-xl bg-slate-50 p-3 text-sm text-slate-600">Your weekly report is ready to review.</p></div>}
              </div>
              <div className="hidden h-8 w-px bg-slate-200 sm:block"/>
              <button onClick={()=>notify("Profile menu — demo workspace")} className="flex items-center gap-2.5 rounded-xl p-1.5 transition hover:bg-slate-50"><Avatar initials="SS" color="violet" size="h-9 w-9"/><div className="hidden text-left sm:block"><p className="text-sm font-bold text-slate-800">Sam Smith</p><p className="text-xs text-slate-400">Admin</p></div><ChevronDown size={14} className="hidden text-slate-400 sm:block"/></button>
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-[1600px] px-4 py-7 sm:px-7 sm:py-8 lg:px-9">
          {active === "Overview" ? (
            <>
              <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                <div><div className="flex items-center gap-2 text-sm font-semibold text-brand-700"><Sparkles size={15}/> Monday motivation</div><h1 className="mt-2 font-display text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">Good morning, Sam <span>✌️</span></h1><p className="mt-2 text-sm text-slate-500 sm:text-base">Here's what's happening with your team today.</p></div>
                <div className="flex flex-wrap gap-2"><button onClick={()=>notify("Report exported — demo only")} className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-600 transition hover:border-brand-200 hover:text-brand-700"><ArrowDownRight size={16}/> Export report</button><button onClick={()=>setShowNewTask(true)} className="primary-btn"><Plus size={17}/> New task</button></div>
              </div>

              <section aria-label="Workspace metrics" className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                <StatCard title="Total projects" value="12" change="+2 this month" icon={FolderKanban} tone="violet" trend="up"/>
                <StatCard title="Tasks completed" value={`${tasks.filter(t=>t.done).length+124}`} change="+18.6% this week" icon={CheckCheck} tone="green" trend="up"/>
                <StatCard title="Team members" value="18" change="3 active now" icon={Users} tone="blue" trend="up"/>
                <StatCard title="Productivity score" value="86%" change="+5.2% this week" icon={Activity} tone="orange" trend="up"/>
              </section>

              <div className="mt-6 grid gap-6 xl:grid-cols-[1.45fr_1fr]">
                <section className="panel min-w-0 p-5 sm:p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3"><div><h2 className="font-display text-lg font-extrabold text-slate-900">Project overview</h2><p className="mt-1 text-sm text-slate-400">Track progress across your active projects.</p></div><button onClick={()=>chooseNav("Projects")} className="inline-flex items-center gap-1 text-sm font-bold text-brand-700 hover:gap-2">View all <ArrowRight size={15}/></button></div>
                  <div className="mt-5 space-y-5">{projects.map((project,index)=><ProjectRow key={project.name} project={project} index={index}/>)}</div>
                </section>

                <section className="panel min-w-0 p-5 sm:p-6">
                  <div className="flex items-start justify-between"><div><h2 className="font-display text-lg font-extrabold text-slate-900">Weekly activity</h2><p className="mt-1 text-sm text-slate-400">Tasks completed this week</p></div><button aria-label="Activity options" onClick={()=>notify("Activity options — demo")} className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-50"><MoreHorizontal size={20}/></button></div>
                  <div className="mt-7 flex items-end justify-between gap-2">
                    {[{d:"Mon",v:48},{d:"Tue",v:72},{d:"Wed",v:58},{d:"Thu",v:86},{d:"Fri",v:65},{d:"Sat",v:40},{d:"Sun",v:55}].map((bar,i)=><div key={bar.d} className="flex flex-1 flex-col items-center gap-2.5"><span className="text-[10px] font-bold text-slate-400">{bar.v}</span><div className="flex h-36 w-full items-end rounded-lg bg-brand-50"><motion.div initial={{height:0}} animate={{height:`${bar.v}%`}} transition={{duration:0.7,delay:i*.06}} className={`w-full rounded-lg ${i===3?"bg-brand-600":"bg-brand-200 hover:bg-brand-400"} transition-colors`}/></div><span className="text-xs text-slate-400">{bar.d}</span></div>)}
                  </div>
                  <div className="mt-6 flex items-center justify-between rounded-xl bg-emerald-50 p-3.5"><div className="flex items-center gap-2 text-emerald-700"><TrendingUp size={17}/><span className="text-sm font-bold">You're doing great!</span></div><span className="text-xs font-bold text-emerald-700">+18.6%</span></div>
                </section>
              </div>

              <div className="mt-6 grid gap-6 xl:grid-cols-[1.45fr_1fr]">
                <section className="panel min-w-0 p-5 sm:p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3"><div><h2 className="font-display text-lg font-extrabold text-slate-900">My tasks</h2><p className="mt-1 text-sm text-slate-400">{tasks.filter(t=>!t.done).length} tasks remaining</p></div><div className="flex gap-2"><select value={filter} onChange={(e)=>setFilter(e.target.value)} className="rounded-lg border border-slate-200 bg-white px-2.5 py-2 text-xs font-semibold text-slate-600 outline-none focus:border-brand-300"><option>All tasks</option><option>Pending</option><option>Completed</option></select><button onClick={()=>setShowNewTask(true)} aria-label="Add task" className="rounded-lg border border-slate-200 p-2 text-slate-500 hover:border-brand-200 hover:text-brand-700"><Plus size={17}/></button></div></div>
                  <div className="mt-4 hidden grid-cols-[minmax(0,1fr)_105px_90px_30px] gap-3 border-b border-slate-100 px-1 pb-3 text-[10px] font-bold uppercase tracking-wider text-slate-400 sm:grid"><span>Task name</span><span>Due date</span><span>Priority</span><span/></div>
                  <div className="divide-y divide-slate-100">{filteredTasks.map(task=><TaskRow key={task.id} task={task} onToggle={toggleTask}/>)}{filteredTasks.length===0&&<p className="py-8 text-center text-sm text-slate-400">No tasks found. Try another search or filter.</p>}</div>
                </section>

                <div className="space-y-6">
                  <section className="panel p-5 sm:p-6"><div className="flex items-center justify-between"><div><h2 className="font-display text-lg font-extrabold text-slate-900">Recent activity</h2><p className="mt-1 text-sm text-slate-400">Latest team updates</p></div><button onClick={()=>notify("You're all caught up!")} className="text-xs font-bold text-brand-700">View all</button></div><div className="mt-5 space-y-4">{initialActivity.map((item,i)=><div key={item.name} className="flex gap-3"><Avatar initials={item.initials} color={item.color}/><div className="min-w-0 flex-1"><p className="text-sm leading-5 text-slate-600"><span className="font-bold text-slate-800">{item.name}</span> {item.action} <span className="font-semibold text-brand-700">{item.target}</span></p><p className="mt-1 text-xs text-slate-400">{item.time}</p></div></div>)}</div></section>
                  <section className="panel p-5 sm:p-6"><div className="flex items-center justify-between"><div><h2 className="font-display text-lg font-extrabold text-slate-900">Your team</h2><p className="mt-1 text-sm text-slate-400">People in your workspace</p></div><button onClick={()=>chooseNav("Team")} className="text-xs font-bold text-brand-700">View team</button></div><div className="mt-4 space-y-3">{team.slice(0,3).map(person=><div key={person.name} className="flex items-center gap-3"><Avatar initials={person.initials} color={person.color}/><div className="min-w-0 flex-1"><p className="truncate text-sm font-bold text-slate-800">{person.name}</p><p className="text-xs text-slate-400">{person.role}</p></div><span className={`h-2 w-2 rounded-full ${person.status==="Online"?"bg-emerald-500":"bg-amber-400"}`} title={person.status}/></div>)}</div><button onClick={()=>notify("Invite link copied — demo only")} className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-brand-200 py-2.5 text-sm font-bold text-brand-700 transition hover:bg-brand-50"><Plus size={16}/> Invite a teammate</button></section>
                </div>
              </div>

              <section className="mt-6 overflow-hidden rounded-2xl bg-gradient-to-r from-brand-700 via-brand-600 to-violet-500 p-6 text-white sm:p-8">
                <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center"><div><div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-bold"><Zap size={13}/> ABILINK PRO</div><h2 className="mt-3 font-display text-xl font-extrabold sm:text-2xl">Make your team's next big move.</h2><p className="mt-2 max-w-xl text-sm leading-6 text-brand-100">Unlock advanced reports, smarter automations, and more ways to keep great work moving.</p></div><button onClick={()=>notify("Plan details — demo workspace")} className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-xl bg-white px-4 py-3 text-sm font-bold text-brand-700 transition hover:-translate-y-0.5 hover:bg-brand-50 sm:self-center">Explore plans <ArrowRight size={16}/></button></div>
              </section>
            </>
          ) : (
            <OtherView active={active} onBack={()=>chooseNav("Overview")} notify={notify}/>
          )}
          <div className="mt-8 flex flex-col justify-between gap-2 border-t border-slate-200/70 pt-5 text-xs text-slate-400 sm:flex-row"><span>© {new Date().getFullYear()} AbiLink Workspace. All rights reserved.</span><span className="flex items-center gap-1"><ShieldCheck size={13}/> Your workspace is secure</span></div>
        </main>
      </div>

      <AnimatePresence>
        {showNewTask && <motion.div className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/40 p-4 backdrop-blur-sm" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setShowNewTask(false)}><motion.form onSubmit={addTask} initial={{opacity:0,scale:.96,y:10}} animate={{opacity:1,scale:1,y:0}} exit={{opacity:0,scale:.96}} onClick={(e)=>e.stopPropagation()} className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl"><div className="flex items-center justify-between"><h2 className="font-display text-xl font-extrabold">Create a task</h2><button type="button" onClick={()=>setShowNewTask(false)} className="rounded-lg p-2 text-slate-400 hover:bg-slate-100" aria-label="Close dialog"><X size={18}/></button></div><label className="mt-5 block text-sm font-bold text-slate-700" htmlFor="task-title">Task name</label><input id="task-title" autoFocus required value={newTitle} onChange={(e)=>setNewTitle(e.target.value)} placeholder="e.g. Prepare project brief" className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-brand-400 focus:ring-4 focus:ring-brand-50"/><div className="mt-5 flex justify-end gap-2"><button type="button" onClick={()=>setShowNewTask(false)} className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-bold text-slate-600">Cancel</button><button type="submit" className="primary-btn"><Plus size={16}/> Add task</button></div></motion.form></motion.div>}
      </AnimatePresence>
      <AnimatePresence>{toast&&<motion.div initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} exit={{opacity:0,y:12}} role="status" className="fixed bottom-5 left-1/2 z-[80] -translate-x-1/2 rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white shadow-xl">{toast}</motion.div>}</AnimatePresence>
    </div>
  );
}
