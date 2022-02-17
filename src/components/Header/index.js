import MenuIcon from '@mui/icons-material/Menu'
import NotificationsIcon from '@mui/icons-material/Notifications'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Avatar, CardMedia, TextField } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Badge from '@mui/material/Badge'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import { useState } from 'react'
import useStyles from './styles'

function Header() {
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
                  </Menu>
               </Box>

               <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                  <IconButton className={styles.menuBtn}>
                     <MenuIcon className={styles.menuIcon} />
                  </IconButton>
               </Box>
            </Box>
         </Toolbar>
      </AppBar>
   )
}

export default Header
