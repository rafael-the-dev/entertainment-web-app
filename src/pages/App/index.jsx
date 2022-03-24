import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from '../../shared/components/Header';
import Home from '../Home'
import classNames from 'classnames'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { StylesProvider } from '@mui/styles';

const App = () => {
    const theme = createTheme();

    return (
        <StylesProvider injectFirst>
            <ThemeProvider theme={theme}>
                <Router>
                    <div className={classNames(`flex flex-col items-stretch md:flex-row items-start md:py-3 md:px-4`)}>
                        <Header />
                        <Routes>
                            <Route path="/" element={<Home />} />
                        </Routes>
                    </div>
                </Router>
            </ThemeProvider>
        </StylesProvider>
    );
};

export default App;