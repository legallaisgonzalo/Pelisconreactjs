import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useQuery } from '../hooks/useQuery';
import { get} from '../util/httpClient';
import {Empty} from './Empty';
import { MovieCard } from './MovieCard';
import style from './MoviesGrid.module.css'
import { Spinner } from './Spinner';


export function MoviesGrid({ }) {

    const [movies, setMovies] = useState([]);
    const [IsLoading, setIsLoading] = useState(true);
    const [Page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const query = useQuery();
    const search = query.get("search"); 
    

    useEffect(() =>{
        setIsLoading(true);
        const searchUrl = search 
        ? "/search/movie?query=" + search + "&page=" + Page
        : "/discover/movie?page=" + Page;
        get(searchUrl).then((data) => {
            setMovies((prevMovies) => prevMovies.concat(data.results));
            setHasMore(data.page < data.total_pages);
            setIsLoading(false);        
        });
    }, [search,Page]);

    if (!IsLoading && movies.length === 0){
        return <Empty/>
    }

    return (
        
        <InfiniteScroll
            dataLength={movies.length} //This is important field to render the next data
            next={() => setPage ((prevPage) => prevPage + 1 )}
            hasMore={hasMore} 
            loader={ <Spinner/> } 
        >

        <ul className={style.moviesGrid}>
            {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie}/>
            ))}
        </ul>
        
        </InfiniteScroll>

    );
}