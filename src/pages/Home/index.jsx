import classNames from "classnames";
import { InputAdornment, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

const Home = () => {
    return (
        <main className={classNames('py-4')}>
            <TextField
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