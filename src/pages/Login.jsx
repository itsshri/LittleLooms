// import React, { useState, useRef, useEffect } from 'react';
// import { gsap, Power2, Power4 } from 'gsap';
// import '../pages/css/Login.css';

// const Login = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const openTriggerRef = useRef(null);
//   const closeTriggerRef = useRef(null);
//   const logoRef = useRef(null);
//   const menuContainerRef = useRef(null);
//   const menuRef = useRef(null);
//   const menuTopRef = useRef(null);
//   const menuMiddleRef = useRef(null);
//   const menuBottomRef = useRef(null);

//   useEffect(() => {
//     const tlOpen = gsap.timeline({ paused: true });
//     const tlClose = gsap.timeline({ paused: true });

//     tlOpen
//       .add("preOpen")
//       .to(logoRef.current, { scale: 0.8, opacity: 0, duration: 0.4, ease: Power2.easeOut }, "preOpen")
//       .to(openTriggerRef.current.querySelector('.top'), { x: 80, y: -80, duration: 0.4, ease: Power4.easeIn }, "preOpen")
//       .to(openTriggerRef.current.querySelector('.middle'), { x: 80, y: -80, duration: 0.4, ease: Power4.easeIn }, "preOpen")
//       .to(openTriggerRef.current.querySelector('.bottom'), { x: 80, y: -80, duration: 0.4, delay: 0.2, ease: Power4.easeIn }, "preOpen")
//       .add("open", "-=0.4")
//       .to(menuTopRef.current, { y: "13%", duration: 0.8, ease: Power4.easeInOut }, "open")
//       .to(menuMiddleRef.current, { scaleY: 1, duration: 0.8, ease: Power4.easeInOut }, "open")
//       .to(menuBottomRef.current, { y: "-114%", duration: 0.8, ease: Power4.easeInOut }, "open")
//       .fromTo(menuRef.current, { y: 30, opacity: 0, visibility: 'hidden' }, { y: 0, opacity: 1, visibility: 'visible', duration: 0.6, ease: Power4.easeOut }, "-=0.2")
//       .add("preClose", "-=0.8")
//       .to(closeTriggerRef.current.querySelector('.left'), { x: -100, y: 100, duration: 0.8, ease: Power4.easeOut }, "preClose")
//       .to(closeTriggerRef.current.querySelector('.right'), { x: 100, y: 100, duration: 0.8, delay: 0.2, ease: Power4.easeOut }, "preClose");

//     tlClose
//       .add("close")
//       .to(menuTopRef.current, { backgroundColor: "#6295ca", duration: 0.2, ease: Power4.easeInOut }, "close")
//       .to(menuMiddleRef.current, { backgroundColor: "#6295ca", duration: 0.2, ease: Power4.easeInOut }, "close")
//       .to(menuBottomRef.current, { backgroundColor: "#6295ca", duration: 0.2, ease: Power4.easeInOut }, "close")
//       .to(menuRef.current, { y: 20, opacity: 0, duration: 0.6, ease: Power4.easeOut, onComplete: () => menuRef.current.style.visibility = 'hidden' }, "close")
//       .to(logoRef.current, { scale: 1, opacity: 1, duration: 0.8, ease: Power4.easeInOut }, "close")
//       .to(menuTopRef.current, { y: "-113%", duration: 0.8, ease: Power4.easeInOut }, "close")
//       .to(menuMiddleRef.current, { scaleY: 0, duration: 0.8, ease: Power4.easeInOut }, "close")
//       .to(menuBottomRef.current, { y: "23%", duration: 0.8, ease: Power4.easeInOut, onComplete: () => {
//         menuTopRef.current.style.backgroundColor = '#ffffff';
//         menuMiddleRef.current.style.backgroundColor = '#ffffff';
//         menuBottomRef.current.style.backgroundColor = '#ffffff';
//       } }, "close")
//       .to(closeTriggerRef.current.querySelector('.left'), { x: 100, y: -100, duration: 0.2, ease: Power4.easeIn }, "close")
//       .to(closeTriggerRef.current.querySelector('.right'), { x: -100, y: -100, duration: 0.2, delay: 0.1, ease: Power4.easeIn }, "close")
//       .to(openTriggerRef.current.querySelector('.top'), { x: -80, y: 80, duration: 1, delay: 0.2, ease: Power4.easeOut }, "close")
//       .to(openTriggerRef.current.querySelector('.middle'), { x: -80, y: 80, duration: 1, ease: Power4.easeOut }, "close")
//       .to(openTriggerRef.current.querySelector('.bottom'), { x: -80, y: 80, duration: 1, delay: 0.1, ease: Power4.easeOut }, "close");

//     const handleOpenTriggerClick = () => {
//       setIsMenuOpen(true);
//       if (tlOpen.progress() < 1) {
//         tlOpen.play();
//       } else {
//         tlOpen.restart();
//       }
//     };

//     const handleCloseTriggerClick = () => {
//       setIsMenuOpen(false);
//       if (tlClose.progress() < 1) {
//         tlClose.play();
//       } else {
//         tlClose.restart();
//       }
//     };

//     openTriggerRef.current.addEventListener('click', handleOpenTriggerClick);
//     closeTriggerRef.current.addEventListener('click', handleCloseTriggerClick);

//     return () => {
//       openTriggerRef.current.removeEventListener('click', handleOpenTriggerClick);
//       closeTriggerRef.current.removeEventListener('click', handleCloseTriggerClick);
//     };
//   }, []);

//   return (
//     <div className={`container ${isMenuOpen ? 'open' : ''}`}>
//       <span className="menu-trigger" ref={openTriggerRef}>
//         <i className="menu-trigger-bar top"></i>
//         <i className="menu-trigger-bar middle"></i>
//         <i className="menu-trigger-bar bottom"></i>
//       </span>
//       <span className="close-trigger" ref={closeTriggerRef}>
//         <i className="close-trigger-bar left"></i>
//         <i className="close-trigger-bar right"></i>
//       </span>
//       <span className="logo" ref={logoRef}>
//         <span>
//           ⬢
//           <i className="logo-title">UI</i>
//           <i className="logo-badge">6</i>
//         </span>
//       </span>
//       <div className={`inner-container ${isMenuOpen ? 'open' : ''}`} ref={menuContainerRef}>
//         <i className="menu-bg top" ref={menuTopRef}></i>
//         <i className="menu-bg middle" ref={menuMiddleRef}></i>
//         <i className="menu-bg bottom" ref={menuBottomRef}></i>
//         <div className="menu-container">
//           <ul className="menu" ref={menuRef}>
//             <li><a href="#">Login</a></li>
//             <li><a href="#">Create account</a></li>
//             <li><a href="#">Support</a></li>
//             <li><a href="#">About</a></li>
//           </ul>
//         </div>
//       </div>
//       <div id="links">
//         <a id="twitter" href="https://twitter.com/karlovidek" target="_blank" rel="noopener noreferrer">
//           <span className="fa fa-twitter"></span>
//         </a>
//         <div id="pens">
//           <a href="https://codepen.io/karlovidek/" target="_blank" rel="noopener noreferrer">
//             <span className="fa fa-codepen"></span>
//           </a> my other Pens
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
