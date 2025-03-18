import { Route, Routes } from 'react-router-dom';
import './App.css';
import Bingo from './Components/Bingo/Bingo';
import Cartela from './Components/Cartela/Cartela';
import Header from './Components/Header/Header';

function App() {
  const numeros: number[][] = [
    [1, 16, 31, 46, 61],
    [2, 17, 32, 47, 62],
    [3, 18, 33, 48, 63],
    [4, 19, 34, 49, 64],
    [5, 20, 35, 50, 65],
    [6, 21, 36, 51, 66],
    [7, 22, 37, 52, 67],
    [8, 23, 38, 53, 68],
    [9, 24, 39, 54, 69],
    [10, 25, 40, 56, 70],
    [11, 26, 41, 57, 71],
    [12, 27, 42, 58, 72],
    [13, 28, 43, 59, 73],
    [14, 29, 44, 60, 74],
    [15, 30, 45, 61, 75],
  ];
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Bingo numerosCartela={numeros} />} />
        <Route path="/Cartela" element={<Cartela numerosCartela={numeros} />} />
      </Routes>
    </>
  );
}

export default App;
