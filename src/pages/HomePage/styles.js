import { makeStyles } from '@mui/styles'

export default makeStyles(theme => ({
   homePage: {
      margin: 'auto',
      maxWidth: 1500,
   },

   slider: {
      width: '100%',
      height: '60vh',
      backgroundColor: '#f1f3f2',
   },
   slide1: {
      width: '100%',
      height: '100%',
      background: 'url(https://bom.so/TWQ8kL)',
      animation: '$slideEffect 2s ease-in-out',
   },
   slide2: {
      width: '100%',
      height: '100%',
      background: 'url(https://bom.so/nT06la)',
      animation: '$slideEffect 2s ease-in-out',
   },
   '@keyframes slideEffect': {
      from: {
         opacity: 0,
      },
      to: {
         opacity: 1,
      },
   },
}))
