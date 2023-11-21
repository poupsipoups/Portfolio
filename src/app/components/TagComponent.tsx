import React from 'react';

interface TagProps {
    name: string
}

const TagComponent:React.FC<TagProps> = ({name}) => {
  return (
    <div className='border-2 border-[#f970a9] rounded-full mx-5 mt-2'>
        <span className='px-6 py-2'>{name}</span>
    </div>
  )
}

export default TagComponent