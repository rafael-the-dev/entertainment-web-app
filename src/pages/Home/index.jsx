import classNames from "classnames";
import { Hidden, InputAdornment, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { useStyles } from './styles'
import ItemsCarousel from 'react-items-carousel'
import { useCallback, useState } from 'react'
import MovieCard from '../../shared/components/MovieCard'

const Home = () => {
    const classes = useStyles();

    const [activeItemIndex, setActiveItemIndex] = useState(0);

    const TrendingCarousel = useCallback(({ numberOfCards}) => (
        <ItemsCarousel
            classes={{ wrapper: classes.itemsInnerWrapper,itemsInnerWrapper: classes.itemsInnerWrapper, itemWrapper: classes.itemWrapper}}
            infiniteLoop={false}
            gutter={12}
            numberOfCards={numberOfCards}
            firstAndLastGutter={true}
            activeItemIndex={activeItemIndex}
            requestToChangeActive={setActiveItemIndex}
            rightChevron={<button style={{height: '100px', width: '30px'}}>{'>'}</button>}
            leftChevron={<button style={{height: '100px', width: '30px'}}>{'<'}</button>}
          >
            {
                [].map((el, index) => <MovieCard {...el} isTrending={true} key={index}  /> )
            }
          </ItemsCarousel>
    ), [ activeItemIndex, classes ])

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