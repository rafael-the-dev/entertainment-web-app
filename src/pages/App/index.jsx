import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from '../../shared/components/Header';
import Home from '../Home'

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    );
};

export default App;