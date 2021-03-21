import React from 'react';
import { DivWithShadow } from '../../Style';
import { Movie } from '../../types';
import { parseDate, toPercentage } from '../../utils';
import Text from '../text/Text';
import { CardBody, Img, VoteContainer, VoteSpan, VoteSpanOuter } from './Style';

interface CardProps {
    movie: Movie;
}

const Card: React.FC<CardProps> = ({ movie }) => {
    const parsedReleaseDate: string = parseDate(movie.releaseDate);

    return (
        <DivWithShadow className="col-sm-2 p-0 mr-3 ml-3 mb-4" style={{ alignItems: "center" }}>
            <Img src={`https://image.tmdb.org/t/p/w500${movie.imagePath}`} alt={movie.title} title={movie.title} />

            <CardBody>
                <VoteContainer>
                    <VoteSpanOuter>
                        <VoteSpan>{toPercentage(movie.vote)}<sup style={{ fontSize: "5pt" }}>%</sup></VoteSpan>
                    </VoteSpanOuter>
                </VoteContainer>

                <Text fontSize={11} weight="700" text={movie.title} />
                <Text fontSize={11} weight="normal" text={parsedReleaseDate} />
            </CardBody>
        </DivWithShadow>
    );
}

export default Card;