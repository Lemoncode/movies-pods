import * as MovieEntity from "./viewModel";
import * as MovieEntityApi from "../../api/model/movie";
import { mapFromMovieApiToMovieViewModel, mapFromMovieCollectionVMToMovieViewModel, createDefaultMovie } from "./mapper";

describe(`mapper can map movie from api to page`, () => {
    it(`should return null if data is undefined`, () => {
        //ARRANGE
        let movieEntityApi: MovieEntityApi.MovieEntity = undefined;
        //ACT
        let movie = mapFromMovieApiToMovieViewModel(movieEntityApi);
        //ASSERT
        expect(movie).toEqual(createDefaultMovie());
    }),
        it(`should return MovieEntity object if data is valid`, () => {
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
                ageRating: 5,
                year: 1989,
            }
            //ACT
            let movieMapped = mapFromMovieApiToMovieViewModel(movieEntityApi);
            //ASSERT
            expect(movieMapped).toEqual(movie);
        }),
        it(`should return MovieEntity object if data is valid but genres empty`, () => {
            //ARRANGE
            let movieEntityApi: MovieEntityApi.MovieEntity = {
                id: "1",
                poster: "poster.jpg",
                title: 'peli titulo',
                genres: [],
                agerating: [5],
                year: 1989,
                synopsis: 'synopsis',
            }
            let movie: MovieEntity.MovieEntity = {
                id: "1",
                title: 'peli titulo',
                genre: "",
                ageRating: 5,
                year: 1989,
            }
            //ACT
            let movieMapped = mapFromMovieApiToMovieViewModel(movieEntityApi);
            //ASSERT
            expect(movieMapped).toEqual(movie);
        }),
        it(`should return MovieEntity object if data is valid but genres null and agerating 0`, () => {
            //ARRANGE
            let movieEntityApi: MovieEntityApi.MovieEntity = {
                id: "1",
                poster: "poster.jpg",
                title: 'peli titulo',
                genres: null,
                agerating: [],
                year: 1989,
                synopsis: 'synopsis',
            }
            let movie: MovieEntity.MovieEntity = {
                id: "1",
                title: 'peli titulo',
                genre: "",
                ageRating: 0,
                year: 1989,
            }
            //ACT
            let movieMapped = mapFromMovieApiToMovieViewModel(movieEntityApi);
            //ASSERT
            expect(movieMapped).toEqual(movie);
        })

        it(`should return array with correct data`, () => {
            //ARRANGE
            let movieEntityApi: MovieEntityApi.MovieEntity = {
                id: "1",
                poster: "poster.jpg",
                title: 'peli titulo',
                genres: null,
                agerating: [],
                year: 1989,
                synopsis: 'synopsis',
            }

            let movieEntityApiList = [movieEntityApi, movieEntityApi, null];

            let movie: MovieEntity.MovieEntity = {
                id: "1",
                title: 'peli titulo',
                genre: "",
                ageRating: 0,
                year: 1989,
            }

            let movieEntityList : Array<MovieEntity.MovieEntity> = [];
            movieEntityList.push(movie);
            movieEntityList.push(movie);
            movieEntityList.push(createDefaultMovie());
            //ACT
            let movieMappedList = mapFromMovieCollectionVMToMovieViewModel(movieEntityApiList);
            //ASSERT
            expect(movieMappedList).toEqual(movieEntityList);
        })
})