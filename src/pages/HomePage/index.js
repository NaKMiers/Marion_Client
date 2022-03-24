import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import EqualizerIcon from '@mui/icons-material/Equalizer'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { Box, Button, Menu, MenuItem } from '@mui/material'
import clsx from 'clsx'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../../components/Sidebar'
import Slider from '../../components/Slider'
import useStyles from './styles'

function HomePage() {
   const styles = useStyles()

   const [anchorEl, setAnchorEl] = useState(null)
   const isOpenSort = Boolean(anchorEl)
   const handleOpenSort = event => {
      setAnchorEl(event.currentTarget)
   }
   const handleCloseSort = () => {
      setAnchorEl(null)
   }

   // for sidebar
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
         <Slider />

         <Sidebar positionDrawer={positionDrawer} toggleDrawer={toggleDrawer} />

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
                        <Link to='/product'>
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
                        <Link to='/product'>
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
                        <Link to='/product'>
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
                        <Link to='/product'>
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
                        <Link to='/product'>
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
                        <Link to='/product'>
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
                        <Link to='/product'>
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
                        <Link to='/product'>
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
                        <Link to='/product'>
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
                        <Link to='/product'>
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
                        <Link to='/product'>
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
                        <Link to='/product'>
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
                        <Link to='/product'>
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
