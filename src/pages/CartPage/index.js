import InfoIcon from '@mui/icons-material/Info'
import { Box, Typography } from '@mui/material'
import clsx from 'clsx'
import { memo } from 'react'
import { Link } from 'react-router-dom'
import CartProduct from '../../components/CartProduct'
import PageTitle from '../../components/PageTitle'
import useStyles from './styles'

function CartPage() {
   const styles = useStyles()

   return (
      <Box className={styles.cartPage}>
         <PageTitle page='carts' />

         <Box className={styles.cartBody}>
            <Typography className={styles.amount}>
               You Have <span className={styles.quantity}>2 Items</span> In Cart:
            </Typography>

            <Box className={styles.productList}>
               <table className={styles.table}>
                  <thead>
                     <tr className={styles.tableHeader}>
                        <th className={clsx(styles.tableField, styles.removeHeader)}></th>
                        <th className={clsx(styles.tableField, styles.productHeader)}>PRODUCT</th>
                        <th className={clsx(styles.tableField, styles.priceHeader)}>PRICE</th>
                        <th className={clsx(styles.tableField, styles.quantityHeader)}>QUANTITY</th>
                        <th className={clsx(styles.tableField, styles.subtotalHeader)}>SUBTOTAL</th>
                     </tr>
                  </thead>
                  <tbody>
                     <CartProduct />
                     <CartProduct />
                  </tbody>
               </table>
            </Box>
            <Box className={styles.productListRPS}>
               <CartProduct rps />
               <CartProduct rps />
            </Box>

            <Box className={styles.emptyCartWrap}>
               <Box className={styles.emptyCart}>
                  <Box className={styles.emptyCartIconStroke}>
                     <InfoIcon className={styles.emptyCartIcon} />
                  </Box>
                  <Typography className={styles.emptyText}>
                     Your cart is currently empty.
                  </Typography>
               </Box>
               <Link to='/' className={styles.returnShopLink}>
                  Return to shop
               </Link>
            </Box>
         </Box>
      </Box>
   )
}

export default memo(CartPage)
