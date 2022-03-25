import { Box, Tab, Tabs } from '@mui/material'
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
         </Box>
      </Box>
   )
}

export default memo(PurchaseOrderPage)
