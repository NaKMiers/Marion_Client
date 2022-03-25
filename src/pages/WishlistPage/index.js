import DoneIcon from '@mui/icons-material/Done'
import FacebookIcon from '@mui/icons-material/Facebook'
import InfoIcon from '@mui/icons-material/Info'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import PinterestIcon from '@mui/icons-material/Pinterest'
import TwitterIcon from '@mui/icons-material/Twitter'
import YouTubeIcon from '@mui/icons-material/YouTube'
import { Box, IconButton, TextField, Typography } from '@mui/material'
import clsx from 'clsx'
import { memo, useRef } from 'react'
import { Link } from 'react-router-dom'
import PageTitle from '../../components/PageTitle'
import WishlistProduct from '../../components/WishlistProduct'
import useStyles from './styles'

function WishlistPage() {
   const socialList = useRef([
      {
         icon: styles => (
            <FacebookIcon className={styles.socialIcon} style={{ color: '#0a82ed' }} />
         ),
         link: 'https://www.facebook.com/',
      },
      {
         icon: styles => (
            <InstagramIcon className={styles.socialIcon} style={{ color: '#f5bd5c' }} />
         ),
         link: 'https://twitter.com/',
      },
      {
         icon: styles => (
            <LinkedInIcon className={styles.socialIcon} style={{ color: '#0a66c2' }} />
         ),
         link: 'https://www.linkedin.com/',
      },
      {
         icon: styles => (
            <PinterestIcon className={styles.socialIcon} style={{ color: '#e60023' }} />
         ),
         link: 'https://www.instagram.com/',
      },
      {
         icon: styles => <TwitterIcon className={styles.socialIcon} style={{ color: '#50abf1' }} />,
         link: 'https://www.youtube.com/',
      },
      {
         icon: styles => <YouTubeIcon className={styles.socialIcon} style={{ color: '#ff0000' }} />,
         link: 'https://www.pinterest.com/',
      },
   ])

   const renderSocials = () =>
      socialList.current.map(s => (
         <a key={s.link} href={s.link} target='_blank' rel='noreferrer' className={styles.link}>
            {s.icon(styles)}
         </a>
      ))

   const styles = useStyles()

   return (
      <Box className={styles.wishlistPage}>
         <PageTitle page='wishlist' />

         <Box className={styles.wishListBody}>
            <Typography className={styles.bodyTitle}>MY WISHLIST ON MARION</Typography>

            <Box className={styles.search}>
               <TextField
                  className={styles.searchTextField}
                  InputProps={{
                     className: styles.searchInputProp,
                  }}
                  placeholder='Search...'
               />
               <IconButton className={styles.doneBtn}>
                  <DoneIcon className={styles.doneIcon} />
               </IconButton>
            </Box>

            <Typography className={styles.amount}>
               You Have <span className={styles.quantity}>2 Items</span> In Wishlist:
            </Typography>

            <Box className={styles.productList}>
               <table className={styles.table}>
                  <thead>
                     <tr className={styles.tableHeader}>
                        <th className={clsx(styles.tableField, styles.removeHeader)}></th>
                        <th className={clsx(styles.tableField, styles.productHeader)}>PRODUCT</th>
                        <th className={clsx(styles.tableField, styles.priceHeader)}>PRICE</th>
                        <th className={clsx(styles.tableField, styles.stockStatusHeader)}>
                           STOCK STATUS
                        </th>
                        <th className={clsx(styles.tableField, styles.emptyHeader)}></th>
                     </tr>
                  </thead>
                  <tbody>
                     <WishlistProduct />
                     <WishlistProduct />
                     <WishlistProduct />
                  </tbody>
               </table>
            </Box>
            <Box className={styles.productListRPS}>
               <WishlistProduct rps />
               <WishlistProduct rps />
            </Box>

            <Box className={styles.shareWishlistWrap}>
               <Typography className={styles.shareWishlist}>Share your wishlist on:</Typography>
               <Box className={styles.socials}>{renderSocials()}</Box>
            </Box>

            <Box className={styles.emptyWishlistWrap}>
               <Box className={styles.emptyWishlist}>
                  <Box className={styles.emptyWishlistIconStroke}>
                     <InfoIcon className={styles.emptyWishlistIcon} />
                  </Box>
                  <Typography className={styles.emptyText}>
                     Your wishlist is currently empty.
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

export default memo(WishlistPage)
