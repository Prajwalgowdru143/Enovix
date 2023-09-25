import React from 'react';

import { useNavigate } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as Icons from "heroicons-react";


const ELV = ({Heading, Data}) => {
    const navigate = useNavigate();

  const goToPage = (link) => {
    navigate(link);
  };

  const slideLeft = ()=>{
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft - 500
  } 

  const slideRight = ()=>{
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft + 500
  } 
  return (
    <div className='mt-8' >
      <h1 className='ml-4 text-4xl font-extrabold text-blue-500 '>{Heading}</h1>
      <div className='relative flex items-center overflow-hidden'>
        <Icons.ChevronLeft onClick={slideLeft} />
      <div id='slider' className='w-full h-full mt-4 overflow-x-scroll scroll whitespace-nowrap scroll-smooth'>
        {Data.map((card) => (
          <div className='w-[220px] inline-block p-2 m-4 cursor-pointer hover:scale-105 ease-in-out duration-300 border border-gray-300 rounded-lg shadow-md gap-4' key={card.id} onClick={() => goToPage(card.link)} >
            <h2>{card.title}</h2>
            <img src={card.img} alt=''/>
            <p>{card.description}</p>
          </div>

        ))}
        </div>
        <Icons.ChevronRight onClick={slideRight}/>
        </div>
    </div>
  );
};

export default ELV;
