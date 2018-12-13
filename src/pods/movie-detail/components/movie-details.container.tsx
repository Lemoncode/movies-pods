import * as React from "react";
import { movieDetailsVM } from "../movie-detail.vm";
import { MovieDetails } from "./movie-details.component";

export class MovieDetailsContainer extends React.Component<{}, {}> {

    synopsis = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur urna purus, bibendum in tincidunt vitae, efficitur id mi. Duis accumsan lectus sit amet ornare gravida. Vestibulum aliquet est ultrices tincidunt viverra. In at orci sed lectus dignissim fermentum. Phasellus aliquet turpis imperdiet justo ultrices auctor. Mauris tincidunt ipsum ut maximus ultrices. Nulla hendrerit pulvinar orci. Phasellus nec neque finibus, ultricies magna at, maximus lorem. Aliquam et leo vitae nulla luctus vehicula.
    
    Curabitur pulvinar tellus sed vestibulum posuere. Aenean pulvinar tellus sapien, non semper massa hendrerit sit amet. Nam vel facilisis lorem. Vivamus malesuada urna sed ultrices semper. Donec faucibus in elit et faucibus. Sed a imperdiet tortor. Sed hendrerit, erat ac mollis placerat, odio velit dictum nulla, vitae dapibus sapien erat nec est. Praesent leo lectus, elementum at dui sed, dapibus ultrices purus. Donec maximus rutrum turpis, vel fringilla sapien malesuada a. Aliquam pellentesque leo urna, nec vulputate velit accumsan porta. Sed posuere, nibh quis vehicula blandit, nunc lectus facilisis est, in porttitor felis dui id velit. Curabitur auctor, massa id dignissim suscipit, felis risus varius nunc, eu porttitor lorem nulla in diam.`

    movie: movieDetailsVM = {
        id: 1,
        ageRating: 7,
        genre: 'comedy',
        posterUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/13/Toy_Story.jpg/220px-Toy_Story.jpg',
        synopsis: this.synopsis,
        title: 'Toy Story',
        year: 1995

    }
    render() {
        return (
            <MovieDetails movie={this.movie} />
        )
    }
}