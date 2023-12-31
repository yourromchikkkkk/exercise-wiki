import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import Home from './pages/home';
import ExerciseDetail from './pages/exercise-detail';
import { Navbar, Footer } from './components';

import { Provider } from 'react-redux';
import store from './redux/store';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Box width="400px" sx={{ width: { xl: '1488px' }, m: 'auto' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
        </Routes>
        <Footer />
      </Box>
    </Provider>
  );
}

export default App;
