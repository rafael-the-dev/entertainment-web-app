import { makeStyles } from '@mui/styles';
import movieIcon from '../../../assets/images/icons/icon-category-movie.svg'
import tvSeriesIcon from '../../../assets/images/icons/icon-category-tv.svg'

export const useStyles = makeStyles(theme => ({
    trendingImageContainer: {
        height: 250,
    },
    cardContentTrending: {
        backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, .1), rgba(0, 0, 0, .5))'
    },
    movie: {
        '&::before': {
            backgroundImage: `url(${movieIcon})`
        }
    },
    tvSeries: {
        '&::before': {
            backgroundImage: `url(${tvSeriesIcon})`
        }
    },
    saveButton: {
        backgroundColor: '#10141e54 !important'
    }
}));