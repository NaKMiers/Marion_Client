import EqualizerIcon from '@mui/icons-material/Equalizer'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import VisibilityIcon from '@mui/icons-material/Visibility'
import {
   Box,
   Button,
   Checkbox,
   Divider,
   Drawer,
   IconButton,
   InputAdornment,
   ListItem,
   ListItemButton,
   ListItemIcon,
   ListItemText,
   Menu,
   MenuItem,
   OutlinedInput,
   Slider,
   Typography,
} from '@mui/material'
import clsx from 'clsx'
import { useState } from 'react'
import useStyles from './styles'

function HomePage() {
   console.log('HomePage')

   const [anchorEl, setAnchorEl] = useState(null)
   const isOpenSort = Boolean(anchorEl)
   const handleOpenSort = event => {
      setAnchorEl(event.currentTarget)
   }
   const handleCloseSort = () => {
      setAnchorEl(null)
   }

   const [curSlide, setCurSlide] = useState(1)
   const [curSlideCompleted, setCurSlideCompleted] = useState(1)

   const handleChangeSlide = value => {
      setCurSlide(value)
      setTimeout(() => {
         setCurSlideCompleted(value)
      }, 1800)
   }

   const styles = useStyles()

   const [positionDrawer, setPositionDrawer] = useState({
      top: false,
      left: false,
      bottom: false,
      right: false,
   })

   const toggleDrawer = (anchor, open) => event => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
         return
      }

      setPositionDrawer({ ...positionDrawer, [anchor]: open })
   }

   return (
      <Box className={styles.homePage}>
         <Box className={styles.slider}>
            {curSlideCompleted === 1 ? (
               <Box className={styles.slide1}>
                  <Box
                     className={clsx(styles.thumbSlide1, {
                        [styles.thumbSlide1Out]: curSlide !== 1,
                     })}
                  />
                  <Typography
                     className={clsx(styles.designStyles1, {
                        [styles.designStyles1Out]: curSlide !== 1,
                     })}
                  >
                     MINIMALISTIC
                  </Typography>
                  <Typography
                     className={clsx(styles.productName1, {
                        [styles.productName1Out]: curSlide !== 1,
                     })}
                  >
                     SPHERE LAMP
                  </Typography>
                  <Typography
                     className={clsx(styles.price1, {
                        [styles.price1Out]: curSlide !== 1,
                     })}
                  >
                     $79.00
                  </Typography>
                  <Typography
                     className={clsx(styles.type1, {
                        [styles.type1Out]: curSlide !== 1,
                     })}
                  >
                     /INTERIOR
                  </Typography>
               </Box>
            ) : (
               <Box className={styles.slide2}>
                  <Box
                     className={clsx(styles.thumbSlide2, {
                        [styles.thumbSlide2Out]: curSlide !== 2,
                     })}
                  />
                  <Typography
                     className={clsx(styles.designStyles2, {
                        [styles.designStyles2Out]: curSlide !== 2,
                     })}
                  >
                     BAMBOO PATTERN
                  </Typography>
                  <Typography
                     className={clsx(styles.productName2, {
                        [styles.productName2Out]: curSlide !== 2,
                     })}
                  >
                     DESIGNER CHAIR
                  </Typography>
                  <Typography
                     className={clsx(styles.price2, {
                        [styles.price2Out]: curSlide !== 2,
                     })}
                  >
                     $299.00
                  </Typography>
                  <Typography
                     className={clsx(styles.type2, {
                        [styles.type2Out]: curSlide !== 2,
                     })}
                  >
                     /INTERIOR
                  </Typography>
               </Box>
            )}

            <Box className={styles.slideNumber}>
               <Box className={styles.slideNumberBtn} onClick={() => handleChangeSlide(1)}>
                  <Box
                     className={clsx(styles.subSlideNumber, {
                        [styles.subSLiderNumberActive]: curSlide === 1,
                     })}
                  />
               </Box>
               <Box className={styles.slideNumberBtn} onClick={() => handleChangeSlide(2)}>
                  <Box
                     className={clsx(styles.subSlideNumber, {
                        [styles.subSLiderNumberActive]: curSlide === 2,
                     })}
                  />
               </Box>
            </Box>
         </Box>

         <Drawer
            anchor={'left'}
            open={positionDrawer['left']}
            onClose={toggleDrawer('left', false)}
            className={styles.sidebar}
         >
            <Box className={styles.sidebarBody}>
               <Box className={styles.search}>
                  <Typography>Filter</Typography>
                  <OutlinedInput
                     id='outlined-adornment-password'
                     type='text'
                     endAdornment={
                        <InputAdornment position='end'>
                           <IconButton aria-label='toggle password visibility' edge='end'>
                              <VisibilityIcon />
                           </IconButton>
                        </InputAdornment>
                     }
                     label='Password'
                  />
               </Box>
               <Divider light />

               <Box className={styles.filterByCategories}>
                  <Typography>Filter By Categories</Typography>
                  <ListItem
                     secondaryAction={
                        <IconButton edge='end' aria-label='comments'>
                           <VisibilityIcon />
                        </IconButton>
                     }
                     disablePadding
                  >
                     <ListItemButton
                        role={undefined}
                        // onClick={handleToggle(value)}
                        dense
                     >
                        <ListItemIcon>
                           <Checkbox
                              edge='start'
                              // checked={checked.indexOf(value) !== -1}
                              tabIndex={-1}
                              disableRipple
                           />
                        </ListItemIcon>
                        <ListItemText primary='Line item' />
                     </ListItemButton>
                  </ListItem>
               </Box>
               <Divider light />

               <Box className={styles.filterByColor}>
                  <Typography>Filter By Color</Typography>
                  <ListItem
                     secondaryAction={
                        <IconButton edge='end' aria-label='comments'>
                           <VisibilityIcon />
                        </IconButton>
                     }
                     disablePadding
                  >
                     <ListItemButton
                        role={undefined}
                        // onClick={handleToggle(value)}
                        dense
                     >
                        <ListItemIcon>
                           <Checkbox
                              edge='start'
                              // checked={checked.indexOf(value) !== -1}
                              tabIndex={-1}
                              disableRipple
                           />
                        </ListItemIcon>
                        <ListItemText primary='Line item' />
                     </ListItemButton>
                  </ListItem>
               </Box>
               <Divider light />

               <Box className={styles.filterByBrand}>
                  <Typography>Filter By Brand</Typography>
                  <ListItem
                     secondaryAction={
                        <IconButton edge='end' aria-label='comments'>
                           <VisibilityIcon />
                        </IconButton>
                     }
                     disablePadding
                  >
                     <ListItemButton
                        role={undefined}
                        // onClick={handleToggle(value)}
                        dense
                     >
                        <ListItemIcon>
                           <Checkbox
                              edge='start'
                              // checked={checked.indexOf(value) !== -1}
                              tabIndex={-1}
                              disableRipple
                           />
                        </ListItemIcon>
                        <ListItemText primary='Line item' />
                     </ListItemButton>
                  </ListItem>
               </Box>
               <Divider light />

               <Box className={styles.filterByPrice}>
                  <Typography>Filter By Price</Typography>
                  <Slider disabled defaultValue={30} aria-label='Disabled slider' />
                  <p>
                     Price: ${35} - ${99}
                  </p>
               </Box>
               <Divider light />

               <Box className={styles.filterByStatus}>
                  <Typography>Filter By Status</Typography>
                  <ListItem
                     secondaryAction={
                        <IconButton edge='end' aria-label='comments'>
                           <VisibilityIcon />
                        </IconButton>
                     }
                     disablePadding
                  >
                     <ListItemButton
                        role={undefined}
                        // onClick={handleToggle(value)}
                        dense
                     >
                        <ListItemIcon>
                           <Checkbox
                              edge='start'
                              // checked={checked.indexOf(value) !== -1}
                              tabIndex={-1}
                              disableRipple
                           />
                        </ListItemIcon>
                        <ListItemText primary='Line item' />
                     </ListItemButton>
                  </ListItem>
               </Box>
               <Divider light />
            </Box>
         </Drawer>

         <Box className={styles.productions}>
            <Box className={styles.topPanelRow}>
               <Button className={styles.filterBtn} onClick={toggleDrawer('left', true)}>
                  <EqualizerIcon className={styles.filterIcon} /> Filters
               </Button>
               <Button className={styles.sortBtn} onClick={handleOpenSort}>
                  Default Sorting <KeyboardArrowDownIcon className={styles.sortIcon} />
               </Button>
               <Menu
                  id='basic-menu'
                  anchorEl={anchorEl}
                  open={isOpenSort}
                  onClose={handleCloseSort}
                  MenuListProps={{
                     'aria-labelledby': 'basic-button',
                  }}
               >
                  <MenuItem onClick={handleCloseSort}>Default sorting</MenuItem>
                  <MenuItem onClick={handleCloseSort}>Sort by latest</MenuItem>
                  <MenuItem onClick={handleCloseSort}>Sort by popularity</MenuItem>
                  <MenuItem onClick={handleCloseSort}>Sort by price: low to hight</MenuItem>
                  <MenuItem onClick={handleCloseSort}>Sort by price: hight to low</MenuItem>
                  <MenuItem onClick={handleCloseSort}></MenuItem>
               </Menu>
            </Box>
         </Box>
      </Box>
   )
}

export default HomePage
