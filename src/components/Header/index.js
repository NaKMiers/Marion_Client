import ClearIcon from '@mui/icons-material/Clear'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import MenuIcon from '@mui/icons-material/Menu'
import NotificationsIcon from '@mui/icons-material/Notifications'
import PinterestIcon from '@mui/icons-material/Pinterest'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import TwitterIcon from '@mui/icons-material/Twitter'
import YouTubeIcon from '@mui/icons-material/YouTube'
import {
   Avatar,
   Collapse,
   List,
   ListItemAvatar,
   ListItemButton,
   ListItemIcon,
   ListItemText,
   Paper,
   TextField,
} from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Badge from '@mui/material/Badge'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Notify from '../Notify'
import useStyles from './styles'

function Header() {
   const [isShowNavModal, setShowNavModal] = useState(false)
   const [isOpenMenu, setOpenMenu] = useState(true)
   const [anchorElAvt, setAnchorElAvt] = useState(null)
   const [anchorElNotify, setAnchorElNotify] = useState(null)
   const [scrollPosition, setScrollPosition] = useState()
   const styles = useStyles()

   const handleShowNav = () => {
      setShowNavModal(prev => !prev)
   }

   const handleisOpenMenu = () => {
      setOpenMenu(!isOpenMenu)
   }

   const handleMenuAvt = event => {
      setAnchorElAvt(event.currentTarget)
   }
   const handleMenuNotify = event => {
      setAnchorElNotify(event.currentTarget)
   }

   const handleCloseAvt = () => {
      setAnchorElAvt(null)
   }

   const handleCloseNotify = () => {
      setAnchorElNotify(null)
   }

   const handleScroll = () => {
      setScrollPosition(window.scrollY)
   }

   useEffect(() => {
      document.addEventListener('scroll', handleScroll)

      return () => {
         document.removeEventListener('scroll', handleScroll)
      }
   }, [])

   return (
      <AppBar className={clsx(styles.header, { [styles.headerScroll]: scrollPosition })}>
         <Toolbar className={clsx(styles.toolbar, { [styles.tollbarScroll]: scrollPosition })}>
            <Typography className={clsx(styles.logo, { [styles.logoScroll]: scrollPosition })}>
               <Link to='/'>Marion</Link>
            </Typography>

            <Box className={styles.search}>
               <TextField
                  variant='outlined'
                  className={styles.searchTextfiled}
                  placeholder='Search...'
                  InputProps={{
                     startAdornment: <SearchIcon />,
                     className: styles.inputProp,
                  }}
               />
            </Box>

            <Box className={styles.headerBtnWrap}>
               <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                  <Link to='/carts'>
                     <IconButton className={styles.iconBtn}>
                        <Badge badgeContent={4} color='warning'>
                           <ShoppingCartIcon />
                        </Badge>
                     </IconButton>
                  </Link>

                  <IconButton className={styles.iconBtn} onClick={handleMenuNotify}>
                     <Badge badgeContent={17} color='error'>
                        <NotificationsIcon />
                     </Badge>
                  </IconButton>
                  <Menu
                     anchorEl={anchorElNotify}
                     open={Boolean(anchorElNotify)}
                     onClose={handleCloseNotify}
                     className={styles.notificationDialog}
                     style={{ top: scrollPosition === 0 ? 10 : 12 }}
                  >
                     <Notify inHeader />
                     <Notify inHeader />
                     <Notify inHeader />
                  </Menu>

                  <IconButton className={styles.iconAvtBtn} onClick={handleMenuAvt}>
                     <Avatar className={styles.avatar} alt='avatar' src='https://bom.so/EKb8Yx' />
                  </IconButton>
                  <Menu
                     anchorEl={anchorElAvt}
                     open={Boolean(anchorElAvt)}
                     onClose={handleCloseAvt}
                     style={{ top: scrollPosition === 0 ? 10 : 12 }}
                  >
                     <MenuItem onClick={handleCloseAvt}>
                        <Link to='/my-account' className={styles.link} onClick={handleShowNav}>
                           My Account
                        </Link>
                     </MenuItem>
                     <MenuItem onClick={handleCloseAvt}>
                        <Link to='/purchase-order' className={styles.link}>
                           Purchase Order
                        </Link>
                     </MenuItem>
                     <MenuItem onClick={handleCloseAvt}>
                        <Link to='/wishlist' className={styles.link}>
                           Wishlist
                        </Link>
                     </MenuItem>
                  </Menu>
               </Box>

               <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                  <IconButton className={styles.menuBtn} onClick={handleShowNav}>
                     <MenuIcon className={styles.menuIcon} />
                  </IconButton>
               </Box>

               <Box className={clsx(styles.navModal, { [styles.navModalActive]: isShowNavModal })}>
                  <Box className={styles.navWrap}>
                     <Paper className={styles.navPager}>
                        <Box className={styles.navSearch}>
                           <TextField
                              variant='outlined'
                              className={styles.searchTextfiledModal}
                              placeholder='Search...'
                              InputProps={{
                                 startAdornment: <SearchIcon />,
                                 className: styles.inputPropModal,
                              }}
                           />
                           <IconButton className={styles.closeModalBtn} onClick={handleShowNav}>
                              <ClearIcon className={styles.closeModalIcon} />
                           </IconButton>
                        </Box>

                        <List className={styles.navList}>
                           <ListItemButton onClick={handleisOpenMenu}>
                              <ListItemAvatar>
                                 <Avatar alt='avt' src='https://bom.so/PFCAqg' />
                              </ListItemAvatar>
                              <ListItemText primary='nakmiers' />
                              {isOpenMenu ? <ExpandLess /> : <ExpandMore />}
                           </ListItemButton>
                           <Collapse in={isOpenMenu} timeout='auto' unmountOnExit>
                              <List component='div' disablePadding>
                                 <Link
                                    to='/my-account'
                                    className={styles.link}
                                    onClick={handleShowNav}
                                 >
                                    <ListItemButton className={styles.collapseItem}>
                                       <ListItemText primary='My Account' />
                                    </ListItemButton>
                                 </Link>

                                 <Link
                                    to='/purchase-order'
                                    className={styles.link}
                                    onClick={handleShowNav}
                                 >
                                    <ListItemButton className={styles.collapseItem}>
                                       <ListItemText primary='Purchase Order' />
                                    </ListItemButton>
                                 </Link>

                                 <Link
                                    to='/wishlist'
                                    className={styles.link}
                                    onClick={handleShowNav}
                                 >
                                    <ListItemButton className={styles.collapseItem}>
                                       <ListItemText primary='Wishlist' />
                                    </ListItemButton>
                                 </Link>
                              </List>
                           </Collapse>

                           <Link
                              to='/notifications'
                              className={styles.link}
                              onClick={handleShowNav}
                           >
                              <ListItemButton>
                                 <ListItemIcon className={styles.listItemIcon}>
                                    <NotificationsIcon className={styles.navIcon} />
                                 </ListItemIcon>
                                 <ListItemText primary='Notifications' />
                                 <Box className={styles.count}>6</Box>
                              </ListItemButton>
                           </Link>
                           <Link to='/carts' className={styles.link} onClick={handleShowNav}>
                              <ListItemButton>
                                 <ListItemIcon className={styles.listItemIcon}>
                                    <ShoppingCartIcon className={styles.navIcon} />
                                 </ListItemIcon>
                                 <ListItemText primary='Cart' />
                                 <Box className={styles.count}>7</Box>
                              </ListItemButton>
                           </Link>
                           <Box className={styles.footerSocial}>
                              <a
                                 href='https://www.facebook.com/'
                                 target='_blank'
                                 rel='noreferrer'
                                 className={styles.link}
                              >
                                 <FacebookIcon
                                    className={styles.footerSocialIcon}
                                    style={{ color: '#0a82ed' }}
                                 />
                              </a>
                              <a
                                 href='https://twitter.com/'
                                 target='_blank'
                                 rel='noreferrer'
                                 className={styles.link}
                              >
                                 <InstagramIcon
                                    className={styles.footerSocialIcon}
                                    style={{ color: '#f5bd5c' }}
                                 />
                              </a>
                              <a
                                 href='https://www.linkedin.com/'
                                 target='_blank'
                                 rel='noreferrer'
                                 className={styles.link}
                              >
                                 <LinkedInIcon
                                    className={styles.footerSocialIcon}
                                    style={{ color: '#0a66c2' }}
                                 />
                              </a>
                              <a
                                 href='https://www.instagram.com/'
                                 target='_blank'
                                 rel='noreferrer'
                                 className={styles.link}
                              >
                                 <PinterestIcon
                                    className={styles.footerSocialIcon}
                                    style={{ color: '#e60023' }}
                                 />
                              </a>
                              <a
                                 href='https://www.youtube.com/'
                                 target='_blank'
                                 rel='noreferrer'
                                 className={styles.link}
                              >
                                 <TwitterIcon
                                    className={styles.footerSocialIcon}
                                    style={{ color: '#50abf1' }}
                                 />
                              </a>
                              <a
                                 href='https://www.pinterest.com/'
                                 target='_blank'
                                 rel='noreferrer'
                                 className={styles.link}
                              >
                                 <YouTubeIcon
                                    className={styles.footerSocialIcon}
                                    style={{ color: '#ff0000' }}
                                 />
                              </a>
                           </Box>
                        </List>
                     </Paper>
                  </Box>
               </Box>
            </Box>
         </Toolbar>
      </AppBar>
   )
}

export default Header
