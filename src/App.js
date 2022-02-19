import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import routes from './routes'
import { ThemeProvider } from '@mui/material/styles'
import theme from './commons/theme'
import { CssBaseline } from '@mui/material'
import { Box } from '@mui/system'

function App() {
   return (
      <Router>
         <ThemeProvider theme={theme}>
            <CssBaseline />

            <Header />

            <Box style={{ marginTop: 80 }}>
               <Switch>{routes}</Switch>
            </Box>

            <Footer />
         </ThemeProvider>
      </Router>
   )
}

export default App
