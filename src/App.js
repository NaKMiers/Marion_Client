import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { Box } from '@mui/system'
import { useEffect } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import theme from './commons/theme'
import Footer from './components/Footer'
import Header from './components/Header'
import ScrollToTopButton from './components/ScrollToTopButton'
import routes from './routes'

function App() {
   useEffect(() => {
      window.addEventListener('scroll', () => {})
   }, [])

   return (
      <Router>
         <ThemeProvider theme={theme}>
            <CssBaseline />

            <Header />

            <Box style={{ marginTop: 80, minHeight: '100vh' }}>
               <Switch>{routes}</Switch>
            </Box>

            <ScrollToTopButton />

            <Footer />
         </ThemeProvider>
      </Router>
   )
}

export default App
