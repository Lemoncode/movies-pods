import { filterReducer } from "./filter";

describe('moveies/reducer/filterReducer tests', () => {
    it('should return initial state when passing undefined state and some action type', () => {
        // Arrange
        const state = undefined;
        const action = { type: 'some type' };

        // Act
        const nextState = filterReducer(state, action);

        // Assert
        expect(nextState.title).toEqual('');
        expect(nextState.genere).toEqual('');
        expect(nextState.year).toBeNull();
    });
})  