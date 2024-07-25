import React, { useEffect } from 'react';
import Footer from '../components/Footer'; // Adjust the path as needed
import '../pages/css/Home.css';

const Home = () => {
  useEffect(() => {
    const marquee = document.querySelector('.marquee-inner');
    const speed = 1; // Scrolling Speed
    let scrollAmount = 0;
    let isHovered = false;

    // Duplicate the content
    const marqueeContent = marquee.innerHTML;
    marquee.innerHTML += marqueeContent;

    const startScrolling = () => {
      if (!isHovered) {
        scrollAmount -= speed;
        if (Math.abs(scrollAmount) >= marquee.scrollWidth / 2) {
          scrollAmount = 0;
        }
        marquee.style.transform = `translateX(${scrollAmount}px)`;
      }
      requestAnimationFrame(startScrolling);
    };

    marquee.addEventListener('mouseover', () => {
      isHovered = true;
    });

    marquee.addEventListener('mouseout', () => {
      isHovered = false;
    });

    startScrolling();
  }, []);

  return (
    <div className="home">
      <div className="marquee">
        <div className="marquee-inner">
          <img src="src\assets\img\tom_and_jerry.jpg" alt="Image 1" />
          <img src="src\assets\img\shinchan1.jpg" alt="Image 3" />
          <img src="src\assets\img\iceage.jpg" alt="Image 2" />
          <img src="src\assets\img\angry_birds.jpg" alt="Image 4" />
          <img src="src\assets\img\oggy.jpg" alt="Image 5" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
