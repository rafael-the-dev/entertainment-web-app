import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from '../../shared/components/Header';
import Home from '../Home'
import classNames from 'classnames'

const App = () => {
    return (
        <Router>
            <div className={classNames(`flex flex-col items-stretch md:flex-row items-start px-[5%] py-3`)}>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;