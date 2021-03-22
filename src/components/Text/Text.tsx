import React from 'react';
import { StyledText } from "./Style";

interface textProps {
    fontSize: number;
    text: string;
    weight: string;
    subheading?: boolean;
    color?: string;
}

const Text: React.FC<textProps> = ({ fontSize, text, weight, subheading, color }) => {
    return (
        <StyledText fontSize={fontSize} weight={weight} subheading={subheading} color={color}>
            {text}
        </StyledText>
    );
}

export default Text;