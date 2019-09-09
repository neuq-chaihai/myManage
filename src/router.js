import React,{Component} from 'react';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import App from './App';
import Home from './pages/home';
import Yingji from './pages/yingji';
import Demo from './pages/demo';

class Router extends Component{

    render(){
        return(
            <BrowserRouter>
                <App>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/yingji' component={Yingji} />
                        <Route exact path='/demo' component={Demo} />
                    </Switch>
                </App>
            </BrowserRouter>
        )
    }
}

export default Router;