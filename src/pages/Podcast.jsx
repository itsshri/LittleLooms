import React from 'react';
import { Play } from 'lucide-react';
import '../pages/css/Podcast.css'

const Podcast = () => {
  return (
    <div className="glassBox-wrapper">
      <div className="glassBox-container">
        <div className="glassBox">
          <div className="glassBox__imgBox">
            <center>
              <img src="https://cdn-icons-png.flaticon.com/256/2775/2775347.png" alt="Podcast" />
            </center>
            <h3 className="glassBox__title">Technology Podcasts</h3>
          </div>
          <br></br>
            <Play />
          <div className="glassBox__content">
            Discover the latest trends in technology through our curated podcast series.
            {/* Audio Player */}
            <audio controls>
              <source src="https://example.com/your-podcast.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>

        <div className="glassBox">
          <div className="glassBox__imgBox">
            <center>
              <img src="https://cdn-icons-png.flaticon.com/512/3342/3342081.png" alt="Podcast" />
            </center>
            <h3 className="glassBox__title">Health & Wellness</h3>
          </div>
          <div className="glassBox__content">
            Tune in to our health and wellness podcasts to improve your lifestyle and well-being.
          </div>
        </div>

        <div className="glassBox">
          <div className="glassBox__imgBox">
            <center>
              <img src="https://cdn-icons-png.flaticon.com/256/3815/3815072.png" alt="Podcast" />
            </center>
            <h3 className="glassBox__title">Business Insights</h3>
          </div>
          <div className="glassBox__content">
            Get valuable business insights and strategies from industry leaders in our podcasts.
          </div>
        </div>

        <div className="glassBox">
          <div className="glassBox__imgBox">
            <center>
              <img src="https://cdn-icons-png.flaticon.com/256/130/130885.png" alt="Podcast" />
            </center>
            <h3 className="glassBox__title">Entertainment</h3>
          </div>
          <div className="glassBox__content">
            Enjoy our collection of entertainment podcasts for your daily dose of fun and relaxation.
          </div>
        </div>
      </div>

      <div className="glassBox-container">
        <div className="glassBox">
          <div className="glassBox__imgBox">
            <center>
              <img src="https://cdn-icons-png.flaticon.com/256/6074/6074694.png" alt="Podcast" />
            </center>
            <h3 className="glassBox__title">Science & Research</h3>
          </div>
          <div className="glassBox__content">
            Dive deep into the world of science and research with our engaging podcast series.
          </div>
        </div>

        <div className="glassBox">
          <div className="glassBox__imgBox">
            <center>
              <img src="https://cdn-icons-png.flaticon.com/256/3390/3390236.png" alt="Podcast" />
            </center>
            <h3 className="glassBox__title">History & Culture</h3>
          </div>
          <div className="glassBox__content">
            Explore historical events and cultural phenomena through our fascinating podcasts.
          </div>
        </div>

        <div className="glassBox">
          <div className="glassBox__imgBox">
            <center>
              <img src="https://cdn-icons-png.flaticon.com/256/3250/3250606.png" alt="Podcast" />
            </center>
            <h3 className="glassBox__title">Education</h3>
          </div>
          <div className="glassBox__content">
            Enhance your knowledge with our educational podcasts on various subjects.
          </div>
        </div>

        <div className="glassBox">
          <div className="glassBox__imgBox">
            <center>
              <img src="https://cdn-icons-png.flaticon.com/256/3552/3552878.png" alt="Podcast" />
            </center>
            <h3 className="glassBox__title">Comedy</h3>
          </div>
          <div className="glassBox__content">
            Enjoy a good laugh with our collection of comedy podcasts featuring top comedians.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Podcast;
