import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { get } from "../util/httpClient";
import style from "./MovieDetails.module.css";
import movie from '../pages/movie.json'
import { Spinner } from "../components/Spinner";
import {getMovieimg} from "../util/getMovieimg";
let data = movie; //esto tambien faltaba pasarle los datos

export function MovieDetails() {
  

    const {moviesId} = useParams();
    const [movie,setMovie] = useState(data);
    const [isLoading, setIsLoading] = useState(true);

    
    
    useEffect(() => {
        setIsLoading(true);
        get ("/movie/"+ moviesId).then(data => {
            setIsLoading(false);
            setMovie(data); 
        }); 
    },[moviesId]);     

    if (isLoading){
        return <div> <Spinner/> </div>
    }


    const imageUrl = getMovieimg(movie.poster_path, 500);
    return (
            <div className={style.detailsContainer}> 
                    
                    <img 
                        className={style.col+ " " + style.movieImage } 
                        src={imageUrl} 
                        alt={movie.title} 
                    />
                
                
                    <div className={style.col + " " + style.movieDetails}>
                    <p className={style.firstItem}>
                        
                         <strong>Title:</strong>  {movie.title}
                         
                    </p>
                    <p> 
                        
                        <strong> Description:</strong>  {movie.overview}
                    
                    </p>
                    <p>
                         <strong>Genero:</strong>{" "} {movie?.genres.map((genre) => genre.name).join(" ,")}
                    </p>
                </div>
            
            </div>
    )
}