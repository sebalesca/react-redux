import React from 'react';
import '../assets/styles/components/Carousel.scss';

const Carousel = ({ children }) => (
  <section className='carousel'>
    <div className='carosel_container'>{children}</div>
  </section>
);
export default Carousel;
