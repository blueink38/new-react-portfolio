import React from 'react';
import myResume from '../../assets/my-resume.pdf'
function Resume () {
    return(
        <section>
            <h4>With the help of the Coding Boot Camp at the University of Texas I have learned front end and back end skills.  I can't wait to learn more</h4>
            
            <h3>Resume</h3>
            <span><a href={myResume} download>Download My Resume</a></span>
            <div>
                <strong>My Skills</strong> 
                <ul className='unstyled'>
                    <li>HTMl/CSS</li>
                    <li>Javascript</li>
                    <li>React</li>
                    <li>ExpressJS</li>
                    <li>NodeJS</li>
                    <li>MySQL</li>
                    <li>NongoDB and Mongoose</li>
                </ul>
            </div>     
        </section>
    )
};

export default Resume;