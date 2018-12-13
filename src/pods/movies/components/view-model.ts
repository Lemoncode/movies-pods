import { FieldValidationResult } from 'lc-form-validation';

export interface MovieEntity {
    id: number;
    title: string;
    genre: string;
    age_rating: number;
    year: number;
}

export interface MovieFilter {
    title: string;
    genre: string;
    year: string;
}

export interface GenreEntity {
    id: string;
    desc: string;
}

export interface LoginFormErrors {
  year: FieldValidationResult;
}

export const createDefaultLoginFormErrors = (): LoginFormErrors => ({
  year: new FieldValidationResult(),
});