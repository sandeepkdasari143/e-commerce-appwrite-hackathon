import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { store } from './redux-store/store.js'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { StyledEngineProvider } from '@mui/material'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'mapbox-gl/dist/mapbox-gl.css';
ReactDOM.createRoot(document.getElementById('root')).render(
  <StyledEngineProvider injectFirst>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
    <ToastContainer />
  </StyledEngineProvider>
)
