import styled from "styled-components";

export const StyledText = styled.p
    .attrs(fontSize => fontSize)
    .attrs(weight => weight)
    .attrs(subheading => subheading)
    .attrs(color => color)`

    font-size: ${props => props.fontSize}pt;
    font-weight: ${props => props.weight};
    color: #${props => (props.color !== undefined) ? props.color : "000"};
    margin-bottom: ${props => props.subheading !== undefined && props.subheading ? 10 : 0}px;
`;