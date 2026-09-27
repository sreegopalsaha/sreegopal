export function Sidebar() {
  return (
    <aside className="w-44 shrink-0 border-r border-foreground pt-10 px-5 flex flex-col gap-1">
      <div className="font-mono text-[0.625rem] uppercase tracking-widest text-muted mb-4">
        Admin
      </div>
      <span className="font-mono text-xs uppercase tracking-widest border-b border-foreground pb-2 font-bold">
        Projects
      </span>
      <span className="font-mono text-xs uppercase tracking-widest text-muted pt-2 cursor-not-allowed">
        Blogs <span className="text-[0.5rem]">soon</span>
      </span>
    </aside>
  )
}
