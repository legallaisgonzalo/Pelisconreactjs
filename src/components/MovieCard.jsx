import { Link } from "react-router-dom";
import { getMovieimg } from "../util/getMovieimg";
import style from "./MovieCard.module.css";


export function MovieCard({movie}){
    const imageUrl = getMovieimg(movie.poster_path, 300)
    // const imageUrl = movie.poster_path ? "https://image.tmdb.org/t/p/w300" + movie.poster_path
    // : placeholder; ESTO ES LO MISMO QUE ARRIBA 
    return ( 
            <li className={style.movieCard}>
                <Link to={"/movies/" + movie.id}>
                <img
                    width={230}
                    height={345}
                    className={StyleSheet.movieImage}
                    src={imageUrl}
                    alt={movie.title}
                />
                <div>{movie.title}</div>
                </Link>
            </li>
    );
}