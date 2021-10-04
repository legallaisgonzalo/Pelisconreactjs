import placeholder from "../components/placeholder.png"

export function getMovieimg(path, width){
    return path
     ? `https://image.tmdb.org/t/p/w${width}${path}`
    : placeholder;
}