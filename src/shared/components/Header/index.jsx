import classNames from 'classnames';
import { Link } from 'react-router-dom'
import { Avatar, Hidden, IconButton } from '@mui/material'
import { ReactComponent as Logo } from '../../../assets/images/logo.svg'
import { ReactComponent as Home } from '../../../assets/images/icons/icon-nav-home.svg'
import { ReactComponent as Movies } from '../../../assets/images/icons/icon-nav-movies.svg'
import { ReactComponent as TVSeries } from '../../../assets/images/icons/icon-nav-tv-series.svg'
import { ReactComponent as Bookmarked } from '../../../assets/images/icons/icon-bookmark-empty.svg'
import avatar from '../../../assets/images/avatars/image-avatar.png'
import { useStyles } from './styles';
import { useMemo } from 'react';

const Header = () => {
    const classes = useStyles();

    const avatarMemo = useMemo(() => (
        <Avatar 
            alt="user"
            classes={{ root: classNames(classes.avatar)}}
            src={avatar}
        />
    ), [ classes ]);
    
    return (
        <header className={classNames(`flex align-center justify-between py-3 px-[5%] bg-blue-600 md:rounded-xl
            md:flex-col md:px-3`, classes.header)}>
            <div className={classNames(`flex items-center justify-between md:flex-col grow md:grow-0
                md:justify-start`)}>
                <Link to="/">
                    <Logo />
                </Link>
                <div className={classNames(`flex items-center md:flex-col md:mt-4`)}>
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
                <Hidden mdUp>
                    { avatarMemo }
                </Hidden>
            </div>
            <Hidden mdDown>
                { avatarMemo }
            </Hidden>
        </header>
    );
};

export default Header;