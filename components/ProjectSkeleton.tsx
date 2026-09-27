interface ProjectSkeletonProps {
  count?: number;
}

export function ProjectSkeleton({ count = 6 }: ProjectSkeletonProps) {
  return (
    <div className="grid grid-cols-1 border-l border-t border-line md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="min-h-[11rem] border-b border-r border-line p-6 animate-pulse"
        >
          <div className="flex h-full gap-5">
            <div className="h-3 w-6 shrink-0 bg-line/70" />

            <div className="flex min-w-0 flex-1 flex-col">
              <div className="h-5 w-3/5 bg-line/80" />
              <div className="mt-3 h-3.5 w-4/5 bg-line/50" />
              <div className="mt-1.5 h-3.5 w-1/2 bg-line/40" />

              <div className="mt-auto pt-6">
                <div className="h-11 w-32 border border-line bg-line/20" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
