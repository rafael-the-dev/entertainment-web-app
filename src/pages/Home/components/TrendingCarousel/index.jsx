import ItemsCarousel from 'react-items-carousel'
import MovieCard from '../../../../shared/components/MovieCard'
import { useStyles } from './styles'
import { useState } from 'react'

const TrendingCarousel = ({ numberOfCards }) => {
    const classes = useStyles();

    const [activeItemIndex, setActiveItemIndex] = useState(0);

    return (
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
    );
};

export default TrendingCarousel;