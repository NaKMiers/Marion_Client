import PlusIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/HighlightOff'
import MinusIcon from '@mui/icons-material/Remove'
import { Box, Button, IconButton } from '@mui/material'
import clsx from 'clsx'
import { memo } from 'react'
import { Link } from 'react-router-dom'
import useStyles from './styles'

function CartProduct({ product, rps }) {
   const styles = useStyles()

   return rps ? (
      <table className={styles.table}>
         <tbody>
            <tr className={styles.tableProducts}>
               <td className={styles.tableData}>
                  <Box className={styles.productData}>
                     <Link to='#'>
                        <img
                           className={styles.productThumb}
                           alt='product'
                           src='https://bom.so/7VKtJS'
                        />
                     </Link>
                     <Link to='#' className={styles.link}>
                        <span className={styles.productName}>Lounge Wooden Chairs</span>
                     </Link>
                  </Box>
               </td>
               <td className={clsx(styles.tableData, styles.emptyData)}></td>
               <td className={clsx(styles.tableData, styles.removeTableDataRPS)}>
                  <IconButton>
                     <RemoveIcon className={styles.removeIcon} />
                  </IconButton>
               </td>
            </tr>
         </tbody>
         <tbody>
            <tr className={styles.tableHeader}>
               <th className={clsx(styles.tableField, styles.priceHeaderRPS)}>PRICE</th>
               <th className={clsx(styles.tableField, styles.quantityHeaderRPS)}>QUANTITY</th>
               <th className={clsx(styles.tableField, styles.subtotalHeaderRPS)}>SUBTOTAL</th>
            </tr>
         </tbody>

         <tbody>
            <tr className={styles.tableProducts}>
               <td className={styles.tableData}>
                  <p className={styles.curPrice}>$39.99</p>
               </td>
               <td className={clsx(styles.tableData, styles.quantityData)}>
                  <Box className={styles.quantityWrap}>
                     <Button className={styles.incQuantityBtn}>
                        <MinusIcon />
                     </Button>
                     <input className={styles.quantityInput} />
                     <Button className={styles.decQuantityBtn}>
                        <PlusIcon />
                     </Button>
                  </Box>
               </td>
               <td className={clsx(styles.tableData, styles.subtotalData)}>
                  <p className={styles.curPrice}>$6549.99</p>
               </td>
            </tr>
         </tbody>
         <tbody className={styles.subtotalHeaderRPS2}>
            <tr className={clsx(styles.tableHeader)}>
               <th colSpan={2} className={styles.tableField} style={{ textAlign: 'center' }}>
                  SUBTOTAL
               </th>
            </tr>
         </tbody>
         <tbody className={styles.subtotalDataRPS2}>
            <tr className={styles.tableProducts}>
               <td className={styles.tableData} colSpan={2}>
                  <p className={styles.curPrice}>$6549.99</p>
               </td>
            </tr>
         </tbody>
      </table>
   ) : (
      <tr className={styles.tableProducts}>
         <td className={clsx(styles.tableData, styles.removeTableData)}>
            <IconButton>
               <RemoveIcon className={styles.removeIcon} />
            </IconButton>
         </td>
         <td className={styles.tableData}>
            <Box className={styles.productData}>
               <Link to='#'>
                  <img className={styles.productThumb} alt='product' src='https://bom.so/7VKtJS' />
               </Link>
               <Link to='#' className={styles.link}>
                  <span className={styles.productName}>Lounge Wooden Chairs</span>
               </Link>
            </Box>
         </td>
         <td className={styles.tableData}>
            <p className={styles.curPrice}>$39.99</p>
         </td>
         <td className={clsx(styles.tableData, styles.quantityData)}>
            <Box className={styles.quantityWrap}>
               <Button className={styles.incQuantityBtn}>
                  <MinusIcon />
               </Button>
               <input className={styles.quantityInput} />
               <Button className={styles.decQuantityBtn}>
                  <PlusIcon />
               </Button>
            </Box>
         </td>
         <td className={styles.tableData}>
            <p className={styles.curPrice}>$6549.99</p>
         </td>
      </tr>
   )
}

export default memo(CartProduct)
