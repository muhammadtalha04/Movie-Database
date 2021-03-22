import React, { Fragment, useRef } from 'react';
import { FILTERS, GENRES, KEYWORDS, KEYWORDS_PLACEHOLDER } from '../../headings';
import { useFetch } from '../../hooks/useFetch';
import Text from '../Text/Text';
import { Input, List, ListItem } from './Style';

interface FiltersProps {
    value: string;
    filterByKeyword: any;
}

interface Genre {
    id: number;
    name: string;
}

const Filters: React.FC<FiltersProps> = ({ value, filterByKeyword }) => {
    const genres: JSX.Element[] = [<ListItem key={-1}>{'All'}</ListItem>];
    const { data, loading } = useFetch('https://api.themoviedb.org/3/genre/movie/list?api_key=fdbbfa83e802c6dea2c8b45d2df9ee9c&language=en-US', 'json');
    const inpRef = useRef<HTMLInputElement>(null);

    const handleChange = () => {
        filterByKeyword(inpRef.current?.value);
    }

    (() => {
        let genresObj: Genre[] = loading ? [] : data!['genres'];
        genresObj.forEach(genre => {
            genres.push(<ListItem key={genre['id']}>{genre['name']}</ListItem>);
        });
    })();

    return (
        <Fragment>
            <Text fontSize={13} weight={"600"} text={FILTERS} />

            <hr />

            <Text fontSize={11} weight={"normal"} text={KEYWORDS} subheading={true} />
            <Input type="text" ref={inpRef} value={value} onChange={handleChange} placeholder={KEYWORDS_PLACEHOLDER} />

            <hr />

            <Text fontSize={11} weight={"normal"} text={GENRES} subheading={true} />
            <List>
                {genres}
            </List>
        </Fragment>
    )
}

export default Filters;