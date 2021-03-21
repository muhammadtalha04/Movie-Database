import React, { Fragment } from 'react';
import { useFetch } from '../../hooks/useFetch';
import Text from '../text/Text';
import { Input, List, ListItem } from './Style';

interface FiltersPops {
    value: string;
    filterByKeyword: any;
}

const Filters: React.FC<FiltersPops> = ({ value, filterByKeyword }) => {
    const genres: JSX.Element[] = [<ListItem key={-1}>{'All'}</ListItem>];
    const { data, loading } = useFetch('https://api.themoviedb.org/3/genre/movie/list?api_key=fdbbfa83e802c6dea2c8b45d2df9ee9c&language=en-US', 'json');

    function handleChange(e: any) {
        filterByKeyword(e.target.value)
    }

    (() => {
        let genresObj: any[] = loading ? [] : data!['genres'];
        genresObj.forEach(genre => {
            genres.push(<ListItem key={genre['id']}>{genre['name']}</ListItem>);
        });
    })();

    return (
        <Fragment>
            <Text fontSize={13} weight={"600"} text={"Filters"} />

            <hr />

            <Text fontSize={11} weight={"normal"} text={"Keywords"} subheading={true} />
            <Input type="text" value={value} onChange={handleChange} placeholder="Filter by keywords..." />

            <hr />

            <Text fontSize={11} weight={"normal"} text={"Genres"} subheading={true} />
            <List>
                {genres}
            </List>
        </Fragment>
    )
}

export default Filters;