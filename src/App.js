import {BrowserRouter, Route, Switch} from "react-router-dom"

import Homepage from "./components/Homepage"
import Projects from "./components/Projects"
import Error from "./components/Error"
import Menu from "./components/Menu"
import Contacts from "./components/Contacts"




const  App = () => {
  return (
    <BrowserRouter>
    <Menu /> 

    <Switch>
    <Route path="/" exact>
       <Homepage/>
    </Route>
    <Route path="/projects"> 
      <Projects/>
    </Route>
    <Route path="/contacts"> 
      <Contacts/>
    </Route>
    <Route path="*"> 
      <Error/>
    </Route>
    </Switch>

    
   
    </BrowserRouter>
  );
}

export default App;
