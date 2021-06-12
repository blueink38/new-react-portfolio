import React from 'react';
import profilePic from '../../assets/images/me-by-bay-flipped.jpg'

function About () {
    return (
        <section className='my-5'>
            <h1 id='about'>About Me</h1>
            <div className="my-2">
                <img
                    src={profilePic}
                    alt="Jason Fletcher"
                    key="profilePic"
                />
                <p>
                Hello! I'm Jason and I am a web developer.  I was born in the south, grew up on the west coast then moved to Houston, TX where I went to High School and graduated.  I moved to Austin afterwards to attend the University of Texas where I got a degree in French.  My family moved to Europe while I was in college.  With a homebase in Amsterdam I was lucky to visit Europe many times and spend time in France where I put my degree to use!  I've been working in the service industry since college in both Austin and Manahattan.  This has been a great learning experience where I was able to try different cuisines, learn about wine and spirits as well as interact with just about everyone.  I'm ready to put all these life experiences to use as I enter the next chapter of my life as a web developer!                
                </p>

            </div>
            
        </section>
    )
}

export default About;