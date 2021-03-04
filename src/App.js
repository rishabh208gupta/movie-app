import React from 'react';
import { Movie } from './components/movie';
import { Route, Switch, Redirect } from 'react-router-dom';
import Customers from './components/customers';
import notFound from './components/notFound';
import Rentals from './components/rentals';
import NavBar from './components/navBar';
import MovieForm from './components/movieForm';
import Login from './components/login';
import Register from './components/register';
import './App.css';


function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <main className="container">
      <Switch>
        <Route path="/movies/:id" component={MovieForm}/>
        {/* <Route path="/movie-form" component={MovieForm}/> */}
        <Route path="/movies" component={Movie}/>
        <Route path="/customers" component={Customers}/>
        <Route path="/rentals" component={Rentals}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/not-found" component={notFound}/>
        <Redirect from="/" exact to="/movies"/>
        <Redirect to="/not-found"/>
      </Switch>
    </main>
    </React.Fragment>
    
  );
}

export default App;
