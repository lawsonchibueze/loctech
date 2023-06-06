import React from "react";
import { JsxElement } from "typescript";

interface CourseTagItemProps {
  icon: React.JSX.Element;
  title: string;
  subtitle: string;
  color: string;
}
export default function CourseTagItem({
  icon,
  title,
  subtitle,
  color,
}: CourseTagItemProps) {
  return (
    <div
      className={`py-5 px-4 flex items-center justify-between  border-b-2 border-thin border-${color}`}
    >
      <div className="flex items-center text-lg font-semibold">
        {icon}
        <p className="">{title}</p>
      </div>

      <div className="text-sm">
        <p>{subtitle}</p>
      </div>
    </div>
  );
}
