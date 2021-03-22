import React, { Fragment, useState } from 'react'
import { useFetch } from '../../hooks/useFetch';
import { Movie } from '../../types';
import { parseMovie } from '../../utils';
import Card from '../Card/Card';
import { ListItem } from '../Filters/Style';

// {
//     adult: false,
//     backdrop_path: "/hJuDvwzS0SPlsE6MNFOpznQltDZ.jpg",
//     genre_ids: [
//         16,
//         12,
//         14,
//         10751,
//         28
//     ],
//     id: 527774,
//     original_language: "en",
//     original_title: "Raya and the Last Dragon",
//     overview: "Long ago, in the fantasy world of Kumandra, humans and dragons lived together in harmony. But when an evil force threatened the land, the dragons sacrificed themselves to save humanity. Now, 500 years later, that same evil has returned and it’s up to a lone warrior, Raya, to track down the legendary last dragon to restore the fractured land and its divided people.",
//     popularity: 3673.696,
//     poster_path: "/lPsD10PP4rgUGiGR4CCXA6iY0QQ.jpg",
//     release_date: "2021-03-03",
//     title: "Raya and the Last Dragon",
//     video: false,
//     vote_average: 8.5,
//     vote_count: 1310,
// }

interface PanelProps {
    filterKeyword: string;
}

const displayRecords = (movies: Movie[], cards: JSX.Element[], filterKeyword: string) => {
    movies.forEach((m: object) => {
        const movie: Movie = parseMovie(m);

        if (movie['title'].toLowerCase().indexOf(filterKeyword.toLowerCase()) === -1) {
            return null;
        }

        cards.push(<Card key={movie['id']} movie={movie} />);
    })

    return cards;
};

export const Panel: React.FC<PanelProps> = ({ filterKeyword }) => {
    let cards: JSX.Element[] = [];
    const [pageNum, setPageNum] = useState(1);
    const { data, loading } = useFetch(`https://api.themoviedb.org/3/discover/movie?api_key=fdbbfa83e802c6dea2c8b45d2df9ee9c&language=en-US&sort_by=popularity.desc&page=${pageNum}`, "json");
    const movies: Movie[] = (!loading) ? data!['results'] : [];

    const handleNextClick = () => setPageNum(pageNum + 1);
    const handlePreviousClick = () => setPageNum(pageNum - 1);

    const PrevButton = (pageNum !== 1 && <ListItem as="button" onClick={handlePreviousClick} fontSize={"1.3"}>Previous</ListItem>)

    return (
        <Fragment>
            <div className="row">
                {displayRecords(movies, cards, filterKeyword)}
            </div>
            <div className="text-center">
                {PrevButton}
                <ListItem as="button" onClick={handleNextClick} fontSize={"1.3"}>Next</ListItem>
            </div>
        </Fragment>
    );
}