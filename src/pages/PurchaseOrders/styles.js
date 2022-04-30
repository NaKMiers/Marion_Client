import { makeStyles } from '@mui/styles'

export default makeStyles(theme => ({
   purchaseOrderPage: {
      margin: 'auto',
      maxWidth: 1500,
   },

   // main
   main: {
      marginTop: 48,
   },

   tabs: {},
   tabHeadings: {
      borderBottom: '1px solid #ccc',
      '& .MuiTabs-indicator': {
         background: theme.palette.info.main,
      },
      '& .Mui-selected': {
         background: theme.palette.info.main,
         color: theme.palette.info.main,
      },
   },
   tabHeading: {
      '&.MuiButtonBase-root': {
         color: theme.palette.secondary.darkerText,
         width: 'calc(100%/6)',
      },
   },
   tabPanel: {
      padding: '24px 0px',
   },

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

   emptyWishlistWrap: {
      margin: '0px 0px 80px 0px',
   },
   emptyWishlist: {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      height: 90,
      background: theme.palette.secondary.main,
      padding: 16,
      marginBottom: 48,
   },
   emptyWishlistIconStroke: {
      color: theme.palette.secondary.lightTextHover,
      background: theme.palette.primary.main,
      padding: '12px 12px 5px 12px',
      borderRadius: '50%',
      marginRight: 8,
   },

   emptyWishlistIcon: {
      '&.MuiSvgIcon-root': {
         fontSize: 24,
      },
   },
   emptyText: {
      '&.MuiTypography-root': {
         marginLeft: '0px 0px 0px 16px !important',
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
