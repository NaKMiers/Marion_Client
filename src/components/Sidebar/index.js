import SearchIcon from '@mui/icons-material/Search'
import {
   Box,
   Divider,
   Drawer,
   InputAdornment,
   List,
   ListItem,
   ListItemText,
   OutlinedInput,
   Slider,
   Typography,
} from '@mui/material'
import clsx from 'clsx'
import { memo, useState } from 'react'
import useStyles from './styles'

function Sidebar({ positionDrawer, toggleDrawer }) {
   const styles = useStyles()

   const [value, setValue] = useState([20, 37])

   const handleChange = (event, newValue) => {
      setValue(newValue)
   }

   return (
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
                     <Box className={styles.filterByCtgSubItem}>
                        <ListItemText primary='Show All' />
                     </Box>
                  </ListItem>
                  <ListItem
                     className={styles.filterByCtgItem}
                     secondaryAction={<Box className={styles.count}>30</Box>}
                     // onClick={handleToggle(value)}
                  >
                     <Box className={styles.filterByCtgSubItem}>
                        <ListItemText primary='Accessories' />
                     </Box>
                  </ListItem>
                  <ListItem
                     className={styles.filterByCtgItem}
                     secondaryAction={<Box className={styles.count}>30</Box>}
                     // onClick={handleToggle(value)}
                  >
                     <Box className={styles.filterByCtgSubItem}>
                        <ListItemText primary='Chairs' />
                     </Box>
                  </ListItem>
                  <ListItem
                     className={styles.filterByCtgItem}
                     secondaryAction={<Box className={styles.count}>30</Box>}
                     // onClick={handleToggle(value)}
                  >
                     <Box className={styles.filterByCtgSubItem}>
                        <ListItemText primary='Lamps' />
                     </Box>
                  </ListItem>
                  <ListItem
                     className={styles.filterByCtgItem}
                     secondaryAction={<Box className={styles.count}>30</Box>}
                     // onClick={handleToggle(value)}
                  >
                     <Box className={styles.filterByCtgSubItem}>
                        <ListItemText primary='Vases' />
                     </Box>
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
                     <Box className={styles.filterByCtgSubItem}>
                        <Box className={styles.color} style={{ background: '#000' }}>
                           <Box className={styles.colorBorder} />
                        </Box>
                        <ListItemText className={styles.listItemText} primary='Black' />
                     </Box>
                  </ListItem>
                  <ListItem
                     className={styles.filterByCtgItem}
                     secondaryAction={<Box className={styles.count}>30</Box>}
                  >
                     <Box className={styles.filterByCtgSubItem}>
                        <Box className={styles.color} style={{ background: '#4c83ff' }}>
                           <Box className={styles.colorBorder} />
                        </Box>
                        <ListItemText className={styles.listItemText} primary='Blue' />
                     </Box>
                  </ListItem>
                  <ListItem
                     className={styles.filterByCtgItem}
                     secondaryAction={<Box className={styles.count}>30</Box>}
                  >
                     <Box className={styles.filterByCtgSubItem}>
                        <Box className={styles.color} style={{ background: '#e5aa70' }}>
                           <Box className={styles.colorBorder} />
                        </Box>
                        <ListItemText className={styles.listItemText} primary='Fawn' />
                     </Box>
                  </ListItem>
                  <ListItem
                     className={styles.filterByCtgItem}
                     secondaryAction={<Box className={styles.count}>30</Box>}
                  >
                     <Box className={styles.filterByCtgSubItem}>
                        <Box className={styles.color} style={{ background: '#c0cdd0' }}>
                           <Box className={styles.colorBorder} />
                        </Box>
                        <ListItemText className={styles.listItemText} primary='Gray' />
                     </Box>
                  </ListItem>
                  <ListItem
                     className={styles.filterByCtgItem}
                     secondaryAction={<Box className={styles.count}>30</Box>}
                  >
                     <Box className={styles.filterByCtgSubItem}>
                        <Box className={styles.color} style={{ background: '#99e666' }}>
                           <Box className={styles.colorBorder} />
                        </Box>
                        <ListItemText className={styles.listItemText} primary='Green' />
                     </Box>
                  </ListItem>
                  <ListItem
                     className={styles.filterByCtgItem}
                     secondaryAction={<Box className={styles.count}>30</Box>}
                  >
                     <Box className={styles.filterByCtgSubItem}>
                        <Box className={styles.color} style={{ background: '#f0efe9' }}>
                           <Box className={styles.colorBorder} />
                        </Box>
                        <ListItemText className={styles.listItemText} primary='Milky' />
                     </Box>
                  </ListItem>
                  <ListItem
                     className={styles.filterByCtgItem}
                     secondaryAction={<Box className={styles.count}>30</Box>}
                  >
                     <Box className={styles.filterByCtgSubItem}>
                        <Box className={styles.color} style={{ background: '#ff9833' }}>
                           <Box className={styles.colorBorder} />
                        </Box>
                        <ListItemText className={styles.listItemText} primary='Orange' />
                     </Box>
                  </ListItem>
                  <ListItem
                     className={styles.filterByCtgItem}
                     secondaryAction={<Box className={styles.count}>30</Box>}
                  >
                     <Box className={styles.filterByCtgSubItem}>
                        <Box className={styles.color} style={{ background: '#f44336' }}>
                           <Box className={styles.colorBorder} />
                        </Box>
                        <ListItemText className={styles.listItemText} primary='Red' />
                     </Box>
                  </ListItem>
                  <ListItem
                     className={styles.filterByCtgItem}
                     secondaryAction={<Box className={styles.count}>30</Box>}
                  >
                     <Box className={styles.filterByCtgSubItem}>
                        <Box className={styles.color} style={{ background: '#30d5c8' }}>
                           <Box className={styles.colorBorder} />
                        </Box>
                        <ListItemText className={styles.listItemText} primary='Turquoise' />
                     </Box>
                  </ListItem>
                  <ListItem
                     className={styles.filterByCtgItem}
                     secondaryAction={<Box className={styles.count}>30</Box>}
                  >
                     <Box className={styles.filterByCtgSubItem}>
                        <Box className={styles.color} style={{ background: '#8a6bec' }}>
                           <Box className={styles.colorBorder} />
                        </Box>
                        <ListItemText className={styles.listItemText} primary='Violet' />
                     </Box>
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
                     <Box className={styles.filterByCtgSubItem}>
                        <ListItemText primary='Show All' />
                     </Box>
                  </ListItem>
                  <ListItem
                     className={styles.filterByCtgItem}
                     secondaryAction={<Box className={styles.count}>30</Box>}
                     // onClick={handleToggle(value)}
                  >
                     <Box className={styles.filterByCtgSubItem}>
                        <ListItemText primary='Extravaganza' />
                     </Box>
                  </ListItem>
                  <ListItem
                     className={styles.filterByCtgItem}
                     secondaryAction={<Box className={styles.count}>30</Box>}
                     // onClick={handleToggle(value)}
                  >
                     <Box className={styles.filterByCtgSubItem}>
                        <ListItemText primary='Testcat' />
                     </Box>
                  </ListItem>
                  <ListItem
                     className={styles.filterByCtgItem}
                     secondaryAction={<Box className={styles.count}>30</Box>}
                     // onClick={handleToggle(value)}
                  >
                     <Box className={styles.filterByCtgSubItem}>
                        <ListItemText primary='Via Bottelli' />
                     </Box>
                  </ListItem>
               </List>
            </Box>
            <Divider light />

            <Box className={styles.filterByPrice}>
               <Typography className={styles.subHeading}>Filter By Price</Typography>
               <Slider value={value} onChange={handleChange} className={styles.priceRange} />
               <Typography className={styles.showPrice}>
                  Price: ${35} - ${99}
               </Typography>
            </Box>
            <Divider light />

            <Box className={styles.filterByStatus}>
               <Typography className={styles.subHeading}>Filter By Status</Typography>
               <List className={styles.filterByCtgList}>
                  <ListItem
                     className={styles.filterByCtgItem}
                     // onClick={handleToggle(value)}
                  >
                     <Box className={styles.filterByCtgSubItem}>
                        <ListItemText primary='Show All' />
                     </Box>
                  </ListItem>
                  <ListItem
                     className={styles.filterByCtgItem}
                     secondaryAction={<Box className={styles.count}>30</Box>}
                     // onClick={handleToggle(value)}
                  >
                     <Box className={styles.filterByCtgSubItem}>
                        <ListItemText primary='On Sale' />
                     </Box>
                  </ListItem>
                  <ListItem
                     className={styles.filterByCtgItem}
                     secondaryAction={<Box className={styles.count}>30</Box>}
                     // onClick={handleToggle(value)}
                  >
                     <Box className={styles.filterByCtgSubItem}>
                        <ListItemText primary='In Stock' />
                     </Box>
                  </ListItem>
               </List>
            </Box>
            <Divider light />

            <Box className={styles.filterTotal}>
               <Box className={clsx(styles.selectedFilterItem, styles.clearBtn)}>Clear Filters</Box>
               <Box className={styles.selectedFilterItem}>
                  ${35} - ${99} <span className={styles.deleteSelectedFilterItemBtn}>&times;</span>
               </Box>
            </Box>
         </Box>
      </Drawer>
   )
}

export default memo(Sidebar)
