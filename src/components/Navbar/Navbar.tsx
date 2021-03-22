import React from 'react';
import { TITLE } from '../../headings';
import Text from '../Text/Text';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <Text text={TITLE} fontSize={20} weight={"600"} color={"fff"} />
        </nav>
    )
}

export default Navbar;
