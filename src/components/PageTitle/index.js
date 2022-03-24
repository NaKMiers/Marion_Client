import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import FavoriteIcon from '@mui/icons-material/Favorite'
import NotificationsIcon from '@mui/icons-material/Notifications'
import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import useStyles from './styles'
import { Fragment, useRef } from 'react'

function PageTitle({ page }) {
   const setOfPageList = useRef([
      {
         page: 'carts',
         title1: 'MY',
         title2: 'CART',
         pageIcon: styles => <ShoppingCartIcon className={styles.pageIcon} />,
         navigate: ['Cart'],
      },
      {
         page: 'wishlist',
         title1: 'MY',
         title2: 'WISHLIST',
         pageIcon: styles => <FavoriteIcon className={styles.pageIcon} />,
         navigate: ['Wishlist'],
      },
      {
         page: 'notifications',
         title1: '',
         title2: 'NOTIFICATIONS',
         pageIcon: styles => <NotificationsIcon className={styles.pageIcon} />,
         navigate: ['Notifications'],
      },
   ])

   const setPageTitle = setOfPageList.current.find(set => set.page === page)

   const renderNavigate = () =>
      setPageTitle.navigate.map(n => (
         <Fragment key={n}>
            <ArrowRightAltIcon className={styles.navArrowIcon} />
            <Typography className={styles.nav2}>{n}</Typography>
         </Fragment>
      ))

   const styles = useStyles()

   return (
      <Box className={styles.pageTitle}>
         <Typography className={styles.title}>
            <span className={styles.title1}>{setPageTitle.title1}</span>{' '}
            <span className={styles.title2}>{setPageTitle.title2}</span>
         </Typography>
         <Box className={styles.pageIconWrap}>{setPageTitle.pageIcon(styles)}</Box>
         <Box className={styles.navigator}>
            <Link to='/' className={styles.link}>
               <Typography className={styles.nav1}>Home</Typography>
            </Link>
            {renderNavigate()}
         </Box>
      </Box>
   )
}

export default PageTitle
