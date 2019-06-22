import React,{ Component,Fragment } from 'react'
import { HashRouter as Router,Link,Route } from 'react-router-dom'
import Home from './pages/Home.js'
import Cart from './pages/Cart.js'
import Mine from './pages/Mine.js'
import MyLayout from './components/MyLayout'
import './styles/App.css';

class App extends Component {
    render() { 
        return ( 
            <Fragment>
                {/* <Router>
                    <Route path='/' exact component={Home} />
                    <Route path='/Cart' component={Cart} />
                    <Route path='/Mine' component={Mine} />
                </Router> */}
                <MyLayout  />
            </Fragment>
         );
    }
}
 
export default App;