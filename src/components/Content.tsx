import { useState } from 'react';
import { detailsInfo } from '../constants/rocftDetailsInfo';
import {
  ChevronLeftIcon,
  ChevronRightIcon
} from "@heroicons/react/24/outline";

import detail1 from '../assets/detail1.jpeg';
import detail2 from '../assets/detail2.jpeg';
import detail3 from '../assets/detail3.jpeg';
import detail4 from '../assets/detail4.jpeg';
import detail5 from '../assets/detail5.jpeg';
import detail6 from '../assets/detail6.jpeg';
import detail7 from '../assets/detail7.jpeg';
import detail8 from '../assets/detail8.jpeg';
import detail9 from '../assets/detail9.jpeg';
import detail10 from '../assets/detail10.jpeg';
import detail11 from '../assets/detail11.jpeg';
import detail12 from '../assets/detail12.jpeg';
import detail13 from '../assets/detail13.jpeg';
import detail14 from '../assets/detail14.jpeg';
import detail15 from '../assets/detail15.jpeg';
import detail16 from '../assets/detail16.jpeg';
import detail17 from '../assets/detail17.jpeg';
import detail18 from '../assets/detail18.jpeg';

import { IconButton } from "@material-tailwind/react";

const MIN_DETAIL_INDEX = 0;
const MAX_DETAIL_INDEX = 17;
const detailImages = [ detail1, detail2, detail3, detail4, detail5, detail6, detail7, detail8, detail9, detail10, detail11, detail12, detail13, detail14, detail15, detail16, detail17, detail18];
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
          <img src={detailImages[detailIndex]} className='object-cover' />
          <img src={`./img/detail${detailIndex+1}.jpeg`} className='object-cover' />
          
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