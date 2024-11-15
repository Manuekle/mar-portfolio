import React, { useState, useEffect } from 'react';
import GoTo from './goTo';
// Componente Slider
function Slider({ slides, autoRotate = true, interval = 3000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Efecto para rotación automática
  useEffect(() => {
    if (autoRotate) {
      const intervalId = setInterval(() => {
        goToNext();
      }, interval);

      // Limpia el intervalo cuando el componente se desmonta
      return () => clearInterval(intervalId);
    }
  }, [currentIndex, autoRotate, interval]);
  return (
    <div className="relative w-full mx-auto overflow-hidden">
      {/* Contenedor de los slides */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full flex flex-col gap-4 items-center justify-center"
          >
            <img
              src={slide.image}
              alt={slide.name}
              className="w-96 h-full object-cover rounded-xl"
            />
            <span className="flex flex-col gap-2 items-center justify-center">
              <p className="text-md px-4 font-bold text-black">{slide.date}</p>
              <p className="text-2xl px-4 font-bold text-black">{slide.text}</p>
            </span>
          </div>
        ))}
      </div>

      {/* Botón Anterior */}
      <button
        onClick={goToPrevious}
        type="button"
        className="hidden top-1/2 left-4 transform -translate-y-1/2 p-2 rounded-full shadow-lg"
      >
        <GoTo className="rotate-180" />
      </button>

      {/* Botón Siguiente */}
      <button
        onClick={goToNext}
        type="button"
        className="hidden top-1/2 right-4 transform -translate-y-1/2 p-2 rounded-full shadow-lg"
      >
        <GoTo />
      </button>
    </div>
  );
}

export default Slider;
