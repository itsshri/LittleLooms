import React from 'react';
import { Crown } from 'lucide-react';
import '../pages/css/Premium.css';

const Premium = () => {
  return (
    <>
      {/* Original Section */}
      <section className="premium-container">
        <div className="premium-category-container">
          <div className="premium-content">
            <img
              src="https://w0.peakpx.com/wallpaper/460/728/HD-wallpaper-night-bad-boy-cartoon-funny-love-pogo-shin-chan.jpg"
              className="premium-profession-image"
              alt="Profession"
            />
            <img
              src="https://is.zobj.net/image-server/v1/images?r=8qveWQBxzo8N6-QFvJB7xZtUti20uBCdWBh7-ErLWi5XH5vrIkDXNUTP_XhcFQLn2cWxueEyIEbZ8uHUZOT-u09p2wHyKurkTOfF41OTxub9JM86XQfFzspRqZpCNraE5RxnqCtarJdou-GDXqPXekOwQ-hkgKUeH83jJkpKuGSYkRCPuvsbUP7ke5UbEnjsxeEd4dm3D2O0kmHWfqIVtqimEh_e66wf_NWS5w"
              className="premium-profile-image"
              alt="Profile"
            />
            <div className="premium-profile-detail">
              <span>ShinChan Crayon Book</span>
              <span>Manga Series</span>
              <Crown/>
            </div>
            <div className="premium-wrapper">
              <div className="premium-profile-quote">
                <p>
                  "Crayon Shin-chan is a Japanese manga series written and illustrated by Yoshito Usui. Crayon Shin-chan made its first appearance in 1990 in a Japanese weekly magazine called Weekly Manga Action, which was published by Futabasha."
                </p>
              </div>
              <button className="premium-buy-now-btn">Buy Now</button>
            </div>
            <span>*Loom Subscription</span>
          </div>

          <div className="premium-content">
            <img
              src="https://www.gutenberg.org/files/46409/46409-h/images/cover-image.jpg"
              className="premium-profession-image"
              alt="Profession"
            />
            <img
              src="https://cdn.kobo.com/book-images/a73d900d-df6b-4403-9855-5becfe4a4b0e/1200/1200/False/heidi-306.jpg"
              className="premium-profile-image"
              alt="Profile"
            />
            <div className="premium-profile-detail">
              <span>Heidi</span>
              <span>Johanna Spyri</span>
              {/* <p>Photographer + Model</p> */}
            </div>
            <div className="premium-wrapper">
              <div className="premium-profile-quote">
                <p>
                  "Little orphan Heidi goes to live high in the Alps with her gruff grandfather and brings happiness to all who know her on the mountain. When Heidi goes to Frankfurt to work in a wealthy household, she dreams of returning to the mountains and meadows, her friend Peter, and her beloved grandfather."
                </p>
              </div>
              <button className="premium-buy-now-btn">Read for Free</button>
            </div>
          </div>

          <div className="premium-content">
            <img
              src="https://5.imimg.com/data5/JP/AV/NZ/SELLER-3763557/tenali-raman-illustrated-.jpg"
              className="premium-profession-image"
              alt="Profession"
            />
            <img
              src="https://www.maplepress.co.in/cdn/shop/products/9789350335000_700x700.jpg?v=1625484799"
              className="premium-profile-image"
              alt="Profile"
            />
            <div className="premium-profile-detail">
              <span>Tenali Raman</span>
              <span>Compilation</span>
            </div>
            <div className="premium-wrapper">
              <div className="premium-profile-quote">
                <p>
                  "The Best of Tenali Raman by Mrs Rungeen Singh is a great compilation of interesting and entertaining stories of Tenali Raman right from his childhood to adulthood. The author has narrated the stories very beautifully using very simple and limpid language."
                </p>
              </div>
              <button className="premium-buy-now-btn">Coming soon</button>
            </div>
              <p>*Limited Access for free users
                <br></br>
                Available for Loom Pro Users
              </p>
          </div>

          <div className="premium-content">
            <img
              src="https://w0.peakpx.com/wallpaper/906/246/HD-wallpaper-hello-angry-birds-2019-best-best-angry-birds-cute-hi-team.jpg"
              className="premium-profession-image"
              alt="Profession"
            />
            <img
              src="https://r1.ilikewallpaper.net/iphone-12-pro-max-wallpapers/download-113443/The-Angry-Birds-2-Samsung-Galaxy-Note-9-8-S9-S8-S8.jpg"
              className="premium-profile-image"
              alt="Profile"
            />
            <div className="premium-profile-detail">
              <span>Angry Birds</span>
              <span>Rovio Entertainment</span>
            </div>
            <div className="premium-wrapper">
              <div className="premium-profile-quote">
                <p>
                  "One of the most popular mobile games ever brings down the house in an explosive comic series for readers young and old alike! Featuring art and stories from some of today's finest storytellers, this new volume is guaranteed to please readers of all ages who love the Angry Birds app or great comics in general!"
                </p>
              </div>
              <button className="premium-buy-now-btn">Buy Now</button>
            </div>
              <p>*Loom Subscription</p>
          </div>
        </div>
      </section>

      {/* New Section with Duplicate Content */}
      <section className="premium-container">
        <div className="premium-category-container">
          <div className="premium-content">
            <img
              src="https://m.media-amazon.com/images/I/71AA80hE49L._AC_UF1000,1000_QL80_.jpg"
              className="premium-profession-image"
              alt="Profession"
            />
            <img
              src="https://m.media-amazon.com/images/I/81iA8x5helL._AC_UF1000,1000_QL80_.jpg"
              className="premium-profile-image"
              alt="Profile"
            />
            <div className="premium-profile-detail">
              <span>Simple Maths</span>
              <span>Kids Edition</span>
            </div>
            <div className="premium-wrapper">
              <div className="premium-profile-quote">
                <p>
                  "Get ready for school with engaging math activity pages that will help your child master kindergarten math skills.Have your child enhance problem solving skills by learning through fun math activities!

Math concepts were inspired by state standards to make sure your child is prepared for future success.All you need are crayons and a pencil."
                </p>
              </div>
              <button className="premium-buy-now-btn">₹ 300</button>
            </div>
          </div>

          <div className="premium-content">
            <img
              src="https://m.media-amazon.com/images/I/61IheQxU5NL._AC_UF1000,1000_QL80_.jpg"
              className="premium-profession-image"
              alt="Profession"
              />
            <img
              src="https://i.pinimg.com/736x/29/6c/50/296c50c1610e0acd529924cbe53d9da2.jpg"
              className="premium-profile-image"
              alt="Profile"
            />
            <div className="premium-profile-detail">
              <span>Environmental Science</span>
              <span>Next Explorers</span>
            </div>
            <div className="premium-wrapper">
              <div className="premium-profile-quote">
                <p>
                  "Environmental studies incorporates more of the social sciences for understanding human relationships, perceptions and policies towards the environment. "
                </p>
              </div>
              <button className="premium-buy-now-btn">₹ 200</button>
            </div>
          </div>

          <div className="premium-content">
            <img
              src="https://shop.merriam-webster.com/cdn/shop/products/Britannica-Baby-Encyclopedia-cover.jpg?v=1667239352"
              className="premium-profession-image"
              alt="Profession"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/en/b/be/Childrensdigest-1950-10.png"
              className="premium-profile-image"
              alt="Profile"
            />
            <div className="premium-profile-detail">
              <span>Prince Akashi</span>
              <p>Photographer + Model</p>
            </div>
            <div className="premium-wrapper">
              <div className="premium-profile-quote">
                <p>
                  "If you see something that moves you, and then snap it, you keep a moment."
                </p>
              </div>
              <button className="premium-buy-now-btn">Buy Now</button>
            </div>
          </div>

          <div className="premium-content">
            <img
              src="https://rawcdn.githack.com/MuhammadHasann/component-frontend/7e3a0bced6f1b050e8d0b621f2a3a6e7b1cb06d3/section/category%20card-2/assets/Fashion%20Designer.jpg"
              className="premium-profession-image"
              alt="Profession"
            />
            <img
              src="https://rawcdn.githack.com/MuhammadHasann/component-frontend/7e3a0bced6f1b050e8d0b621f2a3a6e7b1cb06d3/section/category%20card-2/assets/Rafaella%20Mendes.jpg"
              className="premium-profile-image"
              alt="Profile"
            />
            <div className="premium-profile-detail">
              <span>Rafaella Mendes</span>
              <p>Fashion Designer + Model</p>
            </div>
            <div className="premium-wrapper">
              <div className="premium-profile-quote">
                <p>
                  "My mission in life is not merely to survive, but to thrive and to do so with some passion, some compassion, some humor, and some style."
                </p>
              </div>
              <button className="premium-buy-now-btn">Buy Now</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Premium;
