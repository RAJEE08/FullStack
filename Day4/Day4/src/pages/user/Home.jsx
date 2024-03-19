import React from 'react';
import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "./Footer"; // Assuming you have a SlideShow component for image slides
import { Link } from "react-router-dom";
import "../../assets/css/Home.css";
import Card1 from "../../assets/images/Card1.jpeg";


const Home = ({ children }) => {

    return (
        <div className="home-layout">
            <Header />
            <div className="home-content">
            <section className="container">
            <div className="row">
              <div className="col-7 details">
                
                <h3>Gifts That Tell a Story, Yours to Customize.</h3>
                <p>encapsulates the essence of our personalized gifting experience. Each gift becomes a narrative, tailored to reflect the unique story of the recipient. With customization options ranging from names and dates to heartfelt messages, we empower you to craft gifts that resonate with personal significance. Every present becomes a cherished chapter in the ongoing story of your relationship, creating timeless memories to treasure.</p>
              </div>
              
                <div className="box">
                  {/* Content for the box */}
                  <ul>
                    <li>
                      <div className='card1'><img src={Card1} /></div></li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 4</li>
                    {/* Add more items as needed */}
                  </ul>
              </div>
            </div>
          </section>


      <section className="section--primary">
        <div className="container">
          <div className="col-3 features">
            <i className="fa fa-bolt"></i>
            <p>
            Personalized Gifts, Priceless Memories.!
            </p>
          </div>
          <div className="col-3 features">
            <i className="fa fa-bank"></i>
            <p>
              Product so great. Makes you even greater - go buy now. Super cheap deal!
            </p>
          </div>
          <div className="col-3 features">
            <i className="fa fa-heart"></i>
            <p>
              Feel lonely? Go buy product and have a friend! 
            </p>
          </div>
        </div>
      </section>

      <section className="section--primary--alt">
        <div className="container">
          <h3>Cutomize for your girl friend.</h3>
          <p>"Craftify lets you customize gifts for your girlfriend. Create something unique and memorable. Highly recommended!"</p>
        </div>
      </section>

      <section className="section--primary--light">
        <div className="container">
          <blockquote className="testimonial">
            <p>"Craftify's gifts tell stories. Customization options let me create a unique, memorable present. Highly recommend!"</p>
            <cite>
              Sudhan
            </cite>
          </blockquote>
        </div>
      </section>

      <section className="section--primary--alt bg-image bg-image-2">
        <div className="container text--center">
          <h3>Reasons to buy this product:</h3>
          <div className="col-5 text--left">
            <ul>
              <li>Personal Touch</li>
              <li>Thoughtful Gesture</li>
              <li>Memorable Keepsake</li>
              <li>Tailored to Preferences</li>
              <li>Unique and Exclusive</li>

            </ul>
          </div>
          <div className="col-5 text--left">
            <ul>
              <li>Emotional Connection</li>
              <li>Celebrate Special Occasions</li>
              <li>Show Your Creativity</li>
              <li>Versatile Options</li>
              <li>Spread Happiness</li>

            </ul>
          </div>
        </div>
      </section>

      <section className="text--center">
        <div className="container">
          <h3>Why you still reading?</h3>
          <a href="#" className="btn">Order yours now!</a>
        </div>
      </section>
            </div>
            <Footer />
        </div>
    );
}

Home.propTypes = {
    children: PropTypes.node.isRequired
}

export default Home;
