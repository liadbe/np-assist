import { useState } from 'react';
import { detailsInfo } from '../constants/rocftDetailsInfo';
import {
  ChevronLeftIcon,
  ChevronRightIcon
} from "@heroicons/react/24/outline";
import { IconButton } from "@material-tailwind/react";

const MIN_DETAIL_INDEX = 0;
const MAX_DETAIL_INDEX = 17;

const Content = () => {
  const [detailIndex, setDetailIndex] = useState(MIN_DETAIL_INDEX);
  
  return (
    <div className='px-10 py-5'>
      <div className='md:container md:mx-auto'>
        <div className='flex items-center justify-center gap-8'>
          <IconButton 
            className='rounded-full'
            color='blue-gray'
            disabled={detailIndex === MIN_DETAIL_INDEX}
            onClick={() => { if (detailIndex >= MIN_DETAIL_INDEX) { setDetailIndex(detailIndex - 1) } }}
            ripple={false}       
            size='lg'
            variant='text'   
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </IconButton>
          
          <div className='md:leading-loose text-4xl text-center'>{detailsInfo[detailIndex].name}</div>
          
          <IconButton 
            className='rounded-full'
            color='blue-gray'
            disabled={detailIndex === MAX_DETAIL_INDEX}
            onClick={() => { if (detailIndex <= MAX_DETAIL_INDEX) { setDetailIndex(detailIndex + 1) } }}
            ripple={false}       
            size='lg'
            variant='text'   
          >
            <ChevronRightIcon className="h-5 w-5" />
          </IconButton>
        </div>
        <div className='md:columns-2 md:mt-8'>
          <img src={`../img/detail${detailIndex + 1}.png`} className='object-contain' />

          <div>
            <div className='text-2xl text-gray-500 leading-loose'>{detailsInfo[detailIndex].element}</div>
            <div className='text-lg leading-relaxed'>{detailsInfo[detailIndex].description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;