import { makeStyles } from '@mui/styles'

export default makeStyles(theme => ({
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

   link: {
      textDecoration: 'none',
   },
}))
