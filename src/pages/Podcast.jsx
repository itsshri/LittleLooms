import React from 'react'

const Podcast = () => {
  return (
    <div>
        <h1>Hi</h1>
    </div>
  )
}

export default Podcast



















// import React, { useState, useRef, useEffect } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// // import 'swiper/swiper-bundle.min.css'; // Import Swiper styles
// import { IonIcon } from '@ionic/react';
// import { logoYoutube } from 'ionicons/icons';
// import '../pages/css/Podcast.css';
// import SwiperCore, { Navigation, EffectCoverflow } from 'swiper';
// import Navbar from '../components/Navbar';

// // Initialize Swiper modules
// SwiperCore.use([Navigation, EffectCoverflow]);

// const songs = [
//   {
//     title: "Symphony",
//     name: "Clean Bandit ft. Zara Larsson",
//     source:
//       "https://github.com/ecemgo/mini-samples-great-tricks/raw/main/song-list/Clean-Bandit-Symphony.mp3",
//   },
//   {
//     title: "Pawn It All",
//     name: "Alicia Keys",
//     source:
//       "https://github.com/ecemgo/mini-samples-great-tricks/raw/main/song-list/Pawn-It-All.mp3",
//   },
//   {
//     title: "Seni Dert Etmeler",
//     name: "Madrigal",
//     source:
//       "https://github.com/ecemgo/mini-samples-great-tricks/raw/main/song-list/Madrigal-Seni-Dert-Etmeler.mp3",
//   },
//   {
//     title: "Instant Crush",
//     name: "Daft Punk ft. Julian Casablancas",
//     source:
//       "https://github.com/ecemgo/mini-samples-great-tricks/raw/main/song-list/Daft-Punk-Instant-Crush.mp3",
//   },
//   {
//     title: "As It Was",
//     name: "Harry Styles",
//     source:
//       "https://github.com/ecemgo/mini-samples-great-tricks/raw/main/song-list/Harry-Styles-As-It-Was.mp3",
//   },
//   {
//     title: "Physical",
//     name: "Dua Lipa",
//     source:
//       "https://github.com/ecemgo/mini-samples-great-tricks/raw/main/song-list/Dua-Lipa-Physical.mp3",
//   },
//   {
//     title: "Delicate",
//     name: "Taylor Swift",
//     source:
//       "https://github.com/ecemgo/mini-samples-great-tricks/raw/main/song-list/Taylor-Swift-Delicate.mp3",
//   },
// ];

// const Podcast = () => {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [progress, setProgress] = useState(0);
//   const [currentSongIndex, setCurrentSongIndex] = useState(0);
//   const audioRef = useRef(null);

//   useEffect(() => {
//     if (audioRef.current) {
//       const audio = audioRef.current;
//       const updateProgress = () => {
//         setProgress((audio.currentTime / audio.duration) * 100);
//       };

//       audio.addEventListener('timeupdate', updateProgress);

//       return () => {
//         audio.removeEventListener('timeupdate', updateProgress);
//       };
//     }
//   }, []);

//   useEffect(() => {
//     if (audioRef.current) {
//       audioRef.current.src = songs[currentSongIndex].source;
//     }
//   }, [currentSongIndex]);

//   useEffect(() => {
//     if (audioRef.current) {
//       audioRef.current.addEventListener('loadedmetadata', () => {
//         setProgress(0);
//       });
//     }
//   }, [currentSongIndex]);

//   const handlePlayPause = () => {
//     if (audioRef.current) {
//       if (isPlaying) {
//         audioRef.current.pause();
//       } else {
//         audioRef.current.play();
//       }
//       setIsPlaying(!isPlaying);
//     }
//   };

//   const handleProgressChange = (event) => {
//     const newValue = event.target.value;
//     if (audioRef.current) {
//       audioRef.current.currentTime = (newValue / 100) * audioRef.current.duration;
//       setProgress(newValue);
//     }
//   };

//   const handleForward = () => {
//     setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
//     setIsPlaying(true);
//   };

//   const handleBackward = () => {
//     setCurrentSongIndex((prevIndex) => (prevIndex - 1 + songs.length) % songs.length);
//     setIsPlaying(true);
//   };

//   return (
//       <div>
//         <Navbar/>
//       <div className="album-cover">
//         <Swiper
//           effect="coverflow"
//           centeredSlides
//           initialSlide={3}
//           slidesPerView="auto"
//           spaceBetween={40}
//           coverflowEffect={{
//             rotate: 25,
//             stretch: 0,
//             depth: 50,
//             modifier: 1,
//             slideShadows: false,
//           }}
//           navigation={{
//             nextEl: '.forward',
//             prevEl: '.backward',
//           }}
//         >
//           {[
//             {
//               src: 'https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/d3ca28bf-e1b7-467e-a00b-c7785be8e397',
//               link: 'https://www.youtube.com/watch?v=aatr_2MstrI&ab_channel=CleanBandit',
//             },
//             {
//               src: 'https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/1afe4c6a-0287-43f0-9076-92f8be49d9dc',
//               link: 'https://www.youtube.com/watch?v=qEnfeG8uBRY&ab_channel=AliciaKeys-Topic',
//             },
//             {
//               src: 'https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/abaa23bd-8c93-4219-a3ef-0d0cb6f12566',
//               link: 'https://www.youtube.com/watch?v=LgsaD-vNJ9M',
//             },
//             {
//               src: 'https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/bd9bcc80-a9ab-4d54-a460-ffdb77f22a72',
//               link: 'https://www.youtube.com/watch?v=a5uQMwRMHcs&ab_channel=DaftPunkVEVO',
//             },
//             {
//               src: 'https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/18bc2436-740b-44c4-9dd8-fd7be51a07ad',
//               link: 'https://www.youtube.com/watch?v=H5v3kku4y6Q&ab_channel=HarryStylesVEVO',
//             },
//             {
//               src: 'https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/4c5c1727-8b32-48c1-91de-b0496ccf10f6',
//               link: 'https://www.youtube.com/watch?v=9HDEHj2yzew&ab_channel=DuaLipa',
//             },
//             {
//               src: 'https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/23e440e5-a0fa-4a85-8175-bcc485a20ee6',
//               link: 'https://www.youtube.com/watch?v=tCXGJQYZ9JA&ab_channel=TaylorSwiftVEVO',
//             }
//           ].map((slide, index) => (
//             <SwiperSlide key={index}>
//               <img src={slide.src} alt={`Slide ${index + 1}`} />
//               <div className="overlay">
//                 <a href={slide.link} target="_blank" rel="noopener noreferrer">
//                   <IonIcon icon={logoYoutube} />
//                 </a>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       <div className="music-player">
//         <h1>{songs[currentSongIndex].title}</h1>
//         <p>{songs[currentSongIndex].name}</p>

//         <audio ref={audioRef} id="song">
//           <source src={songs[currentSongIndex].source} type="audio/mpeg" />
//         </audio>

//         <input
//           type="range"
//           value={progress}
//           onChange={handleProgressChange}
//           id="progress"
//           max={audioRef.current ? audioRef.current.duration : 0}
//         />

//         <div className="controls">
//           <button className="backward" onClick={handleBackward}>
//             <i className="fa-solid fa-backward"></i>
//           </button>
//           <button className="play-pause-btn" onClick={handlePlayPause}>
//             <i className={`fa-solid ${isPlaying ? 'fa-pause' : 'fa-play'}`} id="controlIcon"></i>
//           </button>
//           <button className="forward" onClick={handleForward}>
//             <i className="fa-solid fa-forward"></i>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Podcast;
