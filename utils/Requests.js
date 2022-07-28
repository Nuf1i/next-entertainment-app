const TDMB = "https://api.themoviedb.org/3";

export const MoviesType = {
    TrendingDay: `${TDMB}/trending/all/day?api_key=${process.env.API_KEY}`,
    TrendingWeek: `${TDMB}/trending/movie/week?api_key=${process.env.API_KEY}`,
    TopRated: `${TDMB}/movie/top_rated?api_key=${process.env.API_KEY}`,
    ActionMovies: `${TDMB}/discover/movie?api_key=${process.env.API_KEY}&with_genres=28`,
    ComedyMovies: `${TDMB}/discover/movie?api_key=${process.env.API_KEY}&with_genres=35`,
    HorrorMovies: `${TDMB}/discover/movie?api_key=${process.env.API_KEY}&with_genres=27`,
    RomanceMovies: `${TDMB}/discover/movie?api_key=${process.env.API_KEY}&with_genres=10749`,
    DocumentraiesMovies: `${TDMB}/discover/movie?api_key=${process.env.API_KEY}&with_genres=99`,
}

export const TvType = {
    NetflixOriginals: `${TDMB}/tv/popular?api_key=${process.env.API_KEY}&language=en-US`,
    TvToday: `${TDMB}/tv/airing_today?api_key=${process.env.API_KEY}&language=en-US`,
}

export const Genres = {
    Movies: `${TDMB}/genre/movie/list?api_key=${process.env.API_KEY}&language=en-US`,
    Tv: `${TDMB}/genre/tv/list?api_key=${process.env.API_KEY}&language=en-US`,
}

export const Search = {
    Movies: `${TDMB}/search/movie?api_key=${process.env.API_KEY}&language=en-US&page=1&query=`,
    Tv: `${TDMB}/search/tv?api_key=${process.env.API_KEY}&language=en-US&page=1&query=`,
}

export function GetMediaGenre(media , id) {
    let Genre = media?.genres?.find(type => type.id === id);
    return (Genre?.name);
}

export const BASE = `https://image.tmdb.org/t/p/original`;

export const trendingAllDay = 'trending/all/day'
export const trendingAllWeek = 'trending/all/week'
export const trendingMovieDay = 'trending/movie/day'
export const trendingMovieWeek = 'trending/movie/week'
export const trendingTvDay = 'trending/tv/day'
export const trendingTvWeek = 'trending/tv/week'

// Movie
export const moviePopular = 'movie/popular'
export const movieNowPlaying = 'movie/now_playing'
export const movieUpcoming = 'movie/upcoming'
export const movieTopRated = 'movie/top_rated'
export const movieLatest = 'movie/latest'

// TV
export const tvPopular = 'tv/popular'
export const tvAiringToday = 'tv/airing_today'
export const tvOnTheAir = 'tv/on_the_air'
export const tvTopRated = 'tv/top_rated'


export default MoviesType;