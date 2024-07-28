// import React from 'react';
// import { HousePlug } from 'lucide-react';
// import { Crown } from 'lucide-react';
// import '../pages/css/Podcast.css';
// import Footer from '../components/Footer';

// const Podcast = () => {
//   return (
//     <div className="phone">
//       <header className="header">
//         <div className="header-logo">
//           <div>
//             <span></span>
//             <span></span>
//             <span></span>
//             <span></span>
//           </div>
//         </div>
//         <div className="header-title">
//           Home
//         </div>
//         <div className="header-buttons">
//           <button className="notifications">
//             <i className="ai-bell"></i>
//           </button>
//           <button className="avatar">
//             <img src="https://assets.codepen.io/285131/pexels-photo-838875.jpeg" alt="Avatar" />
//           </button>
//         </div>
//       </header>

//       <section className="title">
//         <h1>Listening Everyday</h1>
//         <p>Explore millions of music according to your taste</p>
//       </section>

//       <center>
//         <section className="search">
//           <div className="search-inner">
//             <button className="search-button">
//               <i className="ai-search"></i>
//             </button>
//             <input type="text" className="search-input" placeholder="Search Podcasts!" />
//           </div>
//         </section>
//       </center>

//       <section className="playlists">
//         {/* Existing Cards */}
//         <article className="card">
//           <div className="card-inner">
//             <span className="card-pin"></span>
//             <div className="card-image">
//               <img src="https://i.pinimg.com/736x/64/9d/7e/649d7e02ca4a3d1cc23da4b4f87656b0.jpg" alt="Card" />
//             </div>
//             <div className="card-content">
//               <div className="card-meta">
//                 <span className="card-meta-number">20 Episodes</span>
//                 <button className="card-meta-button">
//                   <i className="ai-circle-triangle-right-fill"></i>
//                 </button>
//               </div>
//               <h2 className="card-title">Akbar&Birbal</h2>
//               <p className='author'>Free</p>
//               <div className="card-actions">
//                 <button className="card-edit">Edit</button>
//                 <button className="card-delete">Delete</button>
//               </div>
//             </div>
//           </div>
//         </article>

//         <article className="card">
//           <div className="card-inner">
//             <span className="card-pin"></span>
//             <div className="card-image">
//               <img src="https://i.pinimg.com/564x/5b/60/d8/5b60d8111d09ca55e7020cc3b29c10a9.jpg" alt="Card" />
//             </div>
//             <div className="card-content">
//               <div className="card-meta">
//                 <span className="card-meta-number">20 songs</span>
//                 <button className="card-meta-button">
//                   <i className="ai-circle-triangle-right-fill"></i>
//                 </button>
//               </div>
//               <h2 className="card-title">Heidi</h2>
//               <p className='author'>Free</p>
//               <div className="card-actions">
//                 <button className="card-edit">Edit</button>
//                 <button className="card-delete">Delete</button>
//               </div>
//             </div>
//           </div>
//         </article>

//         {/* Additional Cards */}
//         <article className="card">
//           <div className="card-inner">
//             <span className="card-pin"></span>
//             <div className="card-image">
//               <img src="src/assets/img/shinchan_podcast.jpg" alt="Card" />
//             </div>
//             <div className="card-content">
//               <div className="card-meta">
//                 <span className="card-meta-number">100 Episodes</span>
//                 <button className="card-meta-button">
//                   <i className="ai-circle-triangle-right-fill"></i>
//                 </button>
//               </div>
//               <h2 className="card-title">ShinChan's Crazy Classroom</h2>
//               <Crown/>
//               <div className="card-actions">
//                 <button className="card-edit">Edit</button>
//                 <button className="card-delete">Delete</button>
//               </div>
//             </div>
//           </div>
//         </article>

//         <article className="card">
//           <div className="card-inner">
//             <span className="card-pin"></span>
//             <div className="card-image">
//               <img src="src/assets/img/tom_and_jerry.jpg" alt="Card" />
//             </div>
//             <div className="card-content">
//               <div className="card-meta">
//                 <span className="card-meta-number">50 Episodes</span>
//                 <button className="card-meta-button">
//                   <i className="ai-circle-triangle-right-fill"></i>
//                 </button>
//               </div>
//               <h2 className="card-title">Tom and Jerry: A Day at the Beach</h2>
//               <Crown/>
//               <div className="card-actions">
//                 <button className="card-edit">Edit</button>
//                 <button className="card-delete">Delete</button>
//               </div>
//             </div>
//           </div>
//         </article>

//         <article className="card">
//           <div className="card-inner">
//             <span className="card-pin"></span>
//             <div className="card-image">
//               <img src="src/assets/img/angry_bird.jpg" alt="Card" />
//             </div>
//             <div className="card-content">
//               <div className="card-meta">
//                 <span className="card-meta-number">30 Episodes</span>
//                 <button className="card-meta-button">
//                   <i className="ai-circle-triangle-right-fill"></i>
//                 </button>
//               </div>
//               <h2 className="card-title">Red's mighty feathers</h2>
//               <p className='author'>Free</p>
//               <div className="card-actions">
//                 <button className="card-edit">Edit</button>
//                 <button className="card-delete">Delete</button>
//               </div>
//             </div>
//           </div>
//         </article>

//         <article className="card">
//           <div className="card-inner">
//             <span className="card-pin"></span>
//             <div className="card-image">
//               <img src="https://cdn-icons-png.flaticon.com/256/130/130885.png" alt="Card" />
//             </div>
//             <div className="card-content">
//               <div className="card-meta">
//                 <span className="card-meta-number">18 songs</span>
//                 <button className="card-meta-button">
//                   <i className="ai-circle-triangle-right-fill"></i>
//                 </button>
//               </div>
//               <h2 className="card-title">Indie Hits</h2>
//               <div className="card-actions">
//                 <button className="card-edit">Edit</button>
//                 <button className="card-delete">Delete</button>
//               </div>
//             </div>
//           </div>
//         </article>

//         <article className="card">
//           <div className="card-inner">
//             <span className="card-pin"></span>
//             <div className="card-image">
//               <img src="https://cdn-icons-png.flaticon.com/256/6074/6074694.png" alt="Card" />
//             </div>
//             <div className="card-content">
//               <div className="card-meta">
//                 <span className="card-meta-number">22 songs</span>
//                 <button className="card-meta-button">
//                   <i className="ai-circle-triangle-right-fill"></i>
//                 </button>
//               </div>
//               <h2 className="card-title">Jazz Classics</h2>
//               <div className="card-actions">
//                 <button className="card-edit">Edit</button>
//                 <button className="card-delete">Delete</button>
//               </div>
//             </div>
//           </div>
//         </article>

//         <article className="card">
//           <div className="card-inner">
//             <span className="card-pin"></span>
//             <div className="card-image">
//               <img src="https://i.pinimg.com/564x/97/95/36/979536a240d0625db5cabcd876269d96.jpg" alt="Card" />
//             </div>
//             <div className="card-content">
//               <div className="card-meta">
//                 <span className="card-meta-number">10 songs</span>
//                 <button className="card-meta-button">
//                   <i className="ai-circle-triangle-right-fill"></i>
//                 </button>
//               </div>
//               <h2 className="card-title">Vikram Betal (Original Tamil Podcast)</h2>
//               <div className="card-actions">
//                 <button className="card-edit">Edit</button>
//                 <button className="card-delete">Delete</button>
//               </div>
//             </div>
//           </div>
//         </article>
//       </section>

//       <Footer />
//     </div>
//   );
// }

// export default Podcast;





import React from 'react';
import { HousePlug, Crown } from 'lucide-react';
import '../pages/css/Podcast.css';
import Footer from '../components/Footer'; 

const Podcast = () => {
  return (
    <div className="phone">
      <header className="header">
        <div className="header-logo">
          <div>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="header-title">
          Home
        </div>
        <div className="header-buttons">
          <button className="notifications">
            <i className="ai-bell"></i>
          </button>
          <button className="avatar">
            <img src="https://assets.codepen.io/285131/pexels-photo-838875.jpeg" alt="Avatar" />
          </button>
        </div>
      </header>

      <section className="title">
        <h1>Listening Everyday</h1>
        <p>Explore millions of podcast according to your taste</p>
      </section>

      <center>
        <section className="search">
          <div className="search-inner">
            <button className="search-button">
              <i className="ai-search"></i>
            </button>
            <input type="text" className="search-input" placeholder="Search Podcasts!" />
          </div>
        </section>
      </center>

      <section className="playlists">
        {/* Existing Cards */}
        <article className="card">
          <div className="card-inner">
            <span className="card-pin"></span>
            <div className="card-image">
              <img src="https://i.pinimg.com/736x/64/9d/7e/649d7e02ca4a3d1cc23da4b4f87656b0.jpg" alt="Card" />
            </div>
            <div className="card-content">
              <div className="card-meta">
                <span className="card-meta-number">20 Episodes</span>
                <button className="card-meta-button">
                  <i className="ai-circle-triangle-right-fill"></i>
                </button>
              </div>
              <h2 className="card-title">Akbar&Birbal</h2>
              <p className='author'>Free</p>
            </div>
          </div>
        </article>

        <article className="card">
          <div className="card-inner">
            <span className="card-pin"></span>
            <div className="card-image">
              <img src="https://i.pinimg.com/564x/5b/60/d8/5b60d8111d09ca55e7020cc3b29c10a9.jpg" alt="Card" />
            </div>
            <div className="card-content">
              <div className="card-meta">
                <span className="card-meta-number">20 songs</span>
                <button className="card-meta-button">
                  <i className="ai-circle-triangle-right-fill"></i>
                </button>
              </div>
              <h2 className="card-title">Heidi</h2>
              <p className='author'>Free</p>
            </div>
          </div>
        </article>

        {/* Additional Cards */}
        <article className="card">
          <div className="card-inner">
            <span className="card-pin"></span>
            <div className="card-image">
              <img src="src/assets/img/shinchan podcast.jpg" alt="Card" />
            </div>
            <div className="card-content">
              <div className="card-meta">
                <span className="card-meta-number">100 Episodes</span>
                <button className="card-meta-button">
                  <i className="ai-circle-triangle-right-fill"></i>
                </button>
              </div>
              <h2 className="card-title">ShinChan's Crazy Classroom</h2>
              <Crown/>
            </div>
          </div>
        </article>

        <article className="card">
          <div className="card-inner">
            <span className="card-pin"></span>
            <div className="card-image">
              <img src="src/assets/img/tom_and_jerry (1).jpg" alt="Card" />
            </div>
            <div className="card-content">
              <div className="card-meta">
                <span className="card-meta-number">50 Episodes</span>
                <button className="card-meta-button">
                  <i className="ai-circle-triangle-right-fill"></i>
                </button>
              </div>
              <h2 className="card-title">Tom and Jerry: A Day at the Beach</h2>
              <Crown/>
            </div>
          </div>
        </article>
 
        <article className="card">
          <div className="card-inner">
            <span className="card-pin"></span>
            <div className="card-image">
              <img src="src/assets/img/angry_bird.jpg" alt="Card" />
            </div>
            <div className="card-content">
              <div className="card-meta">
                <span className="card-meta-number">30 Episodes</span>
                <button className="card-meta-button">
                  <i className="ai-circle-triangle-right-fill"></i>
                </button>
              </div>
              <h2 className="card-title">Red's mighty feathers</h2>
              <p className='author'>Free</p>
            </div>
          </div>
        </article>

        <article className="card">
          <div className="card-inner">
            <span className="card-pin"></span>
            <div className="card-image">
              <img src="https://cdn-icons-png.flaticon.com/256/130/130885.png" alt="Card" />
            </div>
            <div className="card-content">
              <div className="card-meta">
                <span className="card-meta-number">18 songs</span>
                <button className="card-meta-button">
                  <i className="ai-circle-triangle-right-fill"></i>
                </button>
              </div>
              <h2 className="card-title">Indie Hits</h2>
            </div>
          </div>
        </article>

        <article className="card">
          <div className="card-inner">
            <span className="card-pin"></span>
            <div className="card-image">
              <img src="https://cdn-icons-png.flaticon.com/256/6074/6074694.png" alt="Card" />
            </div>
            <div className="card-content">
              <div className="card-meta">
                <span className="card-meta-number">22 songs</span>
                <button className="card-meta-button">
                  <i className="ai-circle-triangle-right-fill"></i>
                </button>
              </div>
              <h2 className="card-title">Jazz Classics</h2>
            </div>
          </div>
        </article>

        <article className="card">
          <div className="card-inner">
            <span className="card-pin"></span>
            <div className="card-image">
              <img src="https://i.pinimg.com/564x/97/95/36/979536a240d0625db5cabcd876269d96.jpg" alt="Card" />
            </div>
            <div className="card-content">
              <div className="card-meta">
                <span className="card-meta-number">10 songs</span>
                <button className="card-meta-button">
                  <i className="ai-circle-triangle-right-fill"></i>
                </button>
              </div>
              <h2 className="card-title">Vikram Betal(Original Tamil Podcast)</h2>
            </div>
          </div>
        </article>

        <article className="card">
          <div className="card-inner">
            <span className="card-pin"></span>
            <div className="card-image">
              <img src="https://cdn-icons-png.flaticon.com/256/3250/3250606.png" alt="Card" />
            </div>
            <div className="card-content">
              <div className="card-meta">
                <span className="card-meta-number">12 songs</span>
                <button className="card-meta-button">
                  <i className="ai-circle-triangle-right-fill"></i>
                </button>
              </div>
              <h2 className="card-title">Hip Hop Essentials</h2>
            </div>
          </div>
        </article>

        <article className="card">
          <div className="card-inner">
            <span className="card-pin"></span>
            <div className="card-image">
              <img src="https://cdn-icons-png.flaticon.com/256/3552/3552878.png" alt="Card" />
            </div>
            <div className="card-content">
              <div className="card-meta">
                <span className="card-meta-number">20 episodes</span>
                <button className="card-meta-button">
                  <i className="ai-circle-triangle-right-fill"></i>
                </button>
              </div>
              <h2 className="card-title">The Weeknd Hits</h2>
            </div>
          </div>
        </article>
      </section>

      {/* Include Footer */}
      <Footer />
    </div>
  );
};

export default Podcast;
