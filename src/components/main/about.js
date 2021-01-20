import React from 'react';
import profile from '../../assets/profile.png';

const AboutMe = () => {
    return <div class="about_me">
        <div>
    <h1>About Me</h1>
    <p>Hey! I am Nino Potskhishvili Zhong and this is my project for React</p>
    <p>I decided to create News web page for my project. I have 4 routes /home /business /wallstreet /about. </p>
    <p>In addition, I have registration form with authentification. 
        I will be glad if you like it! 
    </p>
    </div>
    <div>
    <div class="row">
     <div class="column">
        <div class="card">
        <img src={profile} alt="me" style={{width:'10vw'}}></img>
            <div class="container">
                <h2>Nina</h2>
                <p class="title">Creator</p>
                <p>Group 3</p>
                <p>nino.potskhishvili.zhong.1@btu.edu.ge</p>
                
            </div>
        </div>
     </div>
    </div>
  </div>    
</div>
}
export default AboutMe;