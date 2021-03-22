import styled from "styled-components";

interface TextProps {
    fontSize: number;
    weight: string;
    color?: string;
    subheading?: boolean;
}

export const StyledText = styled.p<TextProps>`

    font-size: ${props => props.fontSize}pt;
    font-weight: ${props => props.weight};
    color: #${props => (props.color !== undefined) ? props.color : "000"};
    margin-bottom: ${props => props.subheading !== undefined && props.subheading ? 10 : 0}px;
`;