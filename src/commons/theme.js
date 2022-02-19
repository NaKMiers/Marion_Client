import { createTheme } from '@mui/material/styles'

const theme = createTheme({
   palette: {
      primary: {
         gradient: 'linear-gradient(90deg, #01E6E4, #ADEBBD);',
         main: '#fff',
         dark: '#333',
         light: '#eee',
         contrastText: '#333',
      },
      secondary: {
         main: '#e8f6ec',
         contrastText: '#fff',
         lightText: '#ccc',
         lightTextHover: '#aaa',
      },

      success: {
         main: '#60F579',
      },
      danger: {
         main: '#f44336',
      },
      warning: {
         main: '#ffc107',
      },
   },

   border: {
      light: '#ccc',
      main: '#fff',
   },
})

export default theme
