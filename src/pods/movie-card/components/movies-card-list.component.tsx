import * as React from "react"
import { MovieEntity } from "../view-Model";
import { MovieCard } from "./movie-card-component";

interface Props {
    movieList: MovieEntity[];
}
const MovieCardListInner = (props:Props) => {
  return ( 
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
  )
}

interface State {
  movieList: MovieEntity[];
}

export class MovieCardList extends React.Component<{}, State> {

  constructor(props) {
    super(props);

    this.state = {
      movieList: []
    }
  }

  componentDidMount() {
    setTimeout(() => {
      const movieList: MovieEntity[] = [
        { id: 0, title: 'Star wars', genre: 'fantasia', ageRating: 16, year: 1989,
         synopsis:'Star Wars is an American epic space opera franchise, created by George Lucas and centered around a film series that began with the eponymous 1977 movie. The saga quickly became a worldwide pop culture phenomenon.',
         posterUrl:'https://timedotcom.files.wordpress.com/2017/05/star-wars_1024.jpg' },
        { id: 1, title: 'Black Panther', genre: 'accion', ageRating: 18, year: 2017 , 
          synopsis:'After the death of his father, TChalla returns home to the African nation of Wakanda to take his rightful place as king. When a powerful enemy suddenly reappears, TChallas mettle as king -- and as Black Panther -- gets tested when he is drawn into a conflict that puts the fate of Wakanda and the entire world at risk.',
          posterUrl:'http://www.gstatic.com/tv/thumb/v22vodart/12878741/p12878741_v_v8_ac.jpg'},
        { id: 2, title: 'Señor de los anillos', genre: 'fantasia', ageRating: 18, year: 1989, 
          synopsis:'The future of civilization rests in the fate of the One Ring, which has been lost for centuries. Powerful forces are unrelenting in their search for it. But fate has placed it in the hands of a young Hobbit named Frodo Baggins (Elijah Wood), who inherits the Ring and steps into legend.', 
          posterUrl:'http://www.gstatic.com/tv/thumb/v22vodart/28828/p28828_v_v8_bg.jpg' },
        { id: 3, title: 'It', genre: 'terror', ageRating: 18, year: 1989 ,
          synopsis:'Seven young outcasts in Derry, Maine, are about to face their worst nightmare an ancient, shape-shifting evil that emerges from the sewer every 27 years to prey on the towns children. Banding together over the course of one horrifying summer, the friends must overcome their own personal fears to battle the murderous, bloodthirsty clow.',
          posterUrl:'http://www.gstatic.com/tv/thumb/v22vodart/13610713/p13610713_v_v8_ac.jpg'},
        { id: 4, title: 'Hobbit', genre: 'fantasia', ageRating: 8, year: 1989, 
          synopsis:'Bilbo Baggins (Martin Freeman) lives a simple life with his fellow hobbits in the shire, until the wizard Gandalf (Ian McKellen) arrives and convinces him to join a group of dwarves on a quest to reclaim the kingdom of Erebor. The journey takes Bilbo on a path through treacherous lands swarming with orcs, goblins and other dangers.', 
          posterUrl:'http://www.gstatic.com/tv/thumb/v22vodart/8992211/p8992211_v_v8_ah.jpg' },
        { id: 5, title: 'La torre oscura', genre: 'fantasia', ageRating: 10, year: 1989 , 
          synopsis:'Roland Deschain (Idris Elba), the last Gunslinger, is locked in an eternal battle with Walter ODim (Matthew McConaughey), also known as the Man in Black. The Gunslinger must prevent the Man in Black from toppling the Dark Tower, the key that holds the universe together. With the fate of worlds at stake, two men collide in the ultimate battle between good and evil.', 
          posterUrl:'http://www.gstatic.com/tv/thumb/v22vodart/12676586/p12676586_v_v8_ar.jpg'},
        { id: 6, title: 'Una rubia muy legal', genre: 'comedy', ageRating: 18, year: 1989 , 
          synopsis:'Elle Woods (Reese Witherspoon) has it all. She wants nothing more than to be Mrs. Warner Huntington III. But there is one thing stopping him (Matthew Davis) from proposing: She is too blond. Elle rallies all of her resources and gets into Harvard, determined to win him back.',
          posterUrl:'http://www.gstatic.com/tv/thumb/v22vodart/28004/p28004_v_v8_ac.jpg'},
        { id: 7, title: 'Grid movie', genre: 'chusta', ageRating: 18, year: 1989, 
          synopsis:'High-school student Bella Swan (Kristen Stewart), always a bit of a misfit, doesnt expect life to change much when she moves from sunny Arizona to rainy Washington state. Then she meets Edward Cullen (Robert Pattinson), a handsome but mysterious teen whose eyes seem to peer directly into her soul. Edward is a vampire whose family does not drink blood, and Bella, far from being frightened, enters into a dangerous romance with her immortal soulmate.', 
          posterUrl:'https://is3-ssl.mzstatic.com/image/thumb/Video/3a/f4/d0/mzl.cjjgkkpp.jpg/268x0w.jpg' },
      ];
      this.setState({ movieList });
    }, 500);
  }

  render() {
    return (
      <MovieCardListInner  movieList={this.state.movieList}/>
    )
  }
}
  


  