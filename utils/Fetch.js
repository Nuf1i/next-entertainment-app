import axios from "axios";
import { Search } from "./Requests";
const TDMB = "https://api.themoviedb.org/3";


export const fetchType = (api) => {
    return axios.get(api);
}

export const fetchMedia = (type, genreID, pageNumber = 1) => {
    return axios.get(`${TDMB}/discover/${type}?api_key=${process.env.API_KEY}&with_genres=${genreID}&page=${pageNumber}`);
}

export const fetchDetail = (type , id) => {
    return axios.get(`${TDMB}/${type}/${id}?api_key=${process.env.API_KEY}&language=en-US&append_to_response=credits`);
}


export const fetchSearch = async (search) => {
    const [
        MovieRes,
        TvRes,
    ] = await Promise.all(
        [
            fetchType(Search.Movies + search),
            fetchType(Search.Tv + search),
        ]
    );

    const [
        Movies,
        Tv,
    ] = await Promise.all(
        [
            MovieRes.data,
            TvRes.data,
        ]
    );

    const Result = [...Movies.results, ...Tv.results]

    return Result;
}

