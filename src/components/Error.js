import {Link} from "react-router-dom"


const Error = ()=>{
    return(
      
        <section className="error">
            <h1>Error 404. Page not found.</h1>
            <div>
            <Link to="/">Back to Home</Link>
            </div>

        </section>
      
    )
}

export default Error