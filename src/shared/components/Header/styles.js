import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(theme => ({
    header: {
        [theme.breakpoints.up('md')]: {
            height: 'calc(100vh - 25px)'
        }
    },
    avatar: {
        height: 30,
        width: 30
    }
}))