import { mapFromMovieApiToMovieViewModel } from "./movie-details.mapper";
import { MovieEntity } from "../../api/model";

describe('pods/movie-details.mapper', () => {
    it('should return default movie if movie parameter is undefined', () => {
        //Arrange

        //Act
        const returnedMovie = mapFromMovieApiToMovieViewModel(undefined);
        //Assert
        expect(returnedMovie.id).toEqual(0);
        expect(returnedMovie.genre).toEqual('');
        expect(returnedMovie.ageRating).toEqual(0);
        expect(returnedMovie.posterUrl).toEqual('');
        expect(returnedMovie.synopsis).toEqual('');
        expect(returnedMovie.title).toEqual('');
        expect(returnedMovie.year).toEqual(0);

    }),
        it('should return a valid vm movie given an api movieEntity parameter', () => {
            //Arrange
            const movie: MovieEntity = {
                id: '1',
                agerating: [7, 11],
                genres: ['drama', 'comedy'],
                poster: 'poster',
                synopsis: 'synopsis',
                title: 'title',
                year: 2000
            }
            //Act
            const returnedMovie = mapFromMovieApiToMovieViewModel(movie);
            //Assert

            expect(returnedMovie.id).toEqual(1);
            expect(returnedMovie.genre).toEqual('drama');
            expect(returnedMovie.ageRating).toEqual(7);
            expect(returnedMovie.posterUrl).toEqual('poster');
            expect(returnedMovie.synopsis).toEqual('synopsis');
            expect(returnedMovie.title).toEqual('title');
            expect(returnedMovie.year).toEqual(2000);

        });
    it('should return a valid vm movie given an api movieEntity with corrupt genres parameter', () => {
        //Arrange
        const movie: MovieEntity = {
            id: '1',
            agerating: [7, 11],
            genres: [],
            poster: 'poster',
            synopsis: 'synopsis',
            title: 'title',
            year: 2000
        }
        //Act
        const returnedMovie = mapFromMovieApiToMovieViewModel(movie);
        //Assert

        expect(returnedMovie.id).toEqual(1);
        expect(returnedMovie.genre).toEqual('');
        expect(returnedMovie.ageRating).toEqual(7);
        expect(returnedMovie.posterUrl).toEqual('poster');
        expect(returnedMovie.synopsis).toEqual('synopsis');
        expect(returnedMovie.title).toEqual('title');
        expect(returnedMovie.year).toEqual(2000);
    });
    it('should return a valid vm movie given an api movieEntity with corrupt agerating parameter', () => {
        //Arrange
        const movie: MovieEntity = {
            id: '1',
            agerating: [],
            genres: ['drama', 'comedy'],
            poster: 'poster',
            synopsis: 'synopsis',
            title: 'title',
            year: 2000
        }
        //Act
        const returnedMovie = mapFromMovieApiToMovieViewModel(movie);
        //Assert

        expect(returnedMovie.id).toEqual(1);
        expect(returnedMovie.genre).toEqual('drama');
        expect(returnedMovie.ageRating).toEqual(0);
        expect(returnedMovie.posterUrl).toEqual('poster');
        expect(returnedMovie.synopsis).toEqual('synopsis');
        expect(returnedMovie.title).toEqual('title');
        expect(returnedMovie.year).toEqual(2000);
    });
    it('should return a valid vm movie given an api movieEntity with corrupt id parameter', () => {
        //Arrange
        const movie: MovieEntity = {
            id: '',
            agerating: [7, 11],
            genres: ['drama', 'comedy'],
            poster: 'poster',
            synopsis: 'synopsis',
            title: 'title',
            year: 2000
        }
        //Act
        const returnedMovie = mapFromMovieApiToMovieViewModel(movie);
        //Assert

        expect(returnedMovie.id).toEqual(NaN);
        expect(returnedMovie.genre).toEqual('drama');
        expect(returnedMovie.ageRating).toEqual(7);
        expect(returnedMovie.posterUrl).toEqual('poster');
        expect(returnedMovie.synopsis).toEqual('synopsis');
        expect(returnedMovie.title).toEqual('title');
        expect(returnedMovie.year).toEqual(2000);
    });
    it('should return a valid vm movie given an api movieEntity with null year parameter', () => {
        //Arrange
        const movie: MovieEntity = {
            id: '1',
            agerating: [7, 11],
            genres: ['drama', 'comedy'],
            poster: 'poster',
            synopsis: 'synopsis',
            title: 'title',
            year: null
        }
        //Act
        const returnedMovie = mapFromMovieApiToMovieViewModel(movie);
        //Assert

        expect(returnedMovie.id).toEqual(1);
        expect(returnedMovie.genre).toEqual('drama');
        expect(returnedMovie.ageRating).toEqual(7);
        expect(returnedMovie.posterUrl).toEqual('poster');
        expect(returnedMovie.synopsis).toEqual('synopsis');
        expect(returnedMovie.title).toEqual('title');
        expect(returnedMovie.year).toEqual(null);
    });

    it('should return a valid vm movie given an api movieEntity with any string parameter as null', () => {
        //Arrange
        const movie: MovieEntity = {
            id: '1',
            agerating: [7, 11],
            genres: ['drama', 'comedy'],
            poster: null,
            synopsis: 'synopsis',
            title: 'title',
            year: 2000
        }
        //Act
        const returnedMovie = mapFromMovieApiToMovieViewModel(movie);
        //Assert

        expect(returnedMovie.id).toEqual(1);
        expect(returnedMovie.genre).toEqual('drama');
        expect(returnedMovie.ageRating).toEqual(7);
        expect(returnedMovie.posterUrl).toEqual('poster');
        expect(returnedMovie.synopsis).toEqual('synopsis');
        expect(returnedMovie.title).toEqual('title');
        expect(returnedMovie.year).toEqual(2000);
    });
}
)