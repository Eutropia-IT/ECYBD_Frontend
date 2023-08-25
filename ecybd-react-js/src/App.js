import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Components/Routes/Routes';

function App() {
  return (
    <div  className='max-w-screen-xl mx-auto mx-24'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
