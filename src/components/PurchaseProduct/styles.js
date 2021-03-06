import { makeStyles } from '@mui/styles'

export default makeStyles(theme => ({
   product: {
      padding: 16,
      border: `2px solid ${theme.palette.secondary.main}`,
      marginBottom: 24,
   },

   productHeading: {
      display: 'flex',
      justifyContent: 'space-between',
      color: theme.palette.secondary.darkerText,
      borderBottom: `2px solid ${theme.palette.secondary.main}`,
      fontSize: 13,
      padding: '0px 0px 12px 0px',
      '@media (max-width: 600px)': {
         flexDirection: 'column',
      },
   },
   productTextHeading: {
      margin: '0px !important',
      fontWeight: 'bold',
      fontFamily: 'Montserrat, sans-serif !important',
   },
   productDate: {
      color: theme.palette.success.darker,
   },
   productStatus: {
      color: theme.palette.danger.main,
   },

   productContent: {
      display: 'flex',
      alignItems: 'center',
      height: 100,
   },
   productThumb: {
      background: 'url(https://bom.so/U0UUEO)',
      backgroundSize: 'contain',
      backgroundPosition: 'left center',
      backgroundRepeat: 'no-repeat',
      height: '100%',
      width: 150,
   },
   productBody: {
      padding: '0px 16px',
      color: theme.palette.secondary.darkerText,
   },
   productName: {
      '&.MuiTypography-root': {
         fontSize: 28,
         margin: '0px !important',
         '@media (max-width: 600px)': {
            fontSize: '5vw',
         },
      },
   },
   quantity: {
      '&.MuiTypography-root': {
         fontSize: 16,
         margin: '0px !important',
         color: theme.palette.info.main,
         '@media (max-width: 600px)': {
            fontSize: '4vw',
         },
      },
   },
   productFooter: {
      borderTop: `2px solid ${theme.palette.secondary.main}`,
   },
   total: {
      '&.MuiTypography-root': {
         fontSize: 24,
         margin: '16px 0px 0px 0px !important',
         textAlign: 'right',
      },
   },
   price: {
      color: theme.palette.info.main,
   },
}))
