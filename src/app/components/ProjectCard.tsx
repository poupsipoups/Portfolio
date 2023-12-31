import React, { useEffect, useState } from 'react';
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface ProjectCardProps{
    id: number,
    imgUrl : string, 
    title: string,
    titleUrl : string,
    description: string, 
    gitUrl: string,
}

const ProjectCard:React.FC<ProjectCardProps> = ({id, imgUrl, title, titleUrl, description, gitUrl}) => {

  const [hasGitLink, setHasGitLink] = useState(true);

  function checkGitUrl(){
    if(gitUrl == ""){
      setHasGitLink(false);
    }
  }

  useEffect(() =>{
    checkGitUrl();
  });




  return (
    <><div>
        <div
            className='h-52 md:h-72 rounded-t-xl relative group'
            style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}>
              <div className='overlay items-center justify-center absolute rounded-t-xl top-0 left-0 w-full h-full bg-[#f970a9] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-40 transition-all duration-500'>
                {
                  hasGitLink?
                  (<Link href={gitUrl} target='_blank' className='mr-2 h-14 w-14 border-2 relative rounded-full border-white hover:border-[#aaf540] group/link'>
                    <CodeBracketIcon className="h-10 w-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white cursor-pointer group-hover/link:text-[#aaf540]"></CodeBracketIcon>
                  </Link>)
                   :
                  ( <div></div> )
                }
                
                <Link href={`/Projects/${titleUrl}`}className='h-14 w-14 border-2 relative rounded-full border-white hover:border-[#aaf540] group/link'>
                  <EyeIcon className="h-10 w-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white cursor-pointer group-hover/link:text-[#aaf540]"></EyeIcon>
                </Link>
              </div>
        </div>
          
      
        <div className="h-32 md:h-36 text-black border-2 border-[#f970a9] rounded-b-xl py-6 px-4 mb-5">
              <h5 className='text-xl font-semibold mb-2 font-jost'>{title}</h5>
              <p className='font-zilla'>{description}</p>
        </div>
      </div></>
  );
};

export default ProjectCard