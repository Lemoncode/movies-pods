import * as MovieEntity from "./viewModel";
import * as MovieEntityApi from "../../api/model/movie";
import { mapFromMovieApiToMovieViewModel } from "./mapper";

describe(`mapper can map movie from api to page`, () => {
    it(`should return null if data is undefined`, () => {
        //ARRANGE
        let movieEntityApi: MovieEntityApi.MovieEntity = undefined;
        //ACT
        let movie = mapFromMovieApiToMovieViewModel(movieEntityApi);
        //ASSERT
        expect(undefined).toEqual(movie);
    }),
        it(`should return null if data is undefined`, () => {
            //ARRANGE
            let movieEntityApi: MovieEntityApi.MovieEntity = {
                id: "1",
                poster: "poster.jpg",
                title: 'peli titulo',
                genres: ['chusta','prueba'],
                agerating: [5],
                year: 1989,
                synopsis: 'synopsis',
            }
            let movie: MovieEntity.MovieEntity = {
                id: "1",
                title: 'peli titulo',
                genre: 'chusta',
                age_rating: 5,
                year: 1989,
            }
            //ACT
            let movieMapped = mapFromMovieApiToMovieViewModel(movieEntityApi);
            //ASSERT
            expect(movie).toEqual(movieMapped);
        })
})