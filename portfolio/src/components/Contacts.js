import {FaPhone,FaEnvelope} from "react-icons/fa"

const Contacts = () => {
    return(
        <>
      <section className="contacts">
      <h1>
          Contact Me
      </h1>
          <ul>
              <li>
                  <a href="tel:+375299893790">
                   <FaPhone /> +375 (29) 989 37 90
                  </a>
              </li>
              <li>
                  <a href="mailto:maxtarasevich@gmail.com">
                    <FaEnvelope />maxtarasevich@gmail.com
                  </a>
              </li>
          </ul>
      </section>
      </>
    )
}
export default Contacts