import InfoIcon from '@mui/icons-material/Info'
import { Box, Tab, Tabs, Typography } from '@mui/material'
import clsx from 'clsx'
import { memo, useState } from 'react'
import PageTitle from '../../components/PageTitle'
import PurchaseProduct from '../../components/PurchaseProduct'
import useStyles from './styles'

function PurchaseOrderPage() {
   const [tabValue, setTabValue] = useState(0)

   const handleChangeTab = (event, newValue) => {
      setTabValue(newValue)
   }

   const styles = useStyles()

   return (
      <Box className={styles.purchaseOrderPage}>
         <PageTitle page='purchase-orders' />

         <Box className={styles.main}>
            <Tabs
               value={tabValue}
               onChange={handleChangeTab}
               className={styles.tabHeadings}
               centered
            >
               <Tab label='ALL' className={styles.tabHeading} />
               <Tab label='WAIT FOR CONFORMATION' className={styles.tabHeading} />
               <Tab label='WAITING FOR GOODS' className={styles.tabHeading} />
               <Tab label='DELIVERING' className={styles.tabHeading} />
               <Tab label='DELIVERED' className={styles.tabHeading} />
               <Tab label='CANCELLED' className={styles.tabHeading} />
            </Tabs>

            <Box className={clsx(styles.tabPanel)}>
               <PurchaseProduct />
               <PurchaseProduct />
               <PurchaseProduct />
            </Box>
            <Box className={styles.emptyWishlistWrap}>
               <Box className={styles.emptyWishlist}>
                  <Box className={styles.emptyWishlistIconStroke}>
                     <InfoIcon className={styles.emptyWishlistIcon} />
                  </Box>
                  <Typography className={styles.emptyText}>
                     Your purchase orders is currently empty.
                  </Typography>
               </Box>
            </Box>
         </Box>
      </Box>
   )
}

export default memo(PurchaseOrderPage)
