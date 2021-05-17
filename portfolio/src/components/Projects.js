
import {projects} from "../data/projects"
import {FaGithub, FaVideo } from "react-icons/fa"



const Projects = () =>{
    
    return(
        <>
       <section className="projects">
           <h1>Project Page</h1>
           <div className="cards">
            {projects.map(({id, title, desc, github, demo, image}) => (
                <article key={id}>
                    <img className="cards__img" src={image} alt={title}/>
                    <h4>
                        {title}
                    </h4>
                    <p>
                        {desc}
                    </p>
                    <ul>
                        <li>
                            <a href={github} target="_blank" rel="noopenner noreferrer">
                            <FaGithub />
                            Github
                            </a>
                        </li>
                        <li>
                           <a href={demo} target="_blank" rel="noopenner noreferrer">
                            <FaVideo />
                           Demo
                            </a>
                        </li>
                    </ul>
                </article>
            ))}
           </div>

       </section>
        </>
    )
}

export default Projects