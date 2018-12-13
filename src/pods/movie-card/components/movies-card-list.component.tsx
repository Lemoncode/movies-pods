import * as React from "react"
import { MovieEntity } from "../view-Model";
import { MovieCard } from "./movie-card-component";


interface Props {
    movieList: MovieEntity[];
}

export const MovieCardList = (props:Props) => 
    <div style={
      {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
      }}>
      {
        props.movieList.map(
          (movie) =>
            <MovieCard movie={movie} />
        )
      }
    </div>

  


  