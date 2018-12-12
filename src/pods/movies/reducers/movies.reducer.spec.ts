//import { loginReducer, LoginState } from './login';
//import { FieldValidationResult } from "lc-form-validation";
import { moviesReducer } from './movies.reducer';
//import * as deepFreeze from 'deep-freeze';
const deepFreeze = require('deep-freeze');

describe('movies/reducers/moviesReducer tests', () => {
    it(`should return initial state when passing undefined state and some action type`, () => {
        //Arrange
        const state = undefined;
        const action = { type: 'some type' };
        //Act
        const nextState = moviesReducer(state, action);

        //Assert
        expect(nextState).toEqual('');
        expect(nextState.loginEntity.login).toEqual('');
        expect(nextState.loginEntity.password).toEqual('');
        expect(nextState.loginFormErrors.login).toEqual(new FieldValidationResult());
        expect(nextState.loginFormErrors.password).toEqual(new FieldValidationResult());
 

    });

})