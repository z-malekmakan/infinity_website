import { ICourseItem } from "@/interfaces/interfaces";
import Link from "next/link";
import React from "react";

function CourseItem({ title, description, price }: ICourseItem) {
  return (
    <Link href={"/"}>
      <div className="bg-cyan-950 shadow rounded-2xl w-full hover:scale-110">
        <img src="./images/store/react1.jpg" className="rounded-t-2xl w-full" />
        <div className="p-2">
          <h1 className="font-bold text-white text-2xl">{title}</h1>
          <p className="line-clamp-2 text-white">
            {description}description description description description
            description description description description description
            description description description
          </p>
          <div className="flex justify-around text-xl text-white">
            <span>course price :</span>
            <span>{price}$</span>
            <button className="bg-cyan-700 rounded px-2">+</button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CourseItem;
