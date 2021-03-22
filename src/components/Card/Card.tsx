import React from 'react';
import { Movie } from '../../types';
import { parseDate, toPercentage } from '../../utils';
import Text from '../Text/Text';
import { CardBody, CardDiv, Img, Sup, VoteContainer, VoteSpan, VoteSpanOuter } from './Style';

interface CardProps {
    movie: Movie;
}

const Card: React.FC<CardProps> = ({ movie }) => {
    const parsedReleaseDate: string = parseDate(movie.releaseDate);
    const imageSrc = `https://image.tmdb.org/t/p/w500${movie.imagePath}`;

    return (
        <CardDiv className="col-sm-2 p-0 mr-3 ml-3 mb-4">
            <Img src={imageSrc} alt={movie.title} title={movie.title} />

            <CardBody>
                <VoteContainer>
                    <VoteSpanOuter>
                        <VoteSpan>{toPercentage(movie.vote)}<Sup>%</Sup></VoteSpan>
                    </VoteSpanOuter>
                </VoteContainer>

                <Text fontSize={11} weight="700" text={movie.title} />
                <Text fontSize={11} weight="normal" text={parsedReleaseDate} />
            </CardBody>
        </CardDiv>
    );
}

export default Card;