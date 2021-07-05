import {FaTelegram, FaGithub} from "react-icons/fa"

const Homepage = () => {
    return (
        <>
            <section className="homepage">
              <div className="overlay">
              <h1>Maksim Tarasevich</h1>
                <p>
                    Front-end Developer
                </p>
               <ul>
                   <li>
                       <a href="https://tlgg.ru/MaxTarasevich" target="_blank" rel="noopenner noreferrer"><FaTelegram /></a>
                   </li>
                   <li>
                       <a href="https://github.com/MaxTarasevich?tab=repositories" target="_blank" rel="noopenner noreferrer"><FaGithub /></a>
                   </li>
                  
               </ul>
              </div>
            </section>
        </>
    )
}

export default Homepage