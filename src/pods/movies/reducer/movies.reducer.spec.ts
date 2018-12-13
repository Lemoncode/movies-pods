import { moviesReducer } from './movies.reducer';
import { MovieEntity } from '../../../api/model';
import { actionsEnums } from '../../../common-app/actions';
//const deepFreeze = require('deep-freeze'); ??

describe('movies/reducers/moviesReducer tests', () => {
    it(`should return default movie array when passing undefined state and some action type`, () => {
        //Arrange
        const state = undefined;
        const action = { type: 'some type' };

        //Act
        const nextState = moviesReducer(state, action);

        //Assert
        expect(nextState[0].ageRating).toEqual(0);
        expect(nextState[0].genre).toEqual('');
        expect(nextState[0].poster).toEqual('');
        expect(nextState[0].synopsis).toEqual('');
        expect(nextState[0].title).toEqual('');
        expect(nextState[0].year).toEqual(0);

    });

    it(`should return updated state without mutate it when passing state, UPDATE_LOGIN_ENTITY_FIELD
    action type and password field payload`, () => {
        //Arrange
        // Initial array
        const movie:MovieEntity = {
            ageRating:12,
            genre:'terror',
            poster:'poster',
            synopsis:'synopsis',
            title:'movie title',
            year:123
        }
        const moviesArrary = new Array();
        moviesArrary.push(moviesArrary);

        //new array
        const movie2:MovieEntity = {
            ageRating:13,
            genre:'sci',
            poster:'poster 2',
            synopsis:'synopsis 2',
            title:'movie title 2',
            year:124
        }
        moviesArrary.push(moviesArrary);


        const action = {
            type: actionsEnums.FILTER_REQUEST_COMPLETED,
            payload: {moviesArrary}
            };
            
        //Act
        const nextState = moviesReducer(moviesArrary, action);

        // Assert
        expect(nextState.length).toEqual(2);
    })
            

})