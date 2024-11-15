import React from 'react';
import Slider from '../Components/Slider.jsx';

import Web1 from '../../public/Images/web.jpeg';
import Term1 from '../../public/Images/1term.jpeg';
import Term2 from '../../public/Images/2term.jpeg';
import Samr from '../../public/Images/samr.jpeg';
import Plb from '../../public/Images/plb.jpeg';
import Poster from '../../public/Images/poster.jpeg';

function HomePage() {
  const slides = [
    {
      image: Web1,
      date: 'october 7, 2024',
      text: 'web 1.0'
    },
    {
      image: Term1,
      date: 'september 10, 2024',
      text: '1st mid term'
    },
    {
      image: Term2,
      date: 'october 21, 2024',
      text: '2nd mid term'
    },
    {
      image: Samr,
      date: 'august 26, 2024',
      text: 'samr model activity'
    },
    {
      image: Plb,
      date: 'september 02, 2024',
      text: 'plb'
    },
    {
      image: Poster,
      date: '02 september 2024',
      text: 'poster'
    }
  ];
  return (
    <div className="flex justify-center items-center py-20">
      <Slider slides={slides} autoRotate interval={5000} />
    </div>
  );
}

export default HomePage;
