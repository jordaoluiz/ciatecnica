import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from "./Pages/Home/HomePage"
import NewUserPage from "./Pages/NewUser/newUser"
function App() {
  return (
    <div>
    <BrowserRouter>
    <Switch>
            <Route path="/" exact={true} component={HomePage} />
            <Route path="/novoUsuario" exact={true} component={NewUserPage} />
           
        </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
