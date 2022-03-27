import classNames from "classnames";
import { Hidden, InputAdornment, TextField, Typography } from '@mui/material'
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
            <section className={classNames(`mt-4`)}>
                <Typography
                    className={classNames(`mb-3 text-slate-100`)}
                    component="h2"
                    variant="h6">
                    Trending
                </Typography>
               <div className={classNames(classes.carouselWrapper, `w-full max-w-full`)}>
                    <Hidden mdUp>
                        <TrendingCarousel numberOfCards={1} />
                    </Hidden>
                    <Hidden mdDown>
                        <TrendingCarousel numberOfCards={3} />
                    </Hidden>
               </div>
            </section>
        </main>
    );
};

export default Home;