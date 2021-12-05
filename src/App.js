import './App.scss';
import NavBar from './Components/NavBar';
import HomePage from './Pages/HomePage';
import { Switch, Route } from 'react-router-dom';
import AboutPage from './Pages/AboutPage';
import PortfoliosPage from './Pages/PortfoliosPage';
import BlogsPage from './Pages/BlogsPage';
import ContactPage from './Pages/ContactPage';

function App() {
  return (
    <div className='App'>
      <div className='sidebar'>
        <NavBar />
      </div>
      <div className='main-content'>
        <div className='content'>
          <Switch>
            <Route exact path='/' exact>
              <HomePage />
            </Route>
            <Route exact path='/about' exact>
              <AboutPage />
            </Route>
            <Route exact path='/portfolios' exact>
              <PortfoliosPage />
            </Route>
            <Route exact path='/blogs' exact>
              <BlogsPage />
            </Route>
            <Route exact path='/contact' exact>
              <ContactPage />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;

// https://youtu.be/ajgxZ5hBSHQ?t=18193
