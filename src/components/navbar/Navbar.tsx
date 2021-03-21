import React from 'react';
import Text from '../text/Text';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <Text text={"Movies DB"} fontSize={20} weight={"600"} color={"fff"} />
        </nav>
    )
}

export default Navbar;
