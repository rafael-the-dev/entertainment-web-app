import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(theme => ({
    textField: {
        '& .MuiInput-input': {
            color: '#FFF'
        },
        '& .MuiInput-root': {
            '&::before': {
                border: 'none'
            }
        }
    }
}))