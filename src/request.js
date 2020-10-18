const API_KEY ="36d47371423c28e10a8a747f7e67825f";
const request = {

    fetchTrending :`/trending/all/day?api_key=${API_KEY}`,
    fetchNetflixOriginal:`discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchToprated : `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchActionMovies:`discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentries:`discover/movie?api_key=${API_KEY}&with_genres=99`,

}
export default request;