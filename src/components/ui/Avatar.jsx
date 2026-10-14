import { colorMap } from "../../data/workspaceData";

export default function Avatar({initials,color="violet",size="h-9 w-9"}) {
  return <div className={`${size} ${colorMap[color]||colorMap.violet} flex shrink-0 items-center justify-center rounded-full text-xs font-extrabold ring-2 ring-white`}>{initials}</div>;
}
