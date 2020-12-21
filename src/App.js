import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home';
import { NavBar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Products } from './components/Products';
import { Product } from './components/product[id]';
import { DairyNutrition } from './components/DairyNutrition';
import { Homemix } from './components/Homemix';
import { Career } from './components/Careers';
import { Vacancy } from './components/Vacancy';
import { SpecialityFeed } from './components/SpecialityFeed';
import { PageNotFound } from './components/PageNotFound';

function App() {
  return (
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/products' component={Products} />
          <Route exact path='/products/:id' component={Product} />
          <Route exact path='/dairyNutrition' component={DairyNutrition} />
          <Route exact path='/homemixNutrition' component={Homemix} />
          <Route exact path='/specialityFeed' component={SpecialityFeed} />
          <Route exact path='/careers' component={Career} />
          <Route exact path='/careers/:name/:id' component={Vacancy} />
          <Route path='*' component={PageNotFound} />
        </Switch>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
