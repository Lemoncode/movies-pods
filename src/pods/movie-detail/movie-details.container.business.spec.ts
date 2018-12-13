import { getMovieId } from "./movie-details.container.business";

describe('pods/movie-details.business', () => {
    it('should return movieId given a valid url', () => {
        //Arrange
        const url = '/movie-detail/2';
        //Act
        const movieId = getMovieId(url)
        //Assert
        expect(movieId).toEqual(2);

    });
    it('should return movieId given a invalid url', () => {
        //Arrange
        const url = '/movie-detail/';
        //Act
        const movieId = getMovieId(url)
        //Assert
        expect(movieId).toEqual(0);
    });
});
