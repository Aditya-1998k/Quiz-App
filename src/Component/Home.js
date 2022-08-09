import "./Home.css"
import { Link } from 'react-router-dom'
import * as React from 'react';
import Button from '@mui/material/Button';
function Home() {
  return (
    <>
    <div className="home-main">
    <div className="home">
    <div style={{backgroundColor:"white"}}><strong><h2>आए देखते हैं कितना जानते है आप अपने देश के बारे में नीचे दिए गए बटन पर क्लिक करें</h2></strong> </div>
    
    <Button variant="contained" style={{backgroundColor:"white", color:"black"}}><Link to="/quiz" style={{textDecoration:"none"}} ><h1>Quiz</h1></Link></Button>
    
    <div>
      <h4>
        आजादी के 75वे सालगिराह पर भारतीय डाक मना रहा है हर घर तिरंगा अभियान। हर घर तिरंगा अभियान का हिसा बने और तिरंगा ऑर्डर करने के लिए नीचे लिंक पर क्लिक कर <br/> जय हिंद<br/><h2>इंडिया पोस्ट :देवरिया डिवीजन</h2>
        </h4>
    </div>
    <div>
    <Button variant="contained" style={{backgroundColor:"white", color:"black"}}><a target="blank" href="https://www.epostoffice.gov.in/ProductDetails/Guest_productDetails?Prodid=3979"><h4>Order Now</h4></a> </Button>
    </div>
    <hr/>
    <div>
      <p><strong>Made With Love By Aditya (Hetimpur SO)</strong></p>
    </div>

    </div>
    </div>
    </>
  )
}

export default Home