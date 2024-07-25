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
          <img src="https://plus.unsplash.com/premium_vector-1683141331289-e5fe7a075ed8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJvb2t8ZW58MHx8MHx8fDA%3D" alt="Image 1" />
          <img src="https://images.unsplash.com/photo-1718619578357-f3825be21d50?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjE2NzIzNTF8&ixlib=rb-4.0.3&q=85" alt="Image 3" />
          <img src="https://images.unsplash.com/photo-1719518870616-8deacda7e18b?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjE2NzI0Mjl8&ixlib=rb-4.0.3&q=85" alt="Image 2" />
          <img src="https://images.unsplash.com/photo-1719518384441-d12311be54c6?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjE2NzIzODN8&ixlib=rb-4.0.3&q=85" alt="Image 4" />
          <img src="https://images.unsplash.com/photo-1719268921855-d2897ed6e91f?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjE2NzI0Mjl8&ixlib=rb-4.0.3&q=85" alt="Image 5" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
