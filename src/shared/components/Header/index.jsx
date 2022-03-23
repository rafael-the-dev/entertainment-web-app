import classNames from 'classnames';
import { Link } from 'react-router-dom'
import { Avatar, IconButton } from '@mui/material'

const Header = () => {
    return (
        <header className={classNames()}>
            <Link to="/">
                <img 
                    alt="logo"
                    className={classNames()}
                    src=''
                />
            </Link>
            <div>
                <IconButton />
            </div>
            <Avatar />
        </header>
    );
};

export default Header;