import React from 'react';
import Slider from '../Components/Slider.jsx';

function HomePage() {
  const slides = [
    {
      image: '/src/Images/web.jpeg',
      date: 'october 7, 2024',
      text: 'web 1.0'
    },
    {
      image: '/src/Images/1term.jpeg',
      date: 'september 10, 2024',
      text: '1st mid term'
    },
    {
      image: '/src/Images/2term.jpeg',
      date: 'october 21, 2024',
      text: '2nd mid term'
    },
    {
      image: '/src/Images/samr.jpeg',
      date: 'august 26, 2024',
      text: 'samr model activity'
    },
    {
      image: '/src/Images/plb.jpeg',
      date: 'september 02, 2024',
      text: 'plb'
    },
    {
      image: '/src/Images/poster.jpeg',
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
