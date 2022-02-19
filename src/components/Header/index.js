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
   CardMedia,
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
import { useState } from 'react'
import useStyles from './styles'

function Header() {
   const [checked, setChecked] = useState(false)

   const handleShowNav = () => {
      setChecked(prev => !prev)
   }

   const [openAvt, setOpenAvt] = useState(true)

   const handleOpenAvt = () => {
      setOpenAvt(!openAvt)
   }
   const styles = useStyles()

   const [anchorElAvt, setAnchorElAvt] = useState(null)
   const [anchorElNotify, setAnchorElNotify] = useState(null)

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

   console.log('checked: ', checked)

   return (
      <AppBar className={styles.header}>
         <Toolbar className={styles.toolbar}>
            <Typography className={styles.logo}>Marion</Typography>
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
                  <IconButton className={styles.iconBtn}>
                     <Badge badgeContent={4} color='warning'>
                        <ShoppingCartIcon />
                     </Badge>
                  </IconButton>

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
                  >
                     <MenuItem onClick={handleCloseNotify} className={styles.notify}>
                        <CardMedia
                           className={styles.notifyThumb}
                           component='img'
                           image='https://bom.so/EKb8Yx'
                           alt='thumb'
                        />
                        <Box className={styles.notifyContent}>
                           <Typography className={styles.notifyTitle}>
                              Notify 1awdawdawdawdawdawdawdawdawdawdawdawdawdawd
                           </Typography>
                           <Typography className={styles.notifyDesc}>Description 1</Typography>
                        </Box>
                     </MenuItem>
                     <MenuItem onClick={handleCloseNotify} className={styles.notify}>
                        <CardMedia
                           className={styles.notifyThumb}
                           component='img'
                           image='https://bom.so/EKb8Yx'
                           alt='thumb'
                        />
                        <Box className={styles.notifyContent}>
                           <Typography className={styles.notifyTitle}>Notify 1</Typography>
                           <Typography className={styles.notifyDesc}>Description 1</Typography>
                        </Box>
                     </MenuItem>
                  </Menu>

                  <IconButton className={styles.iconAvtBtn} onClick={handleMenuAvt}>
                     <Avatar className={styles.avatar} alt='avatar' src='https://bom.so/EKb8Yx' />
                  </IconButton>
                  <Menu anchorEl={anchorElAvt} open={Boolean(anchorElAvt)} onClose={handleCloseAvt}>
                     <MenuItem onClick={handleCloseAvt}>My Account</MenuItem>
                     <MenuItem onClick={handleCloseAvt}>Purchase Order</MenuItem>
                     <MenuItem onClick={handleCloseAvt}>Wishlist</MenuItem>
                  </Menu>
               </Box>

               <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                  <IconButton className={styles.menuBtn} onClick={handleShowNav}>
                     <MenuIcon className={styles.menuIcon} />
                  </IconButton>
               </Box>

               <Box className={clsx(styles.navModal, { [styles.navModalActive]: checked })}>
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
                           <ListItemButton onClick={handleOpenAvt}>
                              <ListItemAvatar>
                                 <Avatar alt='avt' src='https://bom.so/PFCAqg' />
                              </ListItemAvatar>
                              <ListItemText primary='nakmiers' />
                              {openAvt ? <ExpandLess /> : <ExpandMore />}
                           </ListItemButton>
                           <Collapse in={openAvt} timeout='auto' unmountOnExit>
                              <List component='div' disablePadding>
                                 <ListItemButton className={styles.collapseItem}>
                                    <ListItemText primary='My Account' />
                                 </ListItemButton>
                                 <ListItemButton className={styles.collapseItem}>
                                    <ListItemText primary='Purchase Order' />
                                 </ListItemButton>
                                 <ListItemButton className={styles.collapseItem}>
                                    <ListItemText primary='Wishlist' />
                                 </ListItemButton>
                              </List>
                           </Collapse>

                           <ListItemButton>
                              <ListItemIcon className={styles.listItemIcon}>
                                 <NotificationsIcon className={styles.navIcon} />
                              </ListItemIcon>
                              <ListItemText primary='Notifications' />
                              <Box className={styles.count}>6</Box>
                           </ListItemButton>
                           <ListItemButton>
                              <ListItemIcon className={styles.listItemIcon}>
                                 <ShoppingCartIcon className={styles.navIcon} />
                              </ListItemIcon>
                              <ListItemText primary='Cart' />
                              <Box className={styles.count}>7</Box>
                           </ListItemButton>
                           <Box className={styles.footerSocial}>
                              <a
                                 href='https://www.facebook.com/'
                                 target='_blank'
                                 rel='noreferrer'
                                 className={styles.link}
                              >
                                 <FacebookIcon className={styles.footerSocialIcon} />
                              </a>
                              <a
                                 href='https://twitter.com/'
                                 target='_blank'
                                 rel='noreferrer'
                                 className={styles.link}
                              >
                                 <TwitterIcon className={styles.footerSocialIcon} />
                              </a>
                              <a
                                 href='https://www.linkedin.com/'
                                 target='_blank'
                                 rel='noreferrer'
                                 className={styles.link}
                              >
                                 <LinkedInIcon className={styles.footerSocialIcon} />
                              </a>
                              <a
                                 href='https://www.instagram.com/'
                                 target='_blank'
                                 rel='noreferrer'
                                 className={styles.link}
                              >
                                 <InstagramIcon className={styles.footerSocialIcon} />
                              </a>
                              <a
                                 href='https://www.youtube.com/'
                                 target='_blank'
                                 rel='noreferrer'
                                 className={styles.link}
                              >
                                 <YouTubeIcon className={styles.footerSocialIcon} />
                              </a>
                              <a
                                 href='https://www.pinterest.com/'
                                 target='_blank'
                                 rel='noreferrer'
                                 className={styles.link}
                              >
                                 <PinterestIcon className={styles.footerSocialIcon} />
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
