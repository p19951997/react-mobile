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
                <Router>
                    <Route path='/' exact render={(props)=><MyLayout  {...props}><Home /></MyLayout>} />
                    <Route path='/Cart' render={(props)=><MyLayout  {...props}><Cart /></MyLayout>} />
                    <Route path='/Mine' render={(props)=><MyLayout  {...props}><Mine /></MyLayout>} />
                </Router>
            </Fragment>
         );
    }
}
 
export default App;