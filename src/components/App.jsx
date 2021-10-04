import { MoviesGrid } from "./MoviesGrid";
import style from "./App.module.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";
import { MovieDetails } from "../pages/MovieDetails";
import { LandingPage } from "../pages/LandingPage";


export function App(){
    return (
 <Router> 
        <header>
            <Link to="/">
                <h1 className={style.title}>Movies</h1>
            </Link>
         
        </header>    

        <main>
            <Switch>

                <Route exact path="/">
                    <LandingPage/>
                </Route>         
                
                <Route exact path="/movies/:moviesId">
                    <MovieDetails/>
                </Route>
                

          
            </Switch>
        </main>
        
 </Router>
 )
}