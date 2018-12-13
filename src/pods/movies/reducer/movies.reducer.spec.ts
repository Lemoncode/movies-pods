import { moviesReducer } from './movies.reducer';
import { actionsEnums } from '../../../common-app/actions';
const deepFreeze = require('deep-freeze'); 

describe('movies/reducers/moviesReducer tests', () => {
    it(`should return empty movie collection when passing undefined state and some action type`, () => {
        //Arrange
        const state = undefined;
        const action = { type: 'some type' };

        //Act
        const nextState = moviesReducer(state, action);

        //Assert
        expect(nextState.length).toEqual(0);
   
    });

    it(`should return updated state without mutate it when passing state, MOVIES_REQUEST_COMPLETED
    action type and payload with several movies`, () => {
        //Arrange
        const state = new Array({ageRating:12,genre:'terror',poster:'poster',synopsis:'synopsis',title:'movie title',year:123},
                                    {ageRating:13,genre:'sci',poster:'poster',synopsis:'synopsis2',title:'movie title2',year:124});
        const action = {
            type: actionsEnums.MOVIES_REQUEST,
            payload: {state}
            };
        deepFreeze(state);

        //Act
        const nextState = moviesReducer(state, action);

        // Assert
        expect(nextState).toEqual(state);
    });
})