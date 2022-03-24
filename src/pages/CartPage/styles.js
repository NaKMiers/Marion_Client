import { makeStyles } from '@mui/styles'

export default makeStyles(theme => ({
   cartPage: {
      margin: 'auto',
      maxWidth: 1500,
   },

   cartBody: {
      padding: '0px 36px',
   },

   bodyTitle: {
      '&.MuiTypography-root': {
         fontSize: 36,
         fontWeight: 'bold',
         margin: '36px 0px',
      },
   },

   search: {
      display: 'flex',
      alignItems: 'center',
   },
   searchTextField: {
      width: '50%',
   },
   searchInputProp: {
      height: 40,
   },
   doneBtn: {
      '&.MuiButtonBase-root': {
         marginLeft: 16,
      },
   },
   doneIcon: {
      color: theme.palette.info.main,
   },

   amount: {
      '&.MuiTypography-root': {
         fontSize: 24,
         fontFamily: 'Montserrat, sans-serif',
         margin: '64px 0px 24px 0px',
      },
   },
   quantity: {
      color: theme.palette.info.main,
   },

   productList: {
      display: 'none',
      '@media (min-width: 901px)': {
         display: 'block',
      },
   },
   productListRPS: {
      display: 'none',
      '@media (max-width: 900px)': {
         display: 'block',
      },
   },

   table: {
      width: '100%',
      borderCollapse: 'collapse',
      border: `2px solid ${theme.palette.secondary.main}`,
      marginBottom: 36,
   },
   tableHeader: {
      height: 60,
      background: theme.palette.secondary.main,
      color: theme.palette.primary.contrastText,
      fontSize: 18,
      fontFamily: 'Montserrat, sans-serif',
   },
   tableField: {
      textAlign: 'left',
      padding: '0px 16px',
      whiteSpace: 'nowrap',
      fontSize: 16,
   },
   removeHeader: {
      width: '5%',
   },
   productHeader: {
      width: '50%',
   },
   priceHeader: {
      width: '10%',
   },
   quantityHeader: {
      textAlign: 'center',
      width: '20%',
   },
   subtotalHeader: {
      width: '11%',
   },

   // Empty Cart

   emptyCartWrap: {
      margin: '80px 0px',
   },
   emptyCart: {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      height: 90,
      background: theme.palette.secondary.main,
      padding: 16,
      marginBottom: 48,
   },
   emptyCartIconStroke: {
      color: theme.palette.secondary.lightTextHover,
      background: theme.palette.primary.main,
      padding: '12px 12px 5px 12px',
      borderRadius: '50%',
      marginRight: 8,
   },
   emptyCartIcon: {
      '&.MuiSvgIcon-root': {
         fontSize: 24,
      },
   },
   emptyText: {
      '&.MuiTypography-root': {
         marginLeft: 16,
         fontSize: 22,
         fontFamily: 'Montserrat, sans-serif',
         color: theme.palette.primary.dark,
         '@media (max-width: 600px)': {
            fontSize: '4vw',
         },
      },
   },
   returnShopLink: {
      textDecoration: 'none',
      color: theme.palette.info.main,
      fontSize: 16,
   },
}))
