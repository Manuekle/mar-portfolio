import React from 'react';
import Slider from '../Components/Slider.jsx';

function HomePage() {
  const slides = [
    {
      image: '/public/Images/1term.jpeg',
      date: 'october 7, 2024',
      text: 'web 1.0'
    },
    {
      image: '/public/Images/1term.jpeg',
      date: 'september 10, 2024',
      text: '1st mid term'
    },
    {
      image: '/public/Images/2term.jpeg',
      date: 'october 21, 2024',
      text: '2nd mid term'
    },
    {
      image: '/public/Images/samr.jpeg',
      date: 'august 26, 2024',
      text: 'samr model activity'
    },
    {
      image: '/public/Images/plb.jpeg',
      date: 'september 02, 2024',
      text: 'plb'
    },
    {
      image: '/public/Images/poster.jpeg',
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
