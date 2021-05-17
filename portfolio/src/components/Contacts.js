import {FaPhone,FaEnvelope} from "react-icons/fa"

const Contacts = () => {
    return(
        <>
      <section className="contacts">
      <h1>
          Contacts
      </h1>
          <ul>
              <li>
                  <a href="tel:+375299893790">
                   <FaPhone /> 
                   <span>
                   +375 (29) 989 37 90
                   </span>
                  </a>
              </li>
              <li>
                  <a href="mailto:maxtarasevich@gmail.com">
                    <FaEnvelope />
                    <span>
                        maxtarasevich@gmail.com
                    </span>
                  </a>
              </li>
          </ul>
      </section>
      </>
    )
}
export default Contacts