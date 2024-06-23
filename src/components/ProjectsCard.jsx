import React from "react";

export default function ProjectsCard({
  title,
  desc,
  image,
  date,
  detail,
  demo,
}) {
  return (
    <div className="projectCard sm:h-[380px] h-full">
      <div className="innerBox border border-[#ffffff38] h-full">
        <img src={image} className="w-full bg-image" alt="" draggable="false" />
        <div className="innerCard p-3">
          <h2 className="text-white  iceland  mb-4">PUBLISHED AT {date}</h2>
          <img src={image} className="projectImage" alt="project"/>
          <h2 className="iceland text-2xl -tracking-tighter projectTitle">
            {title}
          </h2>
          <p className="iceland text-justify leading-none text-slate-300">
            {desc}
          </p>
          <div className="actionsContainer flex justify-between mt-2">
            <a href={detail}>
              <button className="text-lg  border border-white p-1">
                DETAILS
              </button>
            </a>
            <a href={demo}>
              <button className="text-lg  border border-white p-1">DEMO</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
