import React from 'react'

function Project () {
    const projects = [
        {
           title: "iCamp",
           image: "icamp-screenshot.png",
           page: "https://dragoonkite.github.io/iCamp",
           code: "https://github.com/DragoonKite/iCamp"
        },
        {
            title: "Eat Out, Austin",
            image: "eat-out-austin-screenshot.png",
            page: "https://eat-out-austin.herokuapp.com/",
            code: "https://github.com/DragoonKite/eat-out-austin"
        },
        {
            title: "Beer Me",
            image: "beer-me-screenshot.png",
            page: "https://hey-beer-me.herokuapp.com",
            code: "https://github.com/blueink38/beer-me"
        },
        {
            title: "Note Taker",
            image: "note-taker-screenshot.png",
            page: "https://blueink38.github.io/note-taker/",
            code: "https://github.com/blueink38/note-taker/"
        },
        {
            title: "Run Buddy",
            image: "run-buddy-screenshot.png",
            page: "https://blueink38.github.io/run-buddy/",
            code: "https://github.com/blueink38/run-buddy"
        },
        {
            title: "Weather Dashboard",
            image: "weather-app-screenshot.png",
            page: "https://blueink38.github.io/weather-app/",
            code: "https://github.com/blueink38/weather-app"
        }
    ];

    return(
        <section>
            <h2> Some things I've been working on...</h2>
            <div className='d-flex flex-wrap justify-content-center' style={{width: "80%", margin: "auto"}}>
                {projects.map(project => (
                        <div className="card mx-1 bg-primary mb-2 ml-2 mr-2 mt-2" style={{width: "18rem"}}>
                            <div className="card-body">
                                <h5 className="card-title text-light">{project.title}</h5>
                            </div>
                            <img className="card-img-top" src={`assets/images/${project.image}`} alt={project.title} key={project.title}/>
                            <div className="card-body">
                                <a href={project.page} target="_blank" rel="noreferrer" className="card-link text-light">Deployed Site</a>
                                <a href={project.code} target="_blank" rel="noreferrer" className="card-link text-light">Github Repository</a>
                            </div>
                        </div>
                ))}
            </div>
        </section>  
    )
}

export default Project;