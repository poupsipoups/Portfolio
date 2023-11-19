import React from 'react';

interface ProjectTagProps  {
    name: string,
    onClick: (arg: string)=> void,
    isSelected : boolean
}

const ProjectTag:React.FC<ProjectTagProps> = ({name, onClick, isSelected}) => {
    const buttonStyle = isSelected
    ? "bg-slate-200"
    : "bg-transparent";

  return (
    <button 
        className={`${buttonStyle} px-3 py-1 w-full sm:w-fit rounded-full hover:bg-slate-100 border-2 border-[#f970a9] mt-3`}
        onClick={() => onClick(name)}
    >
        {name}
    </button>
  )
}

export default ProjectTag