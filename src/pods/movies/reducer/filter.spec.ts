import { filterReducer } from "./filter";
import { MovieFilter } from "../viewModel";
const deepFreeze = require("deep-freeze");
import { actionsEnums } from "../../../common-app/actions";

describe('movies/reducer/filterReducer tests', () => {
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

    it('should return same state without mutate it when passing state and some action type', () => {
        // Arrange
        const state: MovieFilter = {
            title: 'test title',
            genere: 'test genere',
            year: 1900,
        };

        const action = { type: 'some type' };
        deepFreeze(state);

        // Act
        const nextState = filterReducer(state, action);

        // Assert
        expect(nextState.title).toEqual('test title');
        expect(nextState.genere).toEqual('test genere');
        expect(nextState.year).toEqual(1900);
    });

    it(`should return updated state without mutate it
    when passing state, FILTER_FULL_UPDATE action type and login field payload`, () => {
            // Arrange
            const state: MovieFilter = {
                title: 'test title',
                genere: 'test genere',
                year: 1900,
            };

            const action = {
                type: actionsEnums.FILTER_FULL_UPDATE,
                payload: {
                    title: 'different title',
                    genere: 'test genere',
                    year: 1900,
                } as MovieFilter,
            };

            deepFreeze(state);

            // Act
            const nextState = filterReducer(state, action);

            // Assert
            expect(nextState.title).toEqual('different title');
            expect(nextState.genere).toEqual('test genere');
            expect(nextState.year).toEqual(1900);
        });
})  