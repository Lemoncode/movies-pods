import { actionsEnums } from "../../../common-app/actions";
import {MovieFilter} from './model';
import { combineReducers } from "redux";

type FilterState = MovieFilter;

const createDefaultState = (): FilterState => ({
    title: '',
    genre: '',
    year: null,
});

export const filterReducer = (state = createDefaultState(), action) => {
    switch (action.type) {
        case actionsEnums.FILTER_FULL_UPDATE:
            return handleUpdateFilters(state, action.payload);
    }
    
    return state;
}

const handleUpdateFilters = (state: FilterState, payload: MovieFilter): FilterState => {
    return payload;
}




  
