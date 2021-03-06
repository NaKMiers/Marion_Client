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
         darkerText: '#5f727f',
      },

      info: {
         main: '#03a9f4',
         darker: '#0293D6',
      },
      success: {
         main: '#60F579',
         darker: '#54D669',
      },
      danger: {
         main: '#f44336',
         darker: '#D63A2F',
      },
      warning: {
         main: '#ffc107',
         darker: '#E0AA07',
      },
   },

   border: {
      light: '#eee',
      darker: '#ccc',
      main: '#fff',
   },
})

export default theme
