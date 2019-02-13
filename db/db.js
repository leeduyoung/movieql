import fetch from "node-fetch";

export const people =
[
    {
        id: 1,
        name: "Nicolas 1",
        age: 18,
        gender: "female"
    },
    {
        id: 2,
        name: "Nicolas 2",
        age: 18,
        gender: "female"
    },
    {
        id: 3,
        name: "Nicolas 3",
        age: 18,
        gender: "female"
    },
    {
        id: 4,
        name: "Nicolas 4",
        age: 18,
        gender: "female"
    },
    {
        id: 5,
        name: "Nicolas 5",
        age: 18,
        gender: "female"
    }                
];

export let movies = [
    {
        id: 1,
        name: "Star Wars - The new one",
        score: 0.1
    },
    {
        id: 2,
        name: "Avengers - The new one",
        score: 8
    },
    {
        id: 3,
        name: "The Godfather I",
        score: 99
    },
    {
        id: 4,
        name: "Metrix - The new one",
        score: 100
    },
    {
        id: 5,
        name: "Star is born - The new one",
        score: 33
    }
];

export const getById = id => {
    const filteredPeople = people.filter(person => person.id === id);
    return filteredPeople[0];
}

// movie api
export const getMovies = () => movies;

export const getMovieById = id =>
{
    const filteredMovies = movies.filter(movie => movie.id === id);
    return filteredMovies[0];
}

export const deleteMovie = id =>
{
    const cleanedMovies = movies.filter(movie => movie.id !== id);
    if (movies.length > cleanedMovies.length)
    {
        movies = cleanedMovies;
        return true;
    }
    else
        return false;
}

export const addMovie = (name, score) =>
{
    const newMovie =
    {
        id: movies.length + 1,
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
}

// GraphQL과 외부 api를 통합하고 싶을때 예시
const BASE_URL = "https://yts.am/api/v2/";
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json`;
const MOVIE_DETAILS_URL = `${BASE_URL}movie_details.json`;
const MOVIE_SUGGESTIONS_URL = `${BASE_URL}movie_suggestions.json`;
export const getApiMovies = (limit, rating) =>
{
    let requestURL = LIST_MOVIES_URL;
    if (limit && limit > 0)
        requestURL += `?limit=${limit}`;
    
    if (rating && rating > 0)
        requestURL += `&minimum_rating=${rating}`;

    return fetch(`${requestURL}`)
        .then(res => res.json())
        .then(json => json.data.movies);
}

export const getApiMovie = (id) =>
{
    let requestURL = MOVIE_DETAILS_URL;
    if (id)
        requestURL += `?movie_id=${id}`;

    return fetch(`${requestURL}`)
        .then(res => res.json())
        .then(json => json.data.movie);
}
// export const getApiMovie = async (id) =>
// {
//     let requestURL = MOVIE_DETAILS_URL;
//     console.log(id);
//     if (id)
//         requestURL += `?movie_id=${id}`;

//     return await fetch(`${'https://yts.am/api/v2/movie_details.json?movie_id=10832'}`);
// }

export const getSuggestions = (id) =>
{
    let requestURL = MOVIE_SUGGESTIONS_URL;
    if (id)
        requestURL += `?movie_id=${id}`;

    return fetch(`${requestURL}`)
        .then(res => res.json())
        .then(json => json.data.movies);
}