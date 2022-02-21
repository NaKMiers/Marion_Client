import { makeStyles } from '@mui/styles'

export default makeStyles(theme => ({
   cartPage: {
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
   quantityHeader: {
      textAlign: 'center',
      width: '20%',
   },
   subtotalHeader: {
      width: '11%',
   },

   tableProducts: {
      fontSize: 15,
      color: theme.palette.primary.contrastText,
      borderBottom: `2px solid ${theme.palette.secondary.main}`,
      '@media (max-width: 900px)': {
         borderBottom: 'none',
      },
   },
   tableData: {
      padding: '16px',
      '@media (max-width: 900px)': {
         textAlign: 'center',
      },
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
   quantityData: {
      fontWeight: 'bold',
   },

   quantityWrap: {
      display: 'flex',
      justifyContent: 'center',
      height: 34,
   },
   incQuantityBtn: {
      '&.MuiButton-root': {
         background: theme.palette.secondary.main,
         color: theme.palette.primary.contrastText,
         fontSize: 24,
         minWidth: 34,
         borderRadius: 0,
      },
   },
   quantityInput: {
      outline: 'none',
      border: 'none',
      margin: '0px 8px',
      width: 52,
      padding: 8,
      fontSize: 16,
      background: theme.palette.primary.light,
      textAlign: 'center',
   },
   decQuantityBtn: {
      '&.MuiButton-root': {
         background: theme.palette.secondary.main,
         color: theme.palette.primary.contrastText,
         fontSize: 24,
         minWidth: 34,
         borderRadius: 0,
      },
   },

   productRow: {
      display: 'flex',
   },
   priceHeaderRPS: {
      textAlign: 'center',
      width: '25%',
      '@media (max-width: 600px)': {
         width: '50%',
      },
   },
   quantityHeaderRPS: {
      textAlign: 'center',
      width: '45%',
      '@media (max-width: 600px)': {
         width: '50%',
      },
   },
   subtotalHeaderRPS: {
      textAlign: 'center',
      width: '30%',
      '@media (max-width: 780px)': {
         display: 'none',
      },
   },
   subtotalHeaderRPS2: {
      display: 'none',
      '@media (max-width: 780px)': {
         display: 'table-row-group',
      },
   },
   subtotalData: {
      '@media (max-width: 780px)': {
         display: 'none',
      },
   },
   subtotalDataRPS2: {
      display: 'none',
      '@media (max-width: 780px)': {
         display: 'table-row-group',
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
}))
