import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import RemoveIcon from '@mui/icons-material/HighlightOff'
import { Box, Button, IconButton } from '@mui/material'
import clsx from 'clsx'
import { memo } from 'react'
import { Link } from 'react-router-dom'
import useStyles from './styles'

function WishlistProduct({ rps }) {
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
               <th className={clsx(styles.tableField, styles.stockStatusHeaderRPS)}>STATUS</th>
               <th className={clsx(styles.tableField, styles.emptyHeaderRPS)}></th>
            </tr>
         </tbody>

         <tbody>
            <tr className={styles.tableProducts}>
               <td className={styles.tableData}>
                  <p className={styles.prevPrive}>$89.99</p>
                  <p className={styles.curPrice}>$39.99</p>
               </td>
               <td className={clsx(styles.tableData, styles.stockStatusData)}>In Stock</td>
               <td className={clsx(styles.tableData, styles.addToCatBtnDataRPS)}>
                  <Button className={styles.addToCartBtn}>
                     <AddShoppingCartIcon style={{ marginRight: 4 }} />
                     Add To Cart
                  </Button>
               </td>
            </tr>
            <tr className={clsx(styles.addToCartBtnRowRPS)}>
               <td>
                  <Button className={styles.addToCartBtn}>
                     <AddShoppingCartIcon style={{ marginRight: 4 }} />
                     Add To Cart
                  </Button>
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
            <p className={styles.prevPrive}>$89.99</p>
            <p className={styles.curPrice}>$39.99</p>
         </td>
         <td className={clsx(styles.tableData, styles.stockStatusData)}>In Stock</td>
         <td className={styles.tableData}>
            <Button className={styles.addToCartBtn}>
               <AddShoppingCartIcon style={{ marginRight: 4 }} />
               Add To Cart
            </Button>
         </td>
      </tr>
   )
}

export default memo(WishlistProduct)
