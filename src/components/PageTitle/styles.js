import { makeStyles } from '@mui/styles'

export default makeStyles(theme => ({
   pageTitle: {
      position: 'relative',
      width: '100%',
      height: 200,
      background: 'url(https://bom.so/z66yZs)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
   },

   title: {
      '&.MuiTypography-root': {
         fontSize: 48,
      },
      padding: '24px 28px',
      '@media (max-width: 600px)': {
         '&.MuiTypography-root': {
            fontSize: '8vw',
         },
      },
   },
   title1: {
      fontWeight: 'bold',
   },
   title2: {
      fontWeight: 100,
      fontFamily: 'Montserrat, sans-serif',
   },

   pageIconWrap: {
      position: 'absolute',
      right: 32,
      top: 0,
      height: 200,
   },
   pageIcon: {
      '&.MuiSvgIcon-root': {
         fontSize: 144,
         height: 200,
      },
   },

   navigator: {
      position: 'absolute',
      left: 28,
      bottom: 8,
      display: 'flex',
      alignItems: 'center',
   },
   nav1: {
      color: theme.palette.info.main,
      paddingBottom: 2,
   },
   navArrowIcon: {
      margin: '0px 8px 2px 8px',
   },
   nav2: {
      color: theme.palette.secondary.lightTextHover,
      borderBottom: `2px solid ${theme.palette.danger.main}`,
   },
   link: {
      textDecoration: 'none',
   },
}))
