export interface SessionInfo {
  nickname: string;
  room: string;
};

export interface State {
  sessionInfo: SessionInfo;
};

export interface MovieEntity {
  poster : string;
  title : string;
  genre : string;
  ageRating : number;
  year : number;
  synopsis : string;
}