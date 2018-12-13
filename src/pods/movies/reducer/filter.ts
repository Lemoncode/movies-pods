import { actionsEnums } from "../../../common-app/actions";
import {MovieFilter} from './model';


type FilterState = MovieFilter;

const createDefaultState = (): FilterState => ({
    title: '',
    genere: '',
    year: null,
});

export const filterReducer = (state = createDefaultState(), action) => { 
    
    switch (action.type) {
        case actionsEnums.FILTER_REQUEST_COMPLETED:
            return handleUpdateFilters(state, action.payload);
    }
    
    return state;
}

const handleUpdateFilters = (state: FilterState, payload: MovieFilter): FilterState => {
    if (state.genere !== payload.genere){
        return {...state, genere: payload.genere};
    }else if(state.title !== payload.title){
        return {...state, title: payload.title};
    }else if(state.year !== payload.year){
        return {...state, year: payload.year};
    }
    
    return state;
}