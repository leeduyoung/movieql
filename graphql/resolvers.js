import * as db from '../db/db';

const nicolas = 
{
    name: "Nicolas",
    age: 18,
    gender: "female"
}

// Query를 resolve하는 역할 
const resolvers =
{
    Query: {
        name: () => "mango",
        // person: (_, args) => getById(args.id),
        person: (_, { id }) => db.getById(id),
        people: () => db.people,
        
        movies: db.getMovies,
        movie: (_, { id }) => db.getMovieById(id),

        getApiMovies: (_, {limit, rating}) => db.getApiMovies(limit, rating),
        getApiMovie: (_, { id }) => db.getApiMovie(id),
        getSuggestions: (_, { id }) => db.getSuggestions(id)
    },
    Mutation: {
        addMovie: (_, {name, score}) => db.addMovie(name, score),
        deleteMovie: (_, {id}) => db.deleteMovie(id)
    }
}

export default resolvers;