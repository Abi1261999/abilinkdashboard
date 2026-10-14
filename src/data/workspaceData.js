// Sample workspace data used by the AbiLink dashboard demo.
import { LayoutDashboard, FolderKanban, ListTodo, Users, FileBarChart } from "lucide-react";

export const initialTasks = [
  { id: 1, title: "Finalize homepage wireframes", project: "Website redesign", due: "Today", priority: "High", done: false, color: "violet" },
  { id: 2, title: "Review Q4 campaign assets", project: "Marketing launch", due: "Today", priority: "Medium", done: false, color: "pink" },
  { id: 3, title: "Update onboarding flow", project: "Mobile app", due: "Tomorrow", priority: "High", done: true, color: "blue" },
  { id: 4, title: "Prepare sprint retrospective", project: "Product sprint", due: "Oct 18", priority: "Low", done: false, color: "amber" },
  { id: 5, title: "Share client progress report", project: "Website redesign", due: "Oct 19", priority: "Medium", done: false, color: "violet" },
];

export const projects = [
  { name: "Website redesign", type: "Design", progress: 78, tasks: "18/23 tasks", people: ["MP","JK","AL"], color: "violet", date: "Oct 24, 2026" },
  { name: "Marketing launch", type: "Marketing", progress: 54, tasks: "13/24 tasks", people: ["SR","MP","DW"], color: "pink", date: "Oct 28, 2026" },
  { name: "Mobile app", type: "Development", progress: 86, tasks: "31/36 tasks", people: ["JK","AL","SR"], color: "blue", date: "Oct 20, 2026" },
];

export const initialActivity = [
  { initials: "MP", name: "Maya Patel", action: "completed a task in", target: "Website redesign", time: "12 min ago", color: "violet" },
  { initials: "JK", name: "James Kim", action: "uploaded new files to", target: "Mobile app", time: "38 min ago", color: "blue" },
  { initials: "SR", name: "Sofia Rivera", action: "commented on", target: "Marketing launch", time: "1 hour ago", color: "pink" },
  { initials: "AL", name: "Alex Lee", action: "joined the project", target: "Website redesign", time: "3 hours ago", color: "amber" },
];

export const team = [
  { initials: "MP", name: "Maya Patel", role: "Product designer", color: "violet", status: "Online" },
  { initials: "JK", name: "James Kim", role: "Frontend developer", color: "blue", status: "Online" },
  { initials: "SR", name: "Sofia Rivera", role: "Marketing lead", color: "pink", status: "Away" },
  { initials: "AL", name: "Alex Lee", role: "Product manager", color: "amber", status: "Online" },
];

export const navItems = [
  { label: "Overview", icon: LayoutDashboard },
  { label: "Projects", icon: FolderKanban },
  { label: "My tasks", icon: ListTodo, count: "5" },
  { label: "Team", icon: Users },
  { label: "Reports", icon: FileBarChart },
];
export const colorMap = {
  violet: "bg-violet-100 text-violet-700",
  pink: "bg-pink-100 text-pink-700",
  blue: "bg-sky-100 text-sky-700",
  amber: "bg-amber-100 text-amber-700",
};
