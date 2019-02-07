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