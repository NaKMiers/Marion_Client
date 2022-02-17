import { createTheme } from '@mui/material/styles'

const theme = createTheme({
   palette: {
      primary: {
         gradient: 'linear-gradient(90deg, #01E6E4, #ADEBBD);',
         main: '#e7f9e9',
         contrastText: '#333',
      },
      secondary: {
         main: '#ccc',
         contrastText: '#fff',
      },
   },
})

export default theme
