import PlusIcon from '@mui/icons-material/Add'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import FacebookIcon from '@mui/icons-material/Facebook'
import FavoriteIcon from '@mui/icons-material/Favorite'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import PinterestIcon from '@mui/icons-material/Pinterest'
import MinusIcon from '@mui/icons-material/Remove'
import TwitterIcon from '@mui/icons-material/Twitter'
import WindowIcon from '@mui/icons-material/Window'
import YouTubeIcon from '@mui/icons-material/YouTube'
import { Box, Button, Grid, IconButton, Tab, Tabs, Typography } from '@mui/material'
import clsx from 'clsx'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import useStyles from './styles'
import BeachAccessIcon from '@mui/icons-material/BeachAccess'

function TabPanel({ children, value, index, ...other }) {
   return (
      <div
         role='tabpanel'
         hidden={value !== index}
         id={`simple-tabpanel-${index}`}
         aria-labelledby={`simple-tab-${index}`}
         {...other}
      >
         {value === index && (
            <Box sx={{ p: 3 }}>
               <Typography>{children}</Typography>
            </Box>
         )}
      </div>
   )
}

function ProductPage() {
   const styles = useStyles()

   const [curThumb, setCurThumb] = useState(1)
   const [curThumbCompleted, setCurThumbCompleted] = useState(1)

   const handleChangeThumb = value => {
      setCurThumb(value)
      setCurThumbCompleted(value)
   }

   const [value, setValue] = useState(0)

   const handleChange = (event, newValue) => {
      setValue(newValue)
   }

   return (
      <Box className={styles.productPage}>
         <Box className={styles.pageTitle}>
            <Typography className={styles.title}>
               <span className={styles.title1}>LOUNGE</span>{' '}
               <span className={styles.title2}>WOODEN CHAIRS</span>
               <Typography className={styles.subtitle}>
                  <span className={styles.title1}>
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                     exercitation tempor incididunt!
                  </span>
               </Typography>
            </Typography>
            <Box className={styles.navigator}>
               <Link to='/' className={styles.link}>
                  <Typography className={styles.nav1}>Home</Typography>
               </Link>
               <ArrowRightAltIcon className={styles.navArrowIcon} />
               <Link to='/categories/chairs' className={styles.link}>
                  <Typography className={styles.nav1}>Chairs</Typography>
               </Link>
               <ArrowRightAltIcon className={styles.navArrowIcon} />
               <Typography className={styles.nav2}>Lounge Wooden Chairs</Typography>
            </Box>
         </Box>

         <Box className={styles.main}>
            <Box className={styles.productContentTop}>
               <Box className={styles.productContentLeft}>
                  <Box className={styles.thumbWrap}>
                     {curThumbCompleted === 1 ? (
                        <Box className={styles.productThumb1} />
                     ) : curThumbCompleted === 2 ? (
                        <Box className={styles.productThumb2} />
                     ) : (
                        <Box className={styles.productThumb3} />
                     )}
                     <Box className={styles.productLabel}>
                        <Box className={styles.onSale}>ON SALE</Box>
                        <Box className={styles.new}>New</Box>
                     </Box>
                  </Box>

                  <Box className={styles.thumbNumber}>
                     <Box className={styles.thumbNumberBtn} onClick={() => handleChangeThumb(1)}>
                        <Box
                           className={clsx(styles.subThumbNumber, {
                              [styles.subThumbNumberActive]: curThumb === 1,
                           })}
                        />
                     </Box>
                     <Box className={styles.thumbNumberBtn} onClick={() => handleChangeThumb(2)}>
                        <Box
                           className={clsx(styles.subThumbNumber, {
                              [styles.subThumbNumberActive]: curThumb === 2,
                           })}
                        />
                     </Box>
                     <Box className={styles.thumbNumberBtn} onClick={() => handleChangeThumb(3)}>
                        <Box
                           className={clsx(styles.subThumbNumber, {
                              [styles.subThumbNumberActive]: curThumb === 3,
                           })}
                        />
                     </Box>
                  </Box>
               </Box>

               <Box className={styles.productContentRight}>
                  <Box className={styles.productHeading}>
                     <Typography className={styles.productName}>LOUNGE WOODEN CHAIRS</Typography>
                     <Box className={styles.productPageWrap}>
                        <button className={styles.productPageBtn}>
                           <ChevronLeftIcon className={styles.prevProductIcon} />
                        </button>
                        <button className={styles.productPageBtn}>
                           <WindowIcon className={styles.moreProductIcon} />
                        </button>
                        <button className={styles.productPageBtn}>
                           <ChevronRightIcon className={styles.nextProductIcon} />
                        </button>
                     </Box>
                  </Box>
                  <p className={styles.productPrice} title='$39.00'>
                     <span className={styles.productPrevPrice}>$89.00</span>
                     <span className={styles.productCurPrive}>$39.00</span>
                  </p>
                  <Typography className={styles.descriptionTop}>
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                     incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                     nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Typography>
                  <Box className={styles.cartWrap}>
                     <Box className={styles.quantityWrap}>
                        <Button className={styles.decQuantityBtn}>
                           <MinusIcon className={styles.decIcon} />
                        </Button>
                        <input className={styles.quantityInput} type='text' />
                        <Button className={styles.incQuantityBtn}>
                           <PlusIcon className={styles.incIcon} />
                        </Button>
                     </Box>

                     <Button className={styles.addToCartBtn}>ADD TO CARD</Button>

                     <IconButton className={styles.favBtn}>
                        {/* <FavoriteBorderIcon className={styles.favIcon} /> */}
                        <FavoriteIcon className={styles.favIcon} />
                     </IconButton>
                  </Box>
                  <Typography className={styles.manufacture}>
                     SKU: <span className={styles.manufactureDate}>4569HZ-1-1-1.</span>
                  </Typography>
                  <Typography className={styles.categories}>
                     Categories:{' '}
                     <Link to='/categories/chairs' className={styles.categorieLink}>
                        Chairs
                     </Link>
                  </Typography>
                  <Box className={styles.tags}>
                     Tags:
                     <Box className={styles.tag}>dress</Box>
                     <Box className={styles.tag}>chairs</Box>
                     <Box className={styles.tag}>dress</Box>
                  </Box>
                  <Typography className={styles.share}>
                     Share:
                     <Box className={styles.socialLinkWrapper}>
                        <a
                           href='https://www.facebook.com/'
                           target='_blank'
                           rel='noreferrer'
                           className={styles.socialLink}
                        >
                           <FacebookIcon className={styles.socialIcon} />
                        </a>
                        <a
                           href='https://twitter.com/'
                           target='_blank'
                           rel='noreferrer'
                           className={styles.socialLink}
                        >
                           <TwitterIcon className={styles.socialIcon} />
                        </a>
                        <a
                           href='https://www.linkedin.com/'
                           target='_blank'
                           rel='noreferrer'
                           className={styles.socialLink}
                        >
                           <LinkedInIcon className={styles.socialIcon} />
                        </a>
                        <a
                           href='https://www.instagram.com/'
                           target='_blank'
                           rel='noreferrer'
                           className={styles.socialLink}
                        >
                           <InstagramIcon className={styles.socialIcon} />
                        </a>
                        <a
                           href='https://www.youtube.com/'
                           target='_blank'
                           rel='noreferrer'
                           className={styles.socialLink}
                        >
                           <YouTubeIcon className={styles.socialIcon} />
                        </a>
                        <a
                           href='https://www.pinterest.com/'
                           target='_blank'
                           rel='noreferrer'
                           className={styles.socialLink}
                        >
                           <PinterestIcon className={styles.socialIcon} />
                        </a>
                     </Box>
                  </Typography>
               </Box>
            </Box>

            <Box className={styles.productContentBottom}>
               <Box className={styles.tabs}>
                  <Tabs value={value} onChange={handleChange} className={styles.tabHeadings}>
                     <Tab label='DESCRIPTION' className={styles.tabHeading} />
                     <Tab label='ADDITIONAL INFO' className={styles.tabHeading} />
                     <Tab label='REVIEWS' className={styles.tabHeading} />
                  </Tabs>
                  <TabPanel value={value} index={0} className={styles.tabPanel}>
                     <Typography className={styles.descriptionBottom}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                     </Typography>
                     <Grid container spacing={2}>
                        <Grid item md={4} xs={12} style={{ display: 'flex' }}>
                           <IconButton>
                              <BeachAccessIcon />
                           </IconButton>
                           <Typography>
                              Lorem ipsum dolor sit ametcon sectetur adipisicing elit sed.
                           </Typography>
                        </Grid>
                        <Grid item md={4} xs={12} style={{ display: 'flex' }}>
                           <IconButton>
                              <BeachAccessIcon />
                           </IconButton>
                           <Typography>
                              Lorem ipsum dolor sit ametcon sectetur adipisicing elit sed.
                           </Typography>
                        </Grid>
                        <Grid item md={4} xs={12} style={{ display: 'flex' }}>
                           <IconButton>
                              <BeachAccessIcon />
                           </IconButton>
                           <Typography>
                              Lorem ipsum dolor sit ametcon sectetur adipisicing elit sed.
                           </Typography>
                        </Grid>
                        <Grid item md={4} xs={12} style={{ display: 'flex' }}>
                           <IconButton>
                              <BeachAccessIcon />
                           </IconButton>
                           <Typography>
                              Lorem ipsum dolor sit ametcon sectetur adipisicing elit sed.
                           </Typography>
                        </Grid>
                        <Grid item md={4} xs={12} style={{ display: 'flex' }}>
                           <IconButton>
                              <BeachAccessIcon />
                           </IconButton>
                           <Typography>
                              Lorem ipsum dolor sit ametcon sectetur adipisicing elit sed.
                           </Typography>
                        </Grid>
                        <Grid item xs={4} style={{ display: 'flex' }}>
                           <IconButton>
                              <BeachAccessIcon />
                           </IconButton>
                           <Typography>
                              Lorem ipsum dolor sit ametcon sectetur adipisicing elit sed.
                           </Typography>
                        </Grid>
                     </Grid>
                  </TabPanel>
                  <TabPanel value={value} index={1} className={styles.tabPanel}>
                     Item Two
                  </TabPanel>
                  <TabPanel value={value} index={2} className={styles.tabPanel}>
                     Item Three
                  </TabPanel>
               </Box>

               <Box className={styles.coupon}>
                  <Box className={styles.innerCoupon}>
                     <p className={styles.couponPrice}>$5</p>
                     <p className={styles.couponTitle}>
                        COUPON <span className={styles.couponTitle1}>FOR</span>{' '}
                        <span className={styles.couponTitle2}>FREE</span>
                     </p>
                     <p className={styles.couponSubTitle}>Just Signup Fot Out Newsletter</p>

                     <Box className={styles.couponSubscribe}>
                        <input
                           placeholder='Enter Your Email...'
                           className={styles.couponInputEmail}
                        />
                        <button className={styles.couponSignUpBtn}>SIGN UP NOW!</button>
                     </Box>
                  </Box>
               </Box>

               <Box className={styles.moreDetail}></Box>

               <Box className={styles.productIllustrations}></Box>

               <Box className={styles.theShopOwner}></Box>

               <Box className={styles.relatedProducts}></Box>

               <Box className={styles.widget}></Box>
            </Box>
         </Box>
      </Box>
   )
}

export default ProductPage
