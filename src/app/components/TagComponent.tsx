import React from 'react';

interface TagProps {
    name: string
}

const TagComponent:React.FC<TagProps> = ({name}) => {
  return (
    <div className='border-2 border-[#f970a9] rounded-full md:mx-5 md:mt-2 mx-1 mt-1'>
        <span className='md:px-6 md:py-2 px-3 py-1'>{name}</span>
    </div>
  )
}

export default TagComponent