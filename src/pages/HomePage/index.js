import { Box, Typography } from '@mui/material'
import clsx from 'clsx'
import { useState } from 'react'
import useStyles from './styles'

function HomePage() {
   console.log('HomePage')

   const [curSlide, setCurSlide] = useState(1)
   const [curSlideCompleted, setCurSlideCompleted] = useState(1)

   const handleChangeSlide = value => {
      setCurSlide(value)
      setTimeout(() => {
         setCurSlideCompleted(value)
      }, 1800)
   }

   const styles = useStyles()

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
      </Box>
   )
}

export default HomePage
