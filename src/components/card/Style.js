import styled from 'styled-components';

export const Img = styled.img`
    width: 100%;
    border-radius: 5px 5px 0 0;
`;

export const CardBody = styled.div`
    padding: 10px;
`;

export const VoteContainer = styled.div`
    height: 10px;
    position: relative;
`;

export const VoteSpanOuter = styled.span`
    background-color: #081c22;
    color: #fff;
    padding: 8.5px 3px;
    position: absolute;
    top: -30px;
    border-radius: 100%;
    font-size: 10.5pt;
`;

export const VoteSpan = styled.span`
    padding: 5px 3px;
    border: 2px solid lightgreen;
    border-radius: 100%;
`;