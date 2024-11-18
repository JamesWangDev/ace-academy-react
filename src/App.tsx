import './App.css'
import Router from './router'
import { BrowserRouter } from 'react-router-dom';
import AppLayout from './layout';

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Router />
      </AppLayout>
    </BrowserRouter>
  )
}

export default App
