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
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

import {
   Accordion,
   AccordionDetails,
   AccordionSummary,
   Avatar,
   Box,
   Button,
   Checkbox,
   Divider,
   Grid,
   IconButton,
   List,
   ListItem,
   ListItemAvatar,
   ListItemText,
   Rating,
   Tab,
   Tabs,
   Typography,
} from '@mui/material'
import clsx from 'clsx'
import { memo, useState } from 'react'
import { Link } from 'react-router-dom'
import useStyles from './styles'
import BeachAccessIcon from '@mui/icons-material/BeachAccess'
import SpeedIcon from '@mui/icons-material/Speed'
import EventNoteIcon from '@mui/icons-material/EventNote'
import ContentCutIcon from '@mui/icons-material/ContentCut'
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard'
import CachedIcon from '@mui/icons-material/Cached'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'

function ProductPage() {
   const styles = useStyles()

   const [curThumb, setCurThumb] = useState(1)
   const [curThumbCompleted, setCurThumbCompleted] = useState(1)

   const handleChangeThumb = value => {
      setCurThumb(value)
      setCurThumbCompleted(value)
   }

   const [tabValue, setTabValue] = useState(0)
   const handleChangeTab = (event, newValue) => {
      setTabValue(newValue)
   }

   const [ratingValue, setRatingValue] = useState(0)

   return (
      <Box className={styles.productPage}>
         <Box className={styles.pageTitle}>
            <Box className={styles.title}>
               <span className={styles.title1}>LOUNGE</span>{' '}
               <span className={styles.title2}>WOODEN CHAIRS</span>
               <Typography className={styles.subtitle}>
                  <span className={styles.title1}>
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                     exercitation tempor incididunt!
                  </span>
               </Typography>
            </Box>
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

                     <IconButton
                        className={styles.thumbNextBtn}
                        onClick={() => handleChangeThumb(curThumb + 1 > 3 ? 1 : curThumb + 1)}
                     >
                        <NavigateNextIcon className={styles.thumbBtnIcon} />
                     </IconButton>
                     <IconButton
                        className={styles.thumbPrevBtn}
                        onClick={() => handleChangeThumb(curThumb - 1 < 1 ? 3 : curThumb - 1)}
                     >
                        <NavigateBeforeIcon className={styles.thumbBtnIcon} />
                     </IconButton>

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
                  <Box className={clsx(styles.cartWrap, styles.cartWrap1)}>
                     <Box className={styles.quantityWrap}>
                        <Button className={styles.quantityBtn}>
                           <MinusIcon className={styles.quantityIcon} />
                        </Button>
                        <input className={styles.quantityInput} type='text' />
                        <Button className={styles.quantityBtn}>
                           <PlusIcon className={styles.quantityIcon} />
                        </Button>
                     </Box>
                     <Button className={clsx(styles.addToCartBtn, styles.addToCartBtn1)}>
                        ADD TO CARD
                     </Button>
                     SS
                     <IconButton className={styles.favBtn}>
                        <FavoriteBorderIcon className={styles.favIcon} />
                        {/* <FavoriteIcon className={styles.favIcon} /> */}
                     </IconButton>
                  </Box>
                  <Box className={clsx(styles.cartWrap, styles.cartWrap2)}>
                     <Button className={clsx(styles.addToCartBtn, styles.addToCartBtn2)}>
                        ADD TO CARD
                     </Button>
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
                     <span className={styles.socialLinkWrapper}>
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
                     </span>
                  </Typography>
               </Box>
            </Box>

            <Box className={styles.productContentBottom}>
               <Box className={styles.tabs}>
                  <Tabs value={tabValue} onChange={handleChangeTab} className={styles.tabHeadings}>
                     <Tab label='DESCRIPTION' className={styles.tabHeading} />
                     <Tab label='ADDITIONAL INFO' className={styles.tabHeading} />
                     <Tab label='REVIEWS' className={styles.tabHeading} />
                  </Tabs>

                  {tabValue === 0 ? (
                     <Box className={styles.tabPanel}>
                        <Typography className={styles.descriptionBottom}>
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                           commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                           velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                           occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                           mollit anim id est laborum.
                        </Typography>
                        <Grid container spacing={2}>
                           <Grid item md={4} xs={12} className={styles.descItem}>
                              <BeachAccessIcon
                                 className={clsx(styles.descIcon, styles.descIcon1)}
                              />
                              <Typography className={styles.descItemText}>
                                 Lorem ipsum dolor sit ametcon sectetur adipisicing elit sed.
                              </Typography>
                           </Grid>
                           <Grid item md={4} xs={12} className={styles.descItem}>
                              <SpeedIcon className={clsx(styles.descIcon, styles.descIcon2)} />
                              <Typography className={styles.descItemText}>
                                 Lorem ipsum dolor sit ametcon sectetur adipisicing elit sed.
                              </Typography>
                           </Grid>
                           <Grid item md={4} xs={12} className={styles.descItem}>
                              <EventNoteIcon className={clsx(styles.descIcon, styles.descIcon3)} />
                              <Typography className={styles.descItemText}>
                                 Lorem ipsum dolor sit ametcon sectetur adipisicing elit sed.
                              </Typography>
                           </Grid>
                           <Grid item md={4} xs={12} className={styles.descItem}>
                              <ContentCutIcon className={clsx(styles.descIcon, styles.descIcon4)} />
                              <Typography className={styles.descItemText}>
                                 Lorem ipsum dolor sit ametcon sectetur adipisicing elit sed.
                              </Typography>
                           </Grid>
                           <Grid item md={4} xs={12} className={styles.descItem}>
                              <CardGiftcardIcon
                                 className={clsx(styles.descIcon, styles.descIcon5)}
                              />
                              <Typography className={styles.descItemText}>
                                 Lorem ipsum dolor sit ametcon sectetur adipisicing elit sed.
                              </Typography>
                           </Grid>
                           <Grid item md={4} xs={12} className={styles.descItem}>
                              <CachedIcon className={clsx(styles.descIcon, styles.descIcon6)} />
                              <Typography className={styles.descItemText}>
                                 Lorem ipsum dolor sit ametcon sectetur adipisicing elit sed.
                              </Typography>
                           </Grid>
                        </Grid>
                     </Box>
                  ) : tabValue === 1 ? (
                     <Box className={styles.tabPanel}>
                        <table className={styles.addtionalInfoTable}>
                           <tbody>
                              <tr>
                                 <th className={styles.tableHeading}>Weight</th>
                                 <td>0.5 kg</td>
                              </tr>
                              <tr>
                                 <th className={styles.tableHeading}>Demensions</th>
                                 <td>35 x 20 x 56 cm</td>
                              </tr>
                           </tbody>
                        </table>
                     </Box>
                  ) : (
                     <Box className={styles.tabPanel}>
                        <Box className={styles.reviewPanelWrap}>
                           <Box className={styles.otherReviews}>
                              <Typography className={styles.tablePanelHeading}>REVIEWS</Typography>
                              <List className={styles.reviewList}>
                                 <ListItem alignItems='flex-start'>
                                    <ListItemAvatar>
                                       <Avatar alt='Remy Sharp' src='https://bom.so/oM1Xmz' />
                                    </ListItemAvatar>
                                    <ListItemText
                                       primary='Brunch this weekend?'
                                       secondary={
                                          <>
                                             <Typography
                                                sx={{ display: 'inline' }}
                                                component='span'
                                                variant='body2'
                                                color='text.primary'
                                             >
                                                Ali Connors
                                             </Typography>
                                             {" — I'll be in your neighborhood doing errands this…"}
                                          </>
                                       }
                                    />
                                 </ListItem>
                                 <Divider variant='inset' component='li' />
                                 <ListItem alignItems='flex-start'>
                                    <ListItemAvatar>
                                       <Avatar alt='Travis Howard' src='https://bom.so/oM1Xmz' />
                                    </ListItemAvatar>
                                    <ListItemText
                                       primary='Summer BBQ'
                                       secondary={
                                          <>
                                             <Typography
                                                sx={{ display: 'inline' }}
                                                component='span'
                                                variant='body2'
                                                color='text.primary'
                                             >
                                                to Scott, Alex, Jennifer
                                             </Typography>
                                             {" — Wish I could come, but I'm out of town this…"}
                                          </>
                                       }
                                    />
                                 </ListItem>
                                 <Divider variant='inset' component='li' />
                                 <ListItem alignItems='flex-start'>
                                    <ListItemAvatar>
                                       <Avatar alt='Cindy Baker' src='https://bom.so/oM1Xmz' />
                                    </ListItemAvatar>
                                    <ListItemText
                                       primary='Oui Oui'
                                       secondary={
                                          <>
                                             <Typography
                                                sx={{ display: 'inline' }}
                                                component='span'
                                                variant='body2'
                                                color='text.primary'
                                             >
                                                Sandra Adams
                                             </Typography>
                                             {
                                                ' — Do you have Paris recommendations? Have you ever…'
                                             }
                                          </>
                                       }
                                    />
                                 </ListItem>
                              </List>
                           </Box>

                           <Box className={styles.myReivew}>
                              <Typography className={styles.tablePanelHeading}>
                                 ADD A REVIEW
                              </Typography>
                              <Typography>Rating *</Typography>
                              <Rating
                                 name='simple-controlled'
                                 value={ratingValue}
                                 onChange={(event, newValue) => {
                                    setRatingValue(newValue)
                                 }}
                              />

                              <p>My Review *</p>
                              <textarea className={styles.myReviewInput}></textarea>

                              <p>Name *</p>
                              <input className={styles.myReviewInfoInput} />

                              <p>Email *</p>
                              <input className={styles.myReviewInfoInput} />
                              <p />
                              <Box className={styles.saveInfoReviewBtnWrap}>
                                 <Checkbox color='success' className={styles.saveInfoReviewBtn} />
                                 <p className={styles.text}>
                                    Save my name, email, and website in this browser for the next
                                    time i commnemt.
                                 </p>
                              </Box>
                           </Box>
                        </Box>
                     </Box>
                  )}
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

               <Box className={styles.moreDetail}>
                  <Accordion className={styles.accordion}>
                     <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        className={styles.accordionSummary}
                     >
                        <Typography className={styles.accordionHeading}>QUALITY</Typography>
                     </AccordionSummary>
                     <AccordionDetails className={styles.accordionDetails}>
                        <Typography
                           className={styles.accordionDetail}
                           style={{ width: 'calc(100%/2)' }}
                        >
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                           tempor incididunt ut labore et dolore magna aliqua. Ut enimvelit esse
                           cillum dolore eu ad minim veniam, quis nostrud exercitation ullamco
                           laboris nisi ut aliquip ex ea commodo consequat.
                        </Typography>
                        <Typography
                           className={styles.accordionDetail}
                           style={{ width: 'calc(100%/2)' }}
                        >
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                           tempor incididunt ut labore et dolore magna aliqua. Ut enimvelit esse
                           cillum dolore eu ad minim veniam, quis nostrud exercitation ullamco
                           laboris nisi ut aliquip ex ea commodo consequat.
                        </Typography>
                        <Typography
                           className={styles.accordionDetail}
                           style={{ width: 'calc(100%/2)' }}
                        >
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                           tempor incididunt ut labore et dolore magna aliqua. Ut enimvelit esse
                           cillum dolore eu ad minim veniam, quis nostrud exercitation ullamco
                           laboris nisi ut aliquip ex ea commodo consequat.
                        </Typography>
                     </AccordionDetails>
                  </Accordion>

                  <Accordion className={styles.accordion}>
                     <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        className={styles.accordionSummary}
                     >
                        <Typography className={styles.accordionHeading}>BRAND</Typography>
                     </AccordionSummary>
                     <AccordionDetails className={styles.accordionDetails}>
                        <img
                           src='https://bom.so/UvcXWo'
                           alt='brand'
                           className={styles.accordionBrandImg}
                        />
                        <Typography className={styles.accordionDetail} style={{ width: '70%' }}>
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                           tempor incididunt ut labore et dolore magna aliqua. Ut enimvelit esse
                           cillum dolore eu ad minim veniam, quis nostrud exercitation ullamco
                           laboris nisi ut aliquip ex ea commodo consequat.
                        </Typography>
                     </AccordionDetails>
                  </Accordion>

                  <Accordion className={styles.accordion}>
                     <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        className={styles.accordionSummary}
                     >
                        <Typography className={styles.accordionHeading}>GUARANTEE</Typography>
                     </AccordionSummary>
                     <AccordionDetails className={styles.accordionDetails}>
                        <Typography
                           className={styles.accordionDetail}
                           style={{ width: 'calc(100%/2)' }}
                        >
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                           tempor incididunt ut labore et dolore magna aliqua. Ut enimvelit esse
                           cillum dolore eu ad minim veniam, quis nostrud exercitation ullamco
                           laboris nisi ut aliquip ex ea commodo consequat.
                        </Typography>
                        <Typography
                           className={styles.accordionDetail}
                           style={{ width: 'calc(100%/2)' }}
                        >
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                           tempor incididunt ut labore et dolore magna aliqua. Ut enimvelit esse
                           cillum dolore eu ad minim veniam, quis nostrud exercitation ullamco
                           laboris nisi ut aliquip ex ea commodo consequat.
                        </Typography>
                        <Typography
                           className={styles.accordionDetail}
                           style={{ width: 'calc(100%/2)' }}
                        >
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                           tempor incididunt ut labore et dolore magna aliqua. Ut enimvelit esse
                           cillum dolore eu ad minim veniam, quis nostrud exercitation ullamco
                           laboris nisi ut aliquip ex ea commodo consequat.
                        </Typography>
                     </AccordionDetails>
                  </Accordion>

                  <Accordion className={styles.accordion}>
                     <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        className={styles.accordionSummary}
                     >
                        <Typography className={styles.accordionHeading}>STYLE</Typography>
                     </AccordionSummary>
                     <AccordionDetails className={styles.accordionDetails}>
                        <img
                           src='https://bom.so/Is5i4i'
                           alt='brand'
                           className={styles.accordionBrandImg}
                        />
                        <Typography className={styles.accordionDetail} style={{ width: '70%' }}>
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                           tempor incididunt ut labore et dolore magna aliqua. Ut enimvelit esse
                           cillum dolore eu ad minim veniam, quis nostrud exercitation ullamco
                           laboris nisi ut aliquip ex ea commodo consequat.
                        </Typography>
                     </AccordionDetails>
                  </Accordion>
               </Box>

               <Grid container className={styles.productIllustrations}>
                  <Grid item className={styles.prIllItem}>
                     <Box className={styles.prIllItemImg1} />
                  </Grid>

                  <Grid item className={clsx(styles.prIllItem, styles.prIllItemNoImg)}>
                     <Typography className={styles.prIllHeading}>LOREM IPSUM DOLOR SIT!</Typography>
                     <Typography className={styles.prIllDesc}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation. Ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum.
                     </Typography>
                  </Grid>

                  <Grid item className={clsx(styles.prIllItem, styles.prIllItemNoImg)}>
                     <Typography className={styles.prIllHeading}>LOREM IPSUM DOLOR SIT!</Typography>
                     <Typography className={styles.prIllDesc}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore.
                     </Typography>
                     <Typography className={styles.prIllDesc}>
                        Lorem ipsum dolor sit amet, consectetur dipisicing elit sed do eiusmod
                     </Typography>
                     <Typography className={styles.prIllDesc}>
                        Dolore magna aliqua enim ad minim veniam, quis nostrud
                     </Typography>
                     <Typography className={styles.prIllDesc}>
                        Ex ea commodo consequat lorem ipsum dolor sit amet enim
                     </Typography>
                  </Grid>

                  <Grid item className={styles.prIllItem}>
                     <Box className={styles.prIllItemImg2} />
                  </Grid>
               </Grid>

               <Box className={styles.relatedProductions}>
                  <Typography className={styles.relativeProductHeading}>
                     RELATIVE PRODUCTS
                  </Typography>
                  <Box className={styles.relatedProducts}>
                     <Box className={styles.relatedProductItem}>
                        <Box className={styles.relatedProductItemInner}>
                           <Box className={clsx(styles.productThumb, styles.thumbStylishWatch)}>
                              <Link to='/carts'>
                                 <Box className={clsx(styles.productImg, styles.stylishWatchImg)} />
                              </Link>
                           </Box>

                           <Box className={styles.productCaption}>
                              <Rating
                                 name='read-only'
                                 value={4}
                                 readOnly
                                 className={styles.ratingRelatedPr}
                              />
                              <p className={styles.relatedProductCategorie}>ACCESSORIES</p>
                              <p className={styles.relatedProductName}>Stylish Watch</p>
                              <p className={styles.relatedProductPrice} title='$35.00'>
                                 <span className={styles.relatedProductCurPrice}>$35.00</span>
                              </p>
                              <IconButton className={styles.relatedPrBtn}>
                                 <FavoriteIcon className={styles.relatedPrIcon} />
                              </IconButton>
                           </Box>
                        </Box>
                     </Box>

                     <Box className={styles.relatedProductItem}>
                        <Box className={styles.relatedProductItemInner}>
                           <Box className={clsx(styles.productThumb, styles.thumbFloorLamp)}>
                              <Link to='/carts'>
                                 <Box className={clsx(styles.productImg, styles.floorLampImg)} />
                              </Link>
                           </Box>

                           <Box className={styles.productCaption}>
                              <Rating
                                 name='read-only'
                                 value={3}
                                 readOnly
                                 className={styles.ratingRelatedPr}
                              />
                              <p className={styles.relatedProductCategorie}>LAMPS</p>
                              <p className={styles.relatedProductName}>Floor Lamp</p>
                              <p className={styles.relatedProductPrice} title='$39.99'>
                                 <span className={styles.relatedProductCurPrice}>$39.99</span>
                              </p>
                              <IconButton className={styles.relatedPrBtn}>
                                 <FavoriteIcon className={styles.relatedPrIcon} />
                              </IconButton>
                           </Box>
                        </Box>
                     </Box>

                     <Box className={styles.relatedProductItem}>
                        <Box className={styles.relatedProductItemInner}>
                           <Box className={clsx(styles.productThumb, styles.thumbNewFashionBag)}>
                              <Link to='/carts'>
                                 <Box
                                    className={clsx(styles.productImg, styles.newFashionBagImg)}
                                 />
                              </Link>
                           </Box>

                           <Box className={styles.productCaption}>
                              <Rating
                                 name='read-only'
                                 value={5}
                                 readOnly
                                 className={styles.ratingRelatedPr}
                              />
                              <p className={styles.relatedProductCategorie}>ACCESSORIES</p>
                              <p className={styles.relatedProductName}>New Fashion Bag</p>
                              <p className={styles.relatedProductPrice} title='$39.99'>
                                 <span className={styles.relatedProductPrevPrice}>$79.99</span>
                                 <span className={styles.relatedProductCurPrice}>$39.99</span>
                              </p>
                              <IconButton className={styles.relatedPrBtn}>
                                 <FavoriteIcon className={styles.relatedPrIcon} />
                              </IconButton>
                              <IconButton className={styles.relatedPrBtn}>
                                 <AddShoppingCartIcon className={styles.relatedPrIcon} />
                              </IconButton>
                           </Box>
                        </Box>
                     </Box>

                     <Box className={styles.relatedProductItem}>
                        <Box className={styles.relatedProductItemInner}>
                           <Box className={clsx(styles.productThumb, styles.thumbHangingLamp)}>
                              <Link to='/carts'>
                                 <Box className={clsx(styles.productImg, styles.hangingLampImg)} />
                              </Link>
                           </Box>

                           <Box className={styles.productCaption}>
                              <Rating
                                 name='read-only'
                                 value={3}
                                 readOnly
                                 className={styles.ratingRelatedPr}
                              />
                              <p className={styles.relatedProductCategorie}>LAMPS</p>
                              <p className={styles.relatedProductName}>Hanging Lamp</p>
                              <p className={styles.relatedProductPrice} title='$39.99'>
                                 <span className={styles.relatedProductCurPrice}>$39.99</span>
                              </p>
                              <IconButton className={styles.relatedPrBtn}>
                                 <FavoriteIcon className={styles.relatedPrIcon} />
                              </IconButton>
                              <IconButton className={styles.relatedPrBtn}>
                                 <AddShoppingCartIcon className={styles.relatedPrIcon} />
                              </IconButton>
                           </Box>
                        </Box>
                     </Box>
                  </Box>
               </Box>
            </Box>
         </Box>
      </Box>
   )
}

export default memo(ProductPage)
