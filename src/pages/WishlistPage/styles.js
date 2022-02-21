import { makeStyles } from '@mui/styles'

export default makeStyles(theme => ({
   wishlistPage: {
      margin: 'auto',
      maxWidth: 1200,
   },

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
      marginBottom: -3,
   },
   socialIcon: {
      '&.MuiSvgIcon-root': {
         fontSize: 28,
      },
      margin: '0px 4px',
   },
}))
