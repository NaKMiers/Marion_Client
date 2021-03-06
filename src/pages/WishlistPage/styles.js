import { makeStyles } from '@mui/styles'

export default makeStyles(theme => ({
   wishlistPage: {
      margin: 'auto',
      maxWidth: 1500,
   },

   wishListBody: {
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
         margin: '36px 0px 24px 0px',
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
      fontWeight: 'bold',
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
   stockStatusHeader: {
      width: '20%',
   },
   emptyHeader: {
      width: '15%',
   },

   tableProducts: {
      fontSize: 15,
      height: 120,
      color: theme.palette.primary.contrastText,
      borderBottom: `2px solid ${theme.palette.secondary.main}`,
      '@media (max-width: 900px)': {
         borderBottom: 'none',
      },
   },
   tableData: {
      padding: '16px',
   },
   removeTableData: {
      padding: '16px 0px 16px 16px',
   },
   removeIcon: {
      '&.MuiSvgIcon-root': {
         fontSize: 32,
         color: theme.palette.danger.main,
      },
   },
   productData: {
      display: 'flex',
      alignItems: 'center',
   },
   productThumb: {
      width: 60,
      height: 60,
      marginRight: 16,
   },
   productName: {
      color: theme.palette.info.main,
      '@media (min-width: 445px)': {
         whiteSpace: 'nowrap',
      },
   },
   prevPrive: {
      textDecoration: 'line-through',
      fontSize: 18,
      margin: '8px 0px',
      color: theme.palette.secondary.lightTextHover,
   },
   curPrice: {
      fontSize: 24,
      margin: '8px 0px',
   },
   stockStatusData: {
      fontWeight: 'bold',
   },
   addToCartBtn: {
      whiteSpace: 'nowrap',
      '&.MuiButton-root': {
         background: theme.palette.secondary.main,
         color: theme.palette.primary.contrastText,
         fontWeight: 'bold',
         padding: '4px 8px',
      },
   },

   productRow: {
      width: '200%',
      display: 'flex',
   },
   priceHeaderRPS: {
      maxWidth: '33.33333%',
      '@media (max-width: 780px)': {
         width: '50%',
      },
   },
   stockStatusHeaderRPS: {
      width: '33.33333%',
      '@media (max-width: 780px)': {
         width: '50%',
      },
   },
   emptyHeaderRPS: {
      width: '33.33333%',
      '@media (max-width: 780px)': {
         display: 'none',
      },
   },
   addToCatBtnDataRPS: {
      '@media (max-width: 780px)': {
         display: 'none',
      },
   },
   addToCartBtnRowRPS: {
      display: 'none',
      padding: '0px 16px 16px 16px',
      '@media (max-width: 780px)': {
         display: 'block',
      },
   },
   emptyData: {
      '@media (max-width: 780px)': {
         display: 'none',
      },
   },
   removeTableDataRPS: {
      textAlign: 'right',
   },

   shareWishlistWrap: {
      margin: '48px 0px',
      display: 'flex',
      '@media (max-width: 600px)': {
         textAlign: 'center',
         display: 'block',
      },
   },
   shareWishlist: {
      display: 'inline-block',
      '&.MuiTypography-root': {
         fontSize: 20,
         fontFamily: 'Montserrat, sans-serif',
      },
      '@media (max-width: 600px)': {
         display: 'block',
      },
   },
   socials: {
      display: 'inline-block',
      marginTop: 22,
   },
   socialIcon: {
      '&.MuiSvgIcon-root': {
         fontSize: 28,
         transition: 'all 0.2s ease-in-out',
         '&:hover': {
            opacity: 0.7,
         },
      },
      margin: '0px 4px',
   },

   emptyWishlistWrap: {
      margin: '80px 0px',
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
