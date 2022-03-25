import { Box, Typography } from '@mui/material'
import { memo } from 'react'
import useStyles from './styles'

function PurchaseProduct() {
   const styles = useStyles()

   return (
      <Box className={styles.product}>
         <Box className={styles.productHeading}>
            <p className={styles.productTextHeading}>
               Order Date:
               <span className={styles.productDate}> 25/3/2022 - 18:45:00</span>
            </p>
            <p className={styles.productTextHeading}>
               Status:
               <span className={styles.productStatus}> Delivering</span>
            </p>
         </Box>
         <Box className={styles.productContent}>
            <Box className={styles.productThumb} />
            <Box className={styles.productBody}>
               <Typography className={styles.productName}>Lounge Wooden Chairs</Typography>
               <Typography className={styles.quantity}>Quantify: 10</Typography>
            </Box>
         </Box>
         <Box className={styles.productFooter}>
            <Typography className={styles.total}>
               Total: <span className={styles.price}>$99.99</span>
            </Typography>
         </Box>
      </Box>
   )
}

export default memo(PurchaseProduct)
