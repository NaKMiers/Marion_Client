import PlusIcon from '@mui/icons-material/Add'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import RemoveIcon from '@mui/icons-material/HighlightOff'
import MinusIcon from '@mui/icons-material/Remove'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Box, Button, IconButton, Typography } from '@mui/material'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import useStyles from './styles'

function CartPage() {
   const styles = useStyles()

   return (
      <Box className={styles.cartPage}>
         <Box className={styles.pageTitle}>
            <Typography className={styles.title}>
               <span className={styles.title1}>MY</span> <span className={styles.title2}>CART</span>
            </Typography>
            <Box className={styles.pageIconWrap}>
               <ShoppingCartIcon className={styles.pageIcon} />
            </Box>
            <Box className={styles.navigator}>
               <Link to='/' className={styles.link}>
                  <Typography className={styles.nav1}>Home</Typography>
               </Link>
               <ArrowRightAltIcon className={styles.navArrowIcon} />
               <Typography className={styles.nav2}>Cart</Typography>
            </Box>
         </Box>

         <Box className={styles.cartBody}>
            <Typography className={styles.amount}>
               You Have <span className={styles.quantity}>2 Items</span> In Cart:
            </Typography>

            <Box className={styles.productList}>
               <table className={styles.table}>
                  <thead>
                     <tr className={styles.tableHeader}>
                        <th className={clsx(styles.tableField, styles.removeHeader)}></th>
                        <th className={clsx(styles.tableField, styles.productHeader)}>PRODUCT</th>
                        <th className={clsx(styles.tableField, styles.priceHeader)}>PRICE</th>
                        <th className={clsx(styles.tableField, styles.quantityHeader)}>QUANTITY</th>
                        <th className={clsx(styles.tableField, styles.subtotalHeader)}>SUBTOTAL</th>
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
                           <p className={styles.curPrice}>$39.99</p>
                        </td>
                        <td className={clsx(styles.tableData, styles.quantityData)}>
                           <Box className={styles.quantityWrap}>
                              <Button className={styles.incQuantityBtn}>
                                 <MinusIcon />
                              </Button>
                              <input className={styles.quantityInput} />
                              <Button className={styles.decQuantityBtn}>
                                 <PlusIcon />
                              </Button>
                           </Box>
                        </td>
                        <td className={styles.tableData}>
                           <p className={styles.curPrice}>$6549.99</p>
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
                        <th className={clsx(styles.tableField, styles.quantityHeaderRPS)}>
                           QUANTITY
                        </th>
                        <th className={clsx(styles.tableField, styles.subtotalHeaderRPS)}>
                           SUBTOTAL
                        </th>
                     </tr>
                  </tbody>

                  <tbody>
                     <tr className={styles.tableProducts}>
                        <td className={styles.tableData}>
                           <p className={styles.curPrice}>$39.99</p>
                        </td>
                        <td className={clsx(styles.tableData, styles.quantityData)}>
                           <Box className={styles.quantityWrap}>
                              <Button className={styles.incQuantityBtn}>
                                 <MinusIcon />
                              </Button>
                              <input className={styles.quantityInput} />
                              <Button className={styles.decQuantityBtn}>
                                 <PlusIcon />
                              </Button>
                           </Box>
                        </td>
                        <td className={clsx(styles.tableData, styles.subtotalData)}>
                           <p className={styles.curPrice}>$6549.99</p>
                        </td>
                     </tr>
                  </tbody>
                  <tbody className={styles.subtotalHeaderRPS2}>
                     <tr className={clsx(styles.tableHeader)}>
                        <th
                           colSpan={2}
                           className={styles.tableField}
                           style={{ textAlign: 'center' }}
                        >
                           SUBTOTAL
                        </th>
                     </tr>
                  </tbody>
                  <tbody className={styles.subtotalDataRPS2}>
                     <tr className={styles.tableProducts}>
                        <td className={styles.tableData} colSpan={2}>
                           <p className={styles.curPrice}>$6549.99</p>
                        </td>
                     </tr>
                  </tbody>
               </table>
            </Box>
         </Box>
      </Box>
   )
}

export default CartPage
