import EqualizerIcon from '@mui/icons-material/Equalizer'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import SearchIcon from '@mui/icons-material/Search'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import {
   Box,
   Button,
   Divider,
   Drawer,
   InputAdornment,
   List,
   ListItem,
   ListItemText,
   Menu,
   MenuItem,
   OutlinedInput,
   Slider,
   Typography,
} from '@mui/material'
import clsx from 'clsx'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import useStyles from './styles'

function HomePage() {
   console.log('HomePage')

   const [value, setValue] = useState([20, 37])

   const handleChange = (event, newValue) => {
      setValue(newValue)
   }

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
                  <Typography className={styles.sidebarHeading}>Filter</Typography>
                  <OutlinedInput
                     className={styles.searchTextfield}
                     id='outlined-adornment-password'
                     type='text'
                     placeholder='Search by product...'
                     endAdornment={
                        <InputAdornment position='end'>
                           <SearchIcon className={styles.searchIcon} />
                        </InputAdornment>
                     }
                     label='Password'
                  />
               </Box>
               <Divider light />

               <Box className={styles.filterByCategories}>
                  <Typography className={styles.subHeading}>Filter By Categories</Typography>
                  <List className={styles.filterByCtgList}>
                     <ListItem
                        className={styles.filterByCtgItem}
                        // onClick={handleToggle(value)}
                     >
                        <ListItem className={styles.filterByCtgSubItem}>
                           <ListItemText primary='Show All' />
                        </ListItem>
                     </ListItem>
                     <ListItem
                        className={styles.filterByCtgItem}
                        secondaryAction={<Box className={styles.count}>30</Box>}
                        // onClick={handleToggle(value)}
                     >
                        <ListItem className={styles.filterByCtgSubItem}>
                           <ListItemText primary='Accessories' />
                        </ListItem>
                     </ListItem>
                     <ListItem
                        className={styles.filterByCtgItem}
                        secondaryAction={<Box className={styles.count}>30</Box>}
                        // onClick={handleToggle(value)}
                     >
                        <ListItem className={styles.filterByCtgSubItem}>
                           <ListItemText primary='Chairs' />
                        </ListItem>
                     </ListItem>
                     <ListItem
                        className={styles.filterByCtgItem}
                        secondaryAction={<Box className={styles.count}>30</Box>}
                        // onClick={handleToggle(value)}
                     >
                        <ListItem className={styles.filterByCtgSubItem}>
                           <ListItemText primary='Lamps' />
                        </ListItem>
                     </ListItem>
                     <ListItem
                        className={styles.filterByCtgItem}
                        secondaryAction={<Box className={styles.count}>30</Box>}
                        // onClick={handleToggle(value)}
                     >
                        <ListItem className={styles.filterByCtgSubItem}>
                           <ListItemText primary='Vases' />
                        </ListItem>
                     </ListItem>
                  </List>
               </Box>
               <Divider light />

               <Box className={styles.filterByColor}>
                  <Typography className={styles.subHeading}>Filter By Color</Typography>
                  <List className={styles.filterByCtgList}>
                     <ListItem
                        className={styles.filterByCtgItem}
                        secondaryAction={<Box className={styles.count}>30</Box>}
                     >
                        <ListItem className={styles.filterByCtgSubItem}>
                           <Box className={styles.color} style={{ background: '#000' }}>
                              <Box className={styles.colorBorder} />
                           </Box>
                           <ListItemText className={styles.listItemText} primary='Black' />
                        </ListItem>
                     </ListItem>
                     <ListItem
                        className={styles.filterByCtgItem}
                        secondaryAction={<Box className={styles.count}>30</Box>}
                     >
                        <ListItem className={styles.filterByCtgSubItem}>
                           <Box className={styles.color} style={{ background: '#4c83ff' }}>
                              <Box className={styles.colorBorder} />
                           </Box>
                           <ListItemText className={styles.listItemText} primary='Blue' />
                        </ListItem>
                     </ListItem>
                     <ListItem
                        className={styles.filterByCtgItem}
                        secondaryAction={<Box className={styles.count}>30</Box>}
                     >
                        <ListItem className={styles.filterByCtgSubItem}>
                           <Box className={styles.color} style={{ background: '#e5aa70' }}>
                              <Box className={styles.colorBorder} />
                           </Box>
                           <ListItemText className={styles.listItemText} primary='Fawn' />
                        </ListItem>
                     </ListItem>
                     <ListItem
                        className={styles.filterByCtgItem}
                        secondaryAction={<Box className={styles.count}>30</Box>}
                     >
                        <ListItem className={styles.filterByCtgSubItem}>
                           <Box className={styles.color} style={{ background: '#c0cdd0' }}>
                              <Box className={styles.colorBorder} />
                           </Box>
                           <ListItemText className={styles.listItemText} primary='Gray' />
                        </ListItem>
                     </ListItem>
                     <ListItem
                        className={styles.filterByCtgItem}
                        secondaryAction={<Box className={styles.count}>30</Box>}
                     >
                        <ListItem className={styles.filterByCtgSubItem}>
                           <Box className={styles.color} style={{ background: '#99e666' }}>
                              <Box className={styles.colorBorder} />
                           </Box>
                           <ListItemText className={styles.listItemText} primary='Green' />
                        </ListItem>
                     </ListItem>
                     <ListItem
                        className={styles.filterByCtgItem}
                        secondaryAction={<Box className={styles.count}>30</Box>}
                     >
                        <ListItem className={styles.filterByCtgSubItem}>
                           <Box className={styles.color} style={{ background: '#f0efe9' }}>
                              <Box className={styles.colorBorder} />
                           </Box>
                           <ListItemText className={styles.listItemText} primary='Milky' />
                        </ListItem>
                     </ListItem>
                     <ListItem
                        className={styles.filterByCtgItem}
                        secondaryAction={<Box className={styles.count}>30</Box>}
                     >
                        <ListItem className={styles.filterByCtgSubItem}>
                           <Box className={styles.color} style={{ background: '#ff9833' }}>
                              <Box className={styles.colorBorder} />
                           </Box>
                           <ListItemText className={styles.listItemText} primary='Orange' />
                        </ListItem>
                     </ListItem>
                     <ListItem
                        className={styles.filterByCtgItem}
                        secondaryAction={<Box className={styles.count}>30</Box>}
                     >
                        <ListItem className={styles.filterByCtgSubItem}>
                           <Box className={styles.color} style={{ background: '#f44336' }}>
                              <Box className={styles.colorBorder} />
                           </Box>
                           <ListItemText className={styles.listItemText} primary='Red' />
                        </ListItem>
                     </ListItem>
                     <ListItem
                        className={styles.filterByCtgItem}
                        secondaryAction={<Box className={styles.count}>30</Box>}
                     >
                        <ListItem className={styles.filterByCtgSubItem}>
                           <Box className={styles.color} style={{ background: '#30d5c8' }}>
                              <Box className={styles.colorBorder} />
                           </Box>
                           <ListItemText className={styles.listItemText} primary='Turquoise' />
                        </ListItem>
                     </ListItem>
                     <ListItem
                        className={styles.filterByCtgItem}
                        secondaryAction={<Box className={styles.count}>30</Box>}
                     >
                        <ListItem className={styles.filterByCtgSubItem}>
                           <Box className={styles.color} style={{ background: '#8a6bec' }}>
                              <Box className={styles.colorBorder} />
                           </Box>
                           <ListItemText className={styles.listItemText} primary='Violet' />
                        </ListItem>
                     </ListItem>
                  </List>
               </Box>
               <Divider light />

               <Box className={styles.filterByBrand}>
                  <Typography className={styles.subHeading}>Filter By Brand</Typography>
                  <List className={styles.filterByCtgList}>
                     <ListItem
                        className={styles.filterByCtgItem}
                        // onClick={handleToggle(value)}
                     >
                        <ListItem>
                           <ListItemText primary='Show All' />
                        </ListItem>
                     </ListItem>
                     <ListItem
                        className={styles.filterByCtgItem}
                        secondaryAction={<Box className={styles.count}>30</Box>}
                        // onClick={handleToggle(value)}
                     >
                        <ListItem>
                           <ListItemText primary='Extravaganza' />
                        </ListItem>
                     </ListItem>
                     <ListItem
                        className={styles.filterByCtgItem}
                        secondaryAction={<Box className={styles.count}>30</Box>}
                        // onClick={handleToggle(value)}
                     >
                        <ListItem>
                           <ListItemText primary='Testcat' />
                        </ListItem>
                     </ListItem>
                     <ListItem
                        className={styles.filterByCtgItem}
                        secondaryAction={<Box className={styles.count}>30</Box>}
                        // onClick={handleToggle(value)}
                     >
                        <ListItem>
                           <ListItemText primary='Via Bottelli' />
                        </ListItem>
                     </ListItem>
                  </List>
               </Box>
               <Divider light />

               <Box className={styles.filterByPrice}>
                  <Typography className={styles.subHeading}>Filter By Price</Typography>
                  <Slider value={value} onChange={handleChange} className={styles.priceRange} />
                  <p>
                     Price: ${35} - ${99}
                  </p>
               </Box>
               <Divider light />

               <Box className={styles.filterByStatus}>
                  <Typography className={styles.subHeading}>Filter By Status</Typography>
                  <List className={styles.filterByCtgList}>
                     <ListItem
                        className={styles.filterByCtgItem}
                        // onClick={handleToggle(value)}
                     >
                        <ListItem>
                           <ListItemText primary='Show All' />
                        </ListItem>
                     </ListItem>
                     <ListItem
                        className={styles.filterByCtgItem}
                        secondaryAction={<Box className={styles.count}>30</Box>}
                        // onClick={handleToggle(value)}
                     >
                        <ListItem>
                           <ListItemText primary='On Sale' />
                        </ListItem>
                     </ListItem>
                     <ListItem
                        className={styles.filterByCtgItem}
                        secondaryAction={<Box className={styles.count}>30</Box>}
                        // onClick={handleToggle(value)}
                     >
                        <ListItem>
                           <ListItemText primary='In Stock' />
                        </ListItem>
                     </ListItem>
                  </List>
               </Box>
               <Divider light />

               <Box className={styles.filterTotal}>
                  <Box className={clsx(styles.selectedFilterItem, styles.clearBtn)}>
                     Clear Filters
                  </Box>
                  <Box className={styles.selectedFilterItem}>
                     ${35} - ${99}{' '}
                     <span className={styles.deleteSelectedFilterItemBtn}>&times;</span>
                  </Box>
               </Box>
            </Box>
         </Drawer>

         <Box className={styles.main}>
            <Box className={styles.topPanelRow}>
               <Button className={styles.filterBtn} onClick={toggleDrawer('left', true)}>
                  <EqualizerIcon className={styles.filterIcon} /> Filters
               </Button>
               <Button className={styles.sortBtn} onClick={handleOpenSort}>
                  Default Sorting <KeyboardArrowDownIcon className={styles.sortIcon} />
               </Button>
               <Menu
                  className={styles.sortMenu}
                  id='basic-menu'
                  anchorEl={anchorEl}
                  open={isOpenSort}
                  onClose={handleCloseSort}
                  MenuListProps={{
                     'aria-labelledby': 'basic-button',
                  }}
               >
                  <MenuItem className={styles.sortItem} onClick={handleCloseSort}>
                     Default sorting
                  </MenuItem>
                  <MenuItem className={styles.sortItem} onClick={handleCloseSort}>
                     Sort by latest
                  </MenuItem>
                  <MenuItem className={styles.sortItem} onClick={handleCloseSort}>
                     Sort by popularity
                  </MenuItem>
                  <MenuItem className={styles.sortItem} onClick={handleCloseSort}>
                     Sort by price: low to hight
                  </MenuItem>
                  <MenuItem className={styles.sortItem} onClick={handleCloseSort}>
                     Sort by price: hight to low
                  </MenuItem>
               </Menu>
            </Box>

            <div className={styles.productions}>
               <Box className={clsx(styles.productContainer, styles.woodenChairsContainer)}>
                  <Box className={styles.product}>
                     <Box className={clsx(styles.productThumb, styles.thumbWoodenChairs)}>
                        <Link to='/carts'>
                           <Box className={clsx(styles.productImg, styles.woodenChairImg)} />
                        </Link>
                     </Box>

                     <Box className={styles.productCaption}>
                        <p className={styles.productCategorie}>CHAIRS</p>
                        <p className={styles.productName}>Lounge Wooden Chairs</p>
                        <p className={styles.productPrice} title='$39.00'>
                           <span className={styles.productPrevPrice}>$89.00</span>
                           <span className={styles.productCurPrive}>$39.00</span>
                        </p>
                        <Button className={styles.addToCartBtn}>
                           <AddShoppingCartIcon />
                        </Button>
                     </Box>
                  </Box>
               </Box>

               <Box className={clsx(styles.productContainer, styles.floorLampContainer)}>
                  <Box className={styles.product}>
                     <Box className={clsx(styles.productThumb, styles.thumbFloorLamp)}>
                        <Link to='/carts'>
                           <Box className={clsx(styles.productImg, styles.floorLampImg)} />
                        </Link>
                     </Box>

                     <Box className={styles.productCaption}>
                        <p className={styles.productCategorie}>LAMPS</p>
                        <p className={styles.productName}>Floor Lamp</p>
                        <p className={styles.productPrice} title='$39.99'>
                           {/* <span className={styles.productPrevPrice}>$39.99</span> */}
                           <span className={styles.productCurPrive}>$39.99</span>
                        </p>
                        <Button className={styles.addToCartBtn}>
                           <AddShoppingCartIcon />
                        </Button>
                     </Box>
                  </Box>
               </Box>

               <Box className={clsx(styles.productContainer, styles.hangingLampContainer)}>
                  <Box className={styles.product}>
                     <Box className={clsx(styles.productThumb, styles.thumbHangingLamp)}>
                        <Link to='/carts'>
                           <Box className={clsx(styles.productImg, styles.hangingLampImg)} />
                        </Link>
                     </Box>

                     <Box className={styles.productCaption}>
                        <p className={styles.productCategorie}>LAMPS</p>
                        <p className={styles.productName}>Hanging Lamp</p>
                        <p className={styles.productPrice} title='$39.99'>
                           <span className={styles.productPrevPrice}>$79.99</span>
                           <span className={styles.productCurPrive}>$39.99</span>
                        </p>
                        <Button className={styles.addToCartBtn}>
                           <AddShoppingCartIcon />
                        </Button>
                     </Box>
                  </Box>
               </Box>

               <Box className={clsx(styles.productContainer, styles.classyBagContainer)}>
                  <Box className={styles.product}>
                     <Box className={clsx(styles.productThumb, styles.thumbClassyBag)}>
                        <Link to='/carts'>
                           <Box className={clsx(styles.productImg, styles.classyBagImg)} />
                        </Link>
                     </Box>

                     <Box className={styles.productCaption}>
                        <p className={styles.productCategorie}>ACCESSORIES</p>
                        <p className={styles.productName}>Classy Bag</p>
                        <p className={styles.productPrice} title='$35.00'>
                           {/* <span className={styles.productPrevPrice}>$89.00</span> */}
                           <span className={styles.productCurPrive}>$35.00</span>
                        </p>
                        <Button className={styles.addToCartBtn}>
                           <AddShoppingCartIcon />
                        </Button>
                     </Box>
                  </Box>
               </Box>

               <Box className={clsx(styles.productContainer, styles.luxuryContainer)}>
                  <Box className={styles.product}>
                     <Box className={clsx(styles.productThumb, styles.thumbLuxuryChairs)}>
                        <Link to='/carts'>
                           <Box className={clsx(styles.productImg, styles.luxuryChairsImg)} />
                        </Link>
                     </Box>

                     <Box className={styles.productCaption}>
                        <p className={styles.productCategorie}>CHAIRS</p>
                        <p className={styles.productName}>Luxury Chairs</p>
                        <p className={styles.productPrice} title='$39.99'>
                           <span className={styles.productPrevPrice}>$89.00</span>
                           <span className={styles.productCurPrive}>$39.99</span>
                        </p>
                        <Button className={styles.addToCartBtn}>
                           <AddShoppingCartIcon />
                        </Button>
                     </Box>
                  </Box>
               </Box>

               <Box className={clsx(styles.productContainer, styles.newFashionBagContainer)}>
                  <Box className={styles.product}>
                     <Box className={clsx(styles.productThumb, styles.thumbNewFashionBagChairs)}>
                        <Link to='/carts'>
                           <Box
                              className={clsx(styles.productImg, styles.newFashionBagChairsImg)}
                           />
                        </Link>
                     </Box>

                     <Box className={styles.productCaption}>
                        <p className={styles.productCategorie}>ACCESSORIES</p>
                        <p className={styles.productName}>New Fashion Bag</p>
                        <p className={styles.productPrice} title='$89.99'>
                           <span className={styles.productPrevPrice}>$35.00</span>
                           <span className={styles.productCurPrive}>$89.99</span>
                        </p>
                        <Button className={styles.addToCartBtn}>
                           <AddShoppingCartIcon />
                        </Button>
                     </Box>
                  </Box>
               </Box>

               <Box className={clsx(styles.productContainer, styles.furnitureContainer)}>
                  <Box className={styles.product}>
                     <Box className={clsx(styles.productThumb, styles.thumbFurnitureChairs)}>
                        <Link to='/carts'>
                           <Box className={clsx(styles.productImg, styles.furnitureChairsImg)} />
                        </Link>
                     </Box>

                     <Box className={styles.productCaption}>
                        <p className={styles.productCategorie}>ACCESSORIES</p>
                        <p className={styles.productName}>Furniture</p>
                        <p className={styles.productPrice} title='$89.99'>
                           <span className={styles.productPrevPrice}>$35.00</span>
                           <span className={styles.productCurPrive}>$89.99</span>
                        </p>
                        <Button className={styles.addToCartBtn}>
                           <AddShoppingCartIcon />
                        </Button>
                     </Box>
                  </Box>
               </Box>

               <Box className={clsx(styles.productContainer, styles.stylishWatchContainer)}>
                  <Box className={styles.product}>
                     <Box className={clsx(styles.productThumb, styles.thumbStylishWatchChairs)}>
                        <Link to='/carts'>
                           <Box className={clsx(styles.productImg, styles.stylishWatchChairsImg)} />
                        </Link>
                     </Box>

                     <Box className={styles.productCaption}>
                        <p className={styles.productCategorie}>ACCESSORIES</p>
                        <p className={styles.productName}>Stylish Watch</p>
                        <p className={styles.productPrice} title='$35.00'>
                           {/* <span className={styles.productPrevPrice}>$35.00</span> */}
                           <span className={styles.productCurPrive}>$35.00</span>
                        </p>
                        <Button className={styles.addToCartBtn}>
                           <AddShoppingCartIcon />
                        </Button>
                     </Box>
                  </Box>
               </Box>

               <Box className={clsx(styles.productContainer, styles.antiqueVaseContainer)}>
                  <Box className={styles.product}>
                     <Box className={clsx(styles.productThumb, styles.thumbAntiqueVaseChairs)}>
                        <Link to='/carts'>
                           <Box className={clsx(styles.productImg, styles.antiqueVaseChairsImg)} />
                        </Link>
                     </Box>

                     <Box className={styles.productCaption}>
                        <p className={styles.productCategorie}>VASES</p>
                        <p className={styles.productName}>Antique Vase</p>
                        <p className={styles.productPrice} title='$35.00'>
                           {/* <span className={styles.productPrevPrice}>$35.00</span> */}
                           <span className={styles.productCurPrive}>$35.00</span>
                        </p>
                        <Button className={styles.addToCartBtn}>
                           <AddShoppingCartIcon />
                        </Button>
                     </Box>
                  </Box>
               </Box>

               <Box className={clsx(styles.productContainer, styles.chairsMatContainer)}>
                  <Box className={styles.product}>
                     <Box className={clsx(styles.productThumb, styles.thumbChairsMatChairs)}>
                        <Link to='/carts'>
                           <Box className={clsx(styles.productImg, styles.chairsMatChairsImg)} />
                        </Link>
                     </Box>

                     <Box className={styles.productCaption}>
                        <p className={styles.productCategorie}>CHAIRS</p>
                        <p className={styles.productName}>Chairs Mat</p>
                        <p className={styles.productPrice}>
                           {/* <span className={styles.productPrevPrice}>$35.00</span> */}
                           <span className={styles.productCurPrive}>$39.99</span>
                        </p>
                        <Button className={styles.addToCartBtn}>
                           <AddShoppingCartIcon />
                        </Button>
                     </Box>
                  </Box>
               </Box>

               <Box className={clsx(styles.productContainer, styles.exquisiteVaseContainer)}>
                  <Box className={styles.product}>
                     <Box className={clsx(styles.productThumb, styles.thumbExquisiteVaseChairs)}>
                        <Link to='/carts'>
                           <Box
                              className={clsx(styles.productImg, styles.exquisiteVaseChairsImg)}
                           />
                        </Link>
                     </Box>

                     <Box className={styles.productCaption}>
                        <p className={styles.productCategorie}>VASES</p>
                        <p className={styles.productName}>Exquisite Vase</p>
                        <p className={styles.productPrice}>
                           <span className={styles.productPrevPrice}>$35.00</span>
                           <span className={styles.productCurPrive}>$39.99</span>
                        </p>
                        <Button className={styles.addToCartBtn}>
                           <AddShoppingCartIcon />
                        </Button>
                     </Box>
                  </Box>
               </Box>

               <Box className={clsx(styles.productContainer, styles.lampShadeContainer)}>
                  <Box className={styles.product}>
                     <Box className={clsx(styles.productThumb, styles.thumbLampShadeChairs)}>
                        <Link to='/carts'>
                           <Box className={clsx(styles.productImg, styles.lampShadeChairsImg)} />
                        </Link>
                     </Box>

                     <Box className={styles.productCaption}>
                        <p className={styles.productCategorie}>LAMPS</p>
                        <p className={styles.productName}>Lamp Shade</p>
                        <p className={styles.productPrice}>
                           <span className={styles.productPrevPrice}>$79.99</span>
                           <span className={styles.productCurPrive}>$39.99</span>
                        </p>
                        <Button className={styles.addToCartBtn}>
                           <AddShoppingCartIcon />
                        </Button>
                     </Box>
                  </Box>
               </Box>

               <Box className={clsx(styles.productContainer, styles.accessoriesContainer)}>
                  <Box className={styles.product}>
                     <Box className={clsx(styles.productThumb, styles.thumbAccessoriesChairs)}>
                        <Link to='/carts'>
                           <Box className={clsx(styles.productImg, styles.accessoriesChairsImg)} />
                        </Link>
                     </Box>

                     <Box className={styles.productCaption}>
                        <p className={styles.productCategorie}>ACCESSORIES</p>
                        <p className={styles.productName}>Accessories</p>
                        <p className={styles.productPrice}>
                           {/* <span className={styles.productPrevPrice}>$79.99</span> */}
                           <span className={styles.productCurPrive}>$35.00</span>
                        </p>
                        <Button className={styles.addToCartBtn}>
                           <AddShoppingCartIcon />
                        </Button>
                     </Box>
                  </Box>
               </Box>
            </div>
         </Box>
      </Box>
   )
}

export default HomePage
