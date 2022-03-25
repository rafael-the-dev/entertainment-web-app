import classNames from "classnames";
import { Hidden, InputAdornment, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { useStyles } from './styles'
import TrendingCarousel from './components/TrendingCarousel'

const Home = () => {
    const classes = useStyles();

    return (
        <main className={classNames('py-4 px-[5%] md:grow md:px-4')}>
            <TextField
                classes={{ root: classes.textField }}
                fullWidth
                label=""
                placeholder="Search for movies or TV series"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon className={classNames('text-slate-50')} />
                        </InputAdornment>
                    ),
                }}
                variant="standard"
            />
            <div className={classNames(classes.carouselWrapper)}>
                <Hidden mdUp>
                    <TrendingCarousel numberOfCards={2}/>
                </Hidden>
                <Hidden mdDown numberOfCards={3}>
                    <TrendingCarousel />
                </Hidden>
            </div>
        </main>
    );
};

export default Home;