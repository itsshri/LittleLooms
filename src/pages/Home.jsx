import React from 'react'
import '../pages/css/Home.css';

const Home = () => {
  return (
    <div>
      {/* Scroll Up Button */}
      <div className="scroll-up-btn">
        <i className="fas fa-angle-up"></i>
      </div>

      {/* Header */}
      {/* <nav className="navbarr">
        <div className="max-width">
          <div className="logo">
            <a href="#"><span></span><span></span></a>
          </div>
          <ul className="menu">
            <li><a href="#home" className="menu-btn"><strong>Home</strong></a></li>
            <li><a href="#about" className="menu-btn"><strong>About</strong></a></li>
            <li><a href="#services" className="menu-btn"><strong>Services</strong></a></li>
            <li><a href="#skills" className="menu-btn"><strong>Skills</strong></a></li>
            <li><a href="#projects" className="menu-btn"><strong>Projects</strong></a></li>
            <li><a href="#contact" className="menu-btn"><strong>Contact</strong></a></li>
          </ul>
          <div className="menu-btn">
            <i className="fas fa-bars"></i>
          </div>
        </div>
      </nav> */}

      {/* Home Section */}
      <section className="home" id="home">
        <div className="max-width">
          <div className="home-content">
            <div className="text-1">வணக்கம் | Hello | 你好 | Ciao | नमस्ते | Bonjour | ഹലോ | నమస్కారం</div>
            <div className="text-2">Shri!</div>
            <div className="text-3"><span className="typing"></span></div>
            <a href="#about">Start Browsing</a>
            {/* <a href="#about">Start Browsing</a> */}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="max-width">
          <h2 className="title">About us</h2>
          <div className="about-content">
            <div className="column left">
              <img src="C:\Users\Shrijith\Downloads\oggy.jpg" alt="Profile Image 626x626" />
            </div>
            <div className="column right">
              <div className="t">I'm<span className="typing-2"></span></div>
              <p>A passionate full stack developer with a keen interest in securing a position at a recognized company. I enjoy working on both front-end and back-end technologies, creating seamless and efficient applications. I am dedicated to continuous learning and growth in the field of web development.</p>
              <br />
              <div className="t">My Avocations<span className="typing-2"></span></div>
              <br />
              <p>Beyond coding, I love crafting engaging content and sharing it through social media platforms. Whether it's articles, blog posts, or social media content.</p>
              <br />
              <p>I have a passion for creating captivating stories and engaging content that captivates readers. My writing journey includes Drama/Romance/Horror, and I enjoy sharing my love for writing through various platforms, including social media.</p>
              <br />
              <div className="text">Why Work With Me</div>
              <p>I'm a programmer & love to invest the necessary time to understand the customer's problem very well.</p>
              <a href="resume.pdf" download="Resume.pdf">Download Resume</a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <div className="max-width">
          <h2 className="title">My services</h2>
          <div className="serv-content">
            <div className="card">
              <div className="box">
                <i className="fas fa-laptop-code"></i>
                <div className="text">Web Design</div>
                <p>Your Next Web Developer, who is working in Shopify Dropshipping Stores, High Converting Ecommerce stores, Product Page also having Custom code, liquid template design.</p>
              </div>
            </div>
            <div className="card">
              <div className="box">
                <i className="fas fa-user-secret"></i>
                <div className="text">User Secret</div>
                <p>I ensure that there is no sensitive data included in the source code and is stored outside of the project folder. And all the data stored by User Secrets is not encrypted.</p>
              </div>
            </div>
            <div className="card">
              <div className="box">
                <i className="fas fa-code"></i>
                <div className="text">Python Programmer</div>
                <p>I encompass both Web Development & Programming. The overall style of the app, including things like the color scheme, font selection, and the types of buttons and widgets used.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills" id="skills">
        <div className="max-width">
          <h2 className="title">My Skills</h2>
          <div className="skills-content">
            <div className="column left">
              <div className="text">INTERNSHIP</div>
              <ul>
                <li className="intern">Codsoft - "Artificial Intelligence"</li>
                <li className="intern">BlueStone Consultancy - "Web-Development"</li>
                <li className="intern">Octanet - "Web-Development"</li>
              </ul>
              <br />
              <div className="text">PROJECT</div>
              <ul>
                <li className="project">Portfolio (HTML, CSS, JS)</li>
                <li className="project">Trip Planning Website (React JS)</li>
                <li className="project">Naukri - Job Seeking Website</li>
                <li className="project">Streaming Platform Website (HTML, CSS)</li>
              </ul>
              <br />
              <a href="#" target="blank">Get Educated...</a>
            </div>
            <div className="column right">
              <div className="bars">
                <div className="info">
                  <span>HTML and CSS</span>
                  <span>90%</span>
                </div>
                <div className="line python"></div>
              </div>
              <div className="bars">
                <div className="info">
                  <span>React JS</span>
                  <span>80%</span>
                </div>
                <div className="line html"></div>
              </div>
              <div className="bars">
                <div className="info">
                  <span>C++</span>
                  <span>70%</span>
                </div>
                <div className="line django"></div>
              </div>
              <div className="bars">
                <div className="info">
                  <span>JavaScript</span>
                  <span>80%</span>
                </div>
                <div className="line html"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects" id="projects">
        <div className="max-width">
          <h2 className="title">My Projects</h2>
          <div className="carousel owl-carousel">
            <div className="card">
              <div className="box">
                <img src="https://source.unsplash.com/720x600/?shopping" alt="Ecommerce Project" />
                <div className="text">Ecommerce</div>
                <p>Project Details: Ecommerce project.</p>
              </div>
            </div>
            <div className="card">
              <div className="box">
                <img src="https://source.unsplash.com/720x600/?portfolio" alt="Portfolio Project" />
                <div className="text">Portfolio</div>
                <p>Project Details: Personal Portfolio.</p>
              </div>
            </div>
            <div className="card">
              <div className="box">
                <img src="https://source.unsplash.com/720x600/?blog" alt="Temperature Converter Project" />
                <div className="text">Temperature Converter</div>
                <p>Project Details: Temperature converting website.</p>
              </div>
            </div>
            <div className="card">
              <div className="box">
                <img src="https://source.unsplash.com/720x600/?messanger" alt="Student Grading System Project" />
                <div className="text">Student Grading System</div>
                <p>Project Details: Grading System for students.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="max-width">
          <h2 className="title">Contact Me</h2>
          <div className="contact-content">
            <div className="column left">
              <div className="text">Get in Touch</div>
              <p>If you are interested in my work or would like to collaborate, please feel free to reach out to me via the contact form below.</p>
              <br />
              <p>You can also find me on:</p>
              <div className="social">
                <a href="https://www.linkedin.com/in/shrijith/" target="_blank"><i className="fab fa-linkedin"></i></a>
                <a href="https://github.com/shrijith" target="_blank"><i className="fab fa-github"></i></a>
                <a href="https://twitter.com/shrijith" target="_blank"><i className="fab fa-twitter"></i></a>
              </div>
            </div>
            <div className="column right">
              <form action="#">
                <div className="fields">
                  <div className="field name">
                    <input type="text" placeholder="Name" />
                  </div>
                  <div className="field email">
                    <input type="email" placeholder="Email" />
                  </div>
                </div>
                <div className="field">
                  <input type="text" placeholder="Subject" />
                </div>
                <div className="field textarea">
                  <textarea placeholder="Message"></textarea>
                </div>
                <button type="submit">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="max-width">
          <div className="footer-content">
            <div className="footer-info">
              <h3>Contact Us</h3>
              <ul>
                <li><i className="fas fa-map-marker-alt"></i> 123 Street, City, Country</li>
                <li><i className="fas fa-phone-alt"></i> (123) 456-7890</li>
                <li><i className="fas fa-envelope"></i> info@example.com</li>
              </ul>
            </div>
            <div className="footer-social">
              <a href="https://facebook.com" target="_blank"><i className="fab fa-facebook-f"></i></a>
              <a href="https://twitter.com" target="_blank"><i className="fab fa-twitter"></i></a>
              <a href="https://instagram.com" target="_blank"><i className="fab fa-instagram"></i></a>
              <a href="https://linkedin.com" target="_blank"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;


