import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import { Box, Typography } from '@mui/material'
import clsx from 'clsx'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import useStyles from './styles'

function ProductPage() {
   const styles = useStyles()

   const [curThumb, setCurThumb] = useState(1)
   const [curThumbCompleted, setCurThumbCompleted] = useState(1)

   const handleChangeSlide = value => {
      setCurThumb(value)
      setTimeout(() => {
         setCurThumbCompleted(value)
      }, 1800)
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

         <Box className={styles.productContent}>
            <Box className={styles.productContentTop}>
               <Box className={styles.productContentLeft}>
                  {curThumbCompleted === 1 ? (
                     <Box className={styles.productThumb1} />
                  ) : curThumbCompleted === 2 ? (
                     <Box className={styles.productThumb2} />
                  ) : (
                     <Box className={styles.productThumb3} />
                  )}

                  <Box className={styles.thumbNumber}>
                     <Box className={styles.thumbNumberBtn} onClick={() => handleChangeSlide(1)}>
                        <Box
                           className={clsx(styles.subSlideNumber, {
                              [styles.subSLiderNumberActive]: curThumb === 1,
                           })}
                        />
                     </Box>
                     <Box className={styles.thumbNumberBtn} onClick={() => handleChangeSlide(2)}>
                        <Box
                           className={clsx(styles.subSlideNumber, {
                              [styles.subSLiderNumberActive]: curThumb === 2,
                           })}
                        />
                     </Box>
                  </Box>
               </Box>
               <Box className={styles.productContentRight}></Box>
            </Box>
         </Box>

         <Box className={styles.productContentBottom}></Box>
      </Box>
   )
}

export default ProductPage
