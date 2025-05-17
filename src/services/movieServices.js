const key = import.meta.env.VITE_TMDB_KEY;
const baseurl='https://api.themoviedb.org/3';
console.log("key",key)
const endpoints={
    popular:`${baseurl}/movie/popular?api_key=${key}`,
    toprated:`${baseurl}/movie/top_rated?api_key=${key}`,
    trending:`${baseurl}/movie/popular?api_key=${key}`,
    upcoming:`${baseurl}/movie/upcoming?api_key=${key}&language=en-US&page=2`,
    comedy:`${baseurl}/search/movie?api_key=${key}&language=en-US&query=comedy&page=1&incluse_adult=false`
}
export function createImageUrl(filename,size){
    return `https://image.tmdb.org/t/p/${size}/${filename}`
}
export default endpoints;