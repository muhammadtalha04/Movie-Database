import styled from 'styled-components';

const hoverColor = "1, 180, 228";

export const List = styled.ul`
    list-style-type: none;
    padding-left: 0px;
`;

export const ListItem = styled.li.attrs(fontSize => fontSize)`
    display: inline-flex;
    border: 1px solid #9e9e9e;
    border-radius: 14px;
    padding: 4px 12px;
    font-size: ${props => props.fontSize !== undefined ? props.fontSize : "0.9"}em;
    margin-right: 6px;
    margin-top: 8px;

    &:hover {
        background-color: rgba(${hoverColor}, 1);
        color: #fff;
        border-color: rgba(${hoverColor}, 1);
        cursor: pointer;
    }
`;

export const Input = styled.input`
    width: 100%;
    font-size: 10pt;
    padding: 10px 5px;
`;