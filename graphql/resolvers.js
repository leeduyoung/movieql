import {people, getById, getMovieById, getMovies} from '../db/db';

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
        person: (_, { id }) => getById(id),
        people: () => people,
        movies: getMovies,
        movie: (_, { id }) => getMovieById(id),
    },
    Mutation: {
        addMovie: (_, {name, score}) => {
            
        }
    }
}

export default resolvers;