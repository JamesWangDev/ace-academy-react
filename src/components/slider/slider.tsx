import React, { useState } from 'react';
import { CardData } from '../card/card';
import Card from '../card/card';
import { IconLeftArrow, IconLgRightArrow } from '../../assets/icons';

interface SliderProps {
  className?: string;
  cards: CardData[];
  cardsPerPage: number;
  label?: string;
}

const Slider: React.FC<SliderProps> = ({ cards, cardsPerPage, label, className }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(cards.length / cardsPerPage);

  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;

  const visibleCards = cards.slice(startIndex, endIndex);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const pages = Array.from({ length: totalPages }, (_, index) => index);

  const sliderClassName = `mx-auto w-fit ${className}`

  return (
    <div className={sliderClassName}>
      <div className='text-30 text-midblack font-extrabold'>
        {label}
      </div>
      <div className='relative'>
        <div className="mt-7.5 flex gap-3.5 overflow-x-auto">
            {visibleCards.map((card, index) => (
            <div key={index} className="flex-shrink-0">
                <Card data={card} />
            </div>
            ))}
        </div>
        <div className='absolute top-1/2 w-full'>
            <div className='relative'>
                <button
                    onClick={handlePrevPage}
                    className="w-9 h-9 absolute -left-12 top-0 rounded-full flex bg-white hover:bg-gray-400 active:bg-gray-500 "
                >
                <span className='m-auto'><IconLeftArrow /></span>
                </button>
                <button
                    onClick={handleNextPage}
                    className="w-9 h-9 absolute -right-12 rounded-full flex bg-white hover:bg-gray-400 active:bg-gray-500 "
                >
                <span className='m-auto'><IconLgRightArrow /></span>
                </button>
            </div>
        </div>
        
      </div>
      <div className='mt-5 flex gap-1 justify-center'>
         {pages.map((page: number) => {
            return (
              <>
                  { page === currentPage - 1 ? 
                  <span className='w-5 h-1.6 rounded-full bg-gray-600'></span> : 
                  <span className='w-1.6 h-1.6 rounded-full bg-gray-400'></span>}
              </>
            )
         })}
       </div>
    </div>
  );
};

export default Slider;
