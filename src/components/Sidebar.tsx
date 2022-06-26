import classNames from "classnames";
import { useGetLessonsQuery } from "../graphql/generated";
import { Lesson } from "./Lesson";

interface SidebarProps {
  isSidebarOpen: boolean;
  onToggleSidebar: () => void;
}

export function Sidebar({ isSidebarOpen, onToggleSidebar }: SidebarProps) {
  const { data } = useGetLessonsQuery();

  return (
    <aside
      className={classNames(
        "lg:w-[348px] w-full bg-gray-700 p-6 border-l border-gray-600 lg:block absolute lg:static top-[73px] left-0 z-50",
        {
          "block ": isSidebarOpen,
          "hidden ": !isSidebarOpen,
        }
      )}
    >
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de aulas
      </span>

      <div className="flex flex-col gap-8">
        {data?.lessons.map((lesson) => {
          return (
            <Lesson
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              availableAt={new Date(lesson.availableAt)}
              type={lesson.lessonType}
              onToggleSidebar={onToggleSidebar}
            />
          );
        })}
      </div>
    </aside>
  );
}
