import classNames from 'classnames';
import { Link } from 'react-router-dom'
import { Avatar, IconButton } from '@mui/material'
import { ReactComponent as Logo } from '../../../assets/images/logo.svg'
import { ReactComponent as Home } from '../../../assets/images/icons/icon-nav-home.svg'
import { ReactComponent as Movies } from '../../../assets/images/icons/icon-nav-movies.svg'
import { ReactComponent as TVSeries } from '../../../assets/images/icons/icon-nav-tv-series.svg'
import { ReactComponent as Bookmarked } from '../../../assets/images/icons/icon-bookmark-empty.svg'
import avatar from '../../../assets/images/avatars/image-avatar.png'

const Header = () => {
    return (
        <header className={classNames(`flex align-center justify-between py-4 px-[5%]`)}>
            <Link to="/">
                <Logo />
            </Link>
            <div>
                <IconButton >
                    <Home />
                </IconButton>
                <IconButton >
                    <Movies />
                </IconButton>
                <IconButton >
                    <TVSeries />
                </IconButton>
                <IconButton >
                    <Bookmarked />
                </IconButton>
            </div>
            <Avatar 
                alt="user"
                src={avatar}
            />
        </header>
    );
};

export default Header;