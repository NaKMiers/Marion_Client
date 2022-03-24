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
   link: {
      textDecoration: 'none',
   },
}))
