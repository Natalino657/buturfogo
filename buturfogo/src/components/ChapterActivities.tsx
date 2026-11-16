import type { ActivityGroup } from "@/i18n/dictionaries/pt";

type ChapterActivitiesProps = {
  /** Small heading, e.g. "O que pode fazer". */
  title: string;
  groups: readonly ActivityGroup[];
  className?: string;
};

/**
 * "O que pode fazer": a few short tags per place — a glance, not a guide.
 * Named groups (as in "Pela ilha") lead each row with the place name.
 */
export function ChapterActivities({
  title,
  groups,
  className,
}: ChapterActivitiesProps) {
  return (
    <div className={className}>
      <h4 className="text-xs font-semibold tracking-[0.24em] text-sand uppercase">
        {title}
      </h4>

      <div className="mt-4 flex flex-col gap-3">
        {groups.map((group, index) => (
          <div
            key={group.name ?? index}
            className="flex flex-wrap items-center gap-2"
          >
            {group.name && (
              <p className="mr-1 w-full font-heading text-sm font-bold text-cream sm:w-36">
                {group.name}
              </p>
            )}
            <ul className="contents">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-[13px] leading-5 text-cream/80"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
