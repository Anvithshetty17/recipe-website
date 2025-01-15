import React, { useState, useEffect } from 'react';
import Mealcards from './Mealcards';

import logo from './img/logo.jpg';
import Header from './Header';

const Mainpage = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [msg, setMsg] = useState('');

  // Fetch "cake" data by default
  useEffect(() => {
    const fetchDefaultData = async () => {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=cake');
      const jsonData = await response.json();
      setData(jsonData.meals);
    };
    fetchDefaultData();
  }, []);

  const handleInput = (event) => {
    setSearch(event.target.value);
  };

  const myFun = async () => {
    if (search === '') {
      setMsg('Please Enter Something');
    } else {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
      const jsonData = await response.json();
      setData(jsonData.meals || []); // If no data, set to an empty array
      setMsg('');
    }
  };

  return (
    <>
      <Header />

      <div className="container">
        <div className="searchBar">
          <input type="text" placeholder="What recipe do you want to learn today ?" onChange={handleInput} />
          <button onClick={myFun}>
            <i className="fa fa-search" aria-hidden="true" style={{ fontSize: '24px', paddingRight: '5%' }}></i> Search
          </button>
        </div>
        <h4 className="msg">{msg}</h4>
        <div>
          <Mealcards detail={data} />
        </div>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={logo} alt="Logo" style={{ width: '120px', height: 'auto', borderRadius: '50%' }} />
          </div>
          <div className="footer-links">
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="footer-social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Delicious Recipes. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Mainpage;
