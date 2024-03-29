import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Link, useParams } from "react-router-dom";
import classNames from "classnames";

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
  onToggleSidebar?: () => void;
}

export function Lesson(props: LessonProps) {
  const { slug } = useParams<{ slug: string }>();

  const isLessonAvailable = isPast(props.availableAt);
  const availableDateFormatted = format(
    props.availableAt,
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm",
    { locale: ptBR }
  );

  function handleOnToggleSidebar() {
    if (props.onToggleSidebar) {
      props.onToggleSidebar();
    }
  }

  const isActiveLesson = slug === props.slug;

  return (
    <Link
      to={`/event/lesson/${props.slug}`}
      className="group"
      onClick={handleOnToggleSidebar}
    >
      <span className="text-gray-300">{availableDateFormatted}</span>

      <div
        className={classNames(
          "rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 relative",
          {
            "bg-green-500": isActiveLesson,
          }
        )}
      >
        {isActiveLesson && (
          <div className="w-[14px] h-[14px] bg-green-500 z-50 absolute rotate-45 left-[-7px] top-[calc(50%-5.89px)] hidden lg:block"></div>
        )}

        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span
              className={classNames(
                "text-sm font-medium flex items-center gap-2",
                {
                  "text-white": isLessonAvailable,
                  "text-blue-500": !isActiveLesson,
                }
              )}
            >
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
              <Lock size={20} />
              Em breve
            </span>
          )}
          <span
            className={classNames(
              "text-xs rounded py=[0.125rem] px-2 text-white border font-bold flex leading-5",
              {
                "border-white": isLessonAvailable,
                "border-green-500": !isActiveLesson,
              }
            )}
          >
            {props.type === "live" ? "AO VIVO" : "AULA PRÁTICA"}
          </span>
        </header>
        <strong
          className={classNames("mt-5 block", {
            "text-white": isLessonAvailable,
            "text-gray-200": !isActiveLesson,
          })}
        >
          {props.title}
        </strong>
      </div>
    </Link>
  );
}
