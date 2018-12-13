import { movieReducer, movieDetails } from "./move-details.reducer";
const deepFreeze = require("deep-freeze");

describe('pods/move-detail/reducers/movie-detail.reducer', () => {
    it(`should return default state (not undefined) when passing undefined state 
    and some action type`, () => {
        //Arrange
        const state = undefined;
        const action = { type: 'type' };

        //Act
        const nextState = movieReducer(state, action);

        //Assert
        expect(nextState).toBeDefined();
   
    });
    it(`should return a new state without mutating the original one,
     when passing an state and action type REQUEST_SINGLE_MOVIE_COMPLETED`, () => {
        //Arrange
        const state: movieDetails = {
            id: 1,
            title: 'test title',
            year: 2010,
            ageRating: 12,
            synopsis: 'test synopsis',
            genre: 'comedy',
            posterUrl: 'test url'
        };
        const action = { type: 'actionsEnums.REQUEST_SINGLE_MOVIE_COMPLETED' };
        deepFreeze(state);
        //Act
        const nextState = movieReducer(state, action);

        //Assert
        expect(nextState).toEqual(state);
   
    }); 
});