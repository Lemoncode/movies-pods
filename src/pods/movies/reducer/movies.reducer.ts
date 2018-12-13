import { MovieEntity } from "../../../core/store/model";
import { actionsEnums, BaseAction } from "../../../common-app/actions";

export type movieCollection =  MovieEntity[];

export const moviesReducer = (state:movieCollection = [], action:BaseAction) => {
    switch (action.type) {
      case actionsEnums.MOVIES_REQUEST_COMPLETED:
        return handleMovieRequestCompletedAction(state);
    }
  
    return state;
};

const handleMovieRequestCompletedAction = (state:movieCollection) => (
  state
);
  