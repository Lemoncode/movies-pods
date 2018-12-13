import { calculateUrlStringByOptions } from "./movie-api.business";
import { Options, createDefaultOpions } from "./movies-api";
import { settings } from "../common-app";

const moviesUrl = 'http://localhost:3000';

describe(`default value is sent when options is null`, () => {
    it(`should send default values`, () => {
        //ARRANGE
        let options: Options = undefined;
        let expectedUrl = `${moviesUrl}/api/films?_page=1&_limit=${settings.pageSize}`;
        //ACT
        let url = calculateUrlStringByOptions(options, moviesUrl);
        //ASSERT
        expect(url).toEqual(expectedUrl);
    }),
        it(`should send query to call api filter by genre`, () => {
            //ARRANGE
            let options: Options = createDefaultOpions();
            options.filter = {
                title: "",
                genre: "Drama",
                year: "",
            }
            let expectedUrl = `${moviesUrl}/api/films?_page=1&_limit=${settings.pageSize}&genres_like=Drama`;
            //ACT
            let url = calculateUrlStringByOptions(options, moviesUrl);
            //ASSERT
            expect(url).toEqual(expectedUrl);
        }),
        it(`should send query to call api filter by title`, () => {
            //ARRANGE
            let options: Options = createDefaultOpions();
            options.filter = {
                title: "Title",
                genre: "",
                year: "",
            }
            let expectedUrl = `${moviesUrl}/api/films?_page=1&_limit=${settings.pageSize}&title_like=Title`;
            //ACT
            let url = calculateUrlStringByOptions(options, moviesUrl);
            //ASSERT
            expect(url).toEqual(expectedUrl);
        }),
        it(`should send query to call api filter by year`, () => {
            //ARRANGE
            let options: Options = createDefaultOpions();
            options.filter = {
                title: "",
                genre: "",
                year: "2018",
            }
            let expectedUrl = `${moviesUrl}/api/films?_page=1&_limit=${settings.pageSize}&year=2018`;
            //ACT
            let url = calculateUrlStringByOptions(options, moviesUrl);
            //ASSERT
            expect(url).toEqual(expectedUrl);
        }),
        it(`should send query to call api filter by complete filter`, () => {
            //ARRANGE
            let options: Options = createDefaultOpions();
            options.filter = {
                title: "Title",
                genre: "Drama",
                year: "2018",
            }
            let expectedUrl = `${moviesUrl}/api/films?_page=1&_limit=${settings.pageSize}&genres_like=Drama&title_like=Title&year=2018`;
            //ACT
            let url = calculateUrlStringByOptions(options, moviesUrl);
            //ASSERT
            expect(url).toEqual(expectedUrl);
        })


})