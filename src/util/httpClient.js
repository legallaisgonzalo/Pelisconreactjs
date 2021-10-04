const API = "https://api.themoviedb.org/3";
export function get(path) {
    return fetch(API + path,{
        headers:{
            Authorization:
             "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOTNiMzU2MWFkNzQ5ZTQ3ZTVkZmFlOTc3MDYzMjNjMyIsInN1YiI6IjYxNTEyZWQ1MWM2MzViMDA4ZjdhMDdiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DBXacmajiohIt7Pg7nWemLN_i56xCGn_2LQ1Oi4-6SU",
            "Content-type":"application/json;charset=utf-8",
        }, 
    }).then((result) => result.json());
}