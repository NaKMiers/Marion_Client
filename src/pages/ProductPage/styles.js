import { makeStyles } from '@mui/styles'

export default makeStyles(theme => ({
   productPage: {
      margin: 'auto',
      maxWidth: 1500,
   },

   // PAGE TITLE
   pageTitle: {
      position: 'relative',
      width: '100%',
      height: 300,
      background: 'url(https://bom.so/z66yZs)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      '@media (max-width: 680px)': {
         height: 420,
      },
   },

   title: {
      '&.MuiTypography-root': {
         position: 'absolute',
         textAlign: 'center',
         width: '100%',
         top: '35%',
         left: '50%',
         transform: 'translate(-50%, -50%)',
         fontSize: 48,
         padding: '0px 16px',
         color: theme.palette.secondary.darkerText,
      },
      '@media (max-width: 600px)': {
         '&.MuiTypography-root': {
            fontSize: '8vw',
         },
      },
   },
   title1: {
      fontFamily: 'Montserrat, sans-serif',
   },
   title2: {
      fontWeight: 'bold',
   },

   subtitle: {
      '&.MuiTypography-root': {
         fontSize: 20,
         padding: '0px 24px',
      },
      '@media (max-width: 600px)': {
         '&.MuiTypography-root': {
            fontSize: '3.3vw',
         },
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

   productContent: {
      paddingTop: 52,
   },
   // PRODUCT CONTENT TOP - left
   productContentTop: {
      display: 'flex',
   },
   productContentLeft: {
      width: '50%',
   },

   productThumb1: {
      background: 'url(https://bom.so/U0UUEO)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      paddingTop: '70%',
   },
   productThumb2: {
      background: 'url(https://bom.so/U0UUEO)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      paddingTop: '70%',
   },
   productThumb3: {
      background: 'url(https://bom.so/U0UUEO)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      paddingTop: '70%',
   },

   thumbNumber: {
      position: 'absolute',
      top: 18,
      display: 'flex',
      left: 22,
   },
   thumbNumberBtn: {
      position: 'relative',
      width: 16,
      height: 16,
      background: theme.palette.secondary.lightTextHover,
      borderRadius: '50%',
      '&:hover $subThumbNumber': {
         opacity: 1,
      },
      cursor: 'pointer',
      margin: 6,
   },
   subThumbNumber: {
      opacity: 0,
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: theme.palette.primary.main,
      transition: 'all 0.05s ease-in-out',
   },
   subThumbNumberActive: {
      opacity: 1,
   },
}))
