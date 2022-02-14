import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import routes from './routes'

function App() {
   return (
      <Router>
         <Header />

         <Switch>{routes}</Switch>

         {/* <Footer /> */}
      </Router>
   )
}

export default App
