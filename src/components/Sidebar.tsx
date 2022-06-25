import { Dispatch, SetStateAction } from "react";
import { useGetLessonsQuery } from "../graphql/generated";
import { Lesson } from "./Lesson";

export function Sidebar() {
  const { data } = useGetLessonsQuery();

  return (
    <aside className="lg:w-[348px] w-full bg-gray-700 p-6 border-l border-gray-600 block absolute lg:static top-[73px] left-0 z-50">
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
            />
          );
        })}
      </div>
    </aside>
  );
}
