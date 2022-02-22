import { Box, Button, IconButton, TextField, Typography } from '@mui/material'
import useStyles from './styles'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import { Link } from 'react-router-dom'
import DoneIcon from '@mui/icons-material/Done'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import PinterestIcon from '@mui/icons-material/Pinterest'
import TwitterIcon from '@mui/icons-material/Twitter'
import YouTubeIcon from '@mui/icons-material/YouTube'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import RemoveIcon from '@mui/icons-material/HighlightOff'
import InfoIcon from '@mui/icons-material/Info'
import clsx from 'clsx'

function WishlistPage() {
   const styles = useStyles()

   return (
      <Box className={styles.wishlistPage}>
         <Box className={styles.pageTitle}>
            <Typography className={styles.title}>
               <span className={styles.title1}>MY</span>{' '}
               <span className={styles.title2}>WISHLIST</span>
            </Typography>
            <Box className={styles.pageIconWrap}>
               <FavoriteIcon className={styles.pageIcon} />
            </Box>
            <Box className={styles.navigator}>
               <Link to='/' className={styles.link}>
                  <Typography className={styles.nav1}>Home</Typography>
               </Link>
               <ArrowRightAltIcon className={styles.navArrowIcon} />
               <Typography className={styles.nav2}>Wishlist</Typography>
            </Box>
         </Box>

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
                     <tr className={styles.tableProducts}>
                        <td className={clsx(styles.tableData, styles.removeTableData)}>
                           <IconButton>
                              <RemoveIcon className={styles.removeIcon} />
                           </IconButton>
                        </td>
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
                  </tbody>
               </table>
            </Box>
            <Box className={styles.productListRPS}>
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
                        <th className={clsx(styles.tableField, styles.stockStatusHeaderRPS)}>
                           STATUS
                        </th>
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
            </Box>

            <Box className={styles.shareWishlistWrap}>
               <Typography className={styles.shareWishlist}>Share your wishlist on:</Typography>
               <Box className={styles.socials}>
                  <a
                     href='https://www.facebook.com/'
                     target='_blank'
                     rel='noreferrer'
                     className={styles.link}
                  >
                     <FacebookIcon className={styles.socialIcon} style={{ color: '#0a82ed' }} />
                  </a>
                  <a
                     href='https://twitter.com/'
                     target='_blank'
                     rel='noreferrer'
                     className={styles.link}
                  >
                     <InstagramIcon className={styles.socialIcon} style={{ color: '#f5bd5c' }} />
                  </a>
                  <a
                     href='https://www.linkedin.com/'
                     target='_blank'
                     rel='noreferrer'
                     className={styles.link}
                  >
                     <LinkedInIcon className={styles.socialIcon} style={{ color: '#0a66c2' }} />
                  </a>
                  <a
                     href='https://www.instagram.com/'
                     target='_blank'
                     rel='noreferrer'
                     className={styles.link}
                  >
                     <PinterestIcon className={styles.socialIcon} style={{ color: '#e60023' }} />
                  </a>
                  <a
                     href='https://www.youtube.com/'
                     target='_blank'
                     rel='noreferrer'
                     className={styles.link}
                  >
                     <TwitterIcon className={styles.socialIcon} style={{ color: '#50abf1' }} />
                  </a>
                  <a
                     href='https://www.pinterest.com/'
                     target='_blank'
                     rel='noreferrer'
                     className={styles.link}
                  >
                     <YouTubeIcon className={styles.socialIcon} style={{ color: '#ff0000' }} />
                  </a>
               </Box>
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

export default WishlistPage
