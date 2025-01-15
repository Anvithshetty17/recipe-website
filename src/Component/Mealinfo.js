import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from './Header';
import logo from './img/logo.jpg';

import { useNavigate } from 'react-router-dom';

const Mealinfo = () => {
    const { mealid } = useParams();
    const [info, setInfo] = useState()

    const navigate = useNavigate();

    const getInfo = async () => {
        const get = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`);

        const jsonData = await get.json();

        setInfo(jsonData.meals[0])
    }
    if (info != "") {
        getInfo()
    }
    return (
        <>
            <Header />
            <div>
                {info ?
                    <div className='mealInfo'>
                        <img src={info.strMealThumb} />
                        <div className='info'>
                            <h1>Recipe Detail</h1>
                            <button>{info.strMeal}</button>
                            
                            <h3>Intruction's</h3>
                            <p>{info.strInstructions}</p>
                            <a href={info.strYoutube}
                                target="_blank"
                                style={{marginLeft:'26%', color: 'white', display: 'flex', alignItems: 'center', textDecoration: 'none' ,marginTop:'14px'}}
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-youtube" style={{ marginRight: '8px', fontSize: '1.5rem', color: '#FF0000' }}></i>
                                Watch Video!
                            </a>
                            <br></br>
                            <button
                            onClick={() => navigate('/')}
                            style={{
                                marginTop: '20px',
                                padding: '10px 20px',
                                backgroundColor: 'orangered',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                fontSize: '1rem',
                                textTransform: 'uppercase',
                            }}
                        >
                           Back to search.
                        </button>

                        </div>
                    </div>
                    : <div style={{ minHeight: '10vh', textAlign: 'center', padding: '200px', fontWeight: 'bolder', textTransform: "uppercase", fontSize: "2rem" }}>
                        Data Not Found<br></br>
                        <button
                            onClick={() => navigate('/')}
                            style={{
                                marginTop: '20px',
                                padding: '10px 20px',
                                backgroundColor: 'orangered',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                fontSize: '1rem',
                                textTransform: 'uppercase',
                            }}
                        >
                            Retry
                        </button>
                    </div>}
            </div>
            <footer style={{ borderTop: '1px solid #FFF' }} className="footer">
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
    )
}

export default Mealinfo;