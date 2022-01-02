/*
APIKEY = af0401784bab2b8f239f956c3e183e6a
API_REQUEST = https://api.themoviedb.org/3/movie/550?api_key=af0401784bab2b8f239f956c3e183e6a
API_ACCESS_TOKENS = eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZjA0MDE3ODRiYWIyYjhmMjM5Zjk1NmMzZTE4M2U2YSIsInN1YiI6IjYxYzE3ZGEyZWZkM2MyMDAxYzJhZGZlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ftgpOitqfsG04ibeD_kA6OUzmbu-PvKdULq3B2i4ZJc
*/

const API_KEY = "af0401784bab2b8f239f956c3e183e6a"; //here x  needs to be filled by the api token we got from firebase

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=123`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`

}
export default requests;