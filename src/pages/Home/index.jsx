import classNames from "classnames";
import { InputAdornment, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { useStyles } from './styles'

const Home = () => {
    const classes = useStyles();

    return (
        <main className={classNames('py-4 md:grow')}>
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
        </main>
    );
};

export default Home;