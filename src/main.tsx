import ReactDOM from 'react-dom/client'
import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from './theme.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline /> 
      <App />
    </ThemeProvider>
    
  </React.StrictMode>,
)
