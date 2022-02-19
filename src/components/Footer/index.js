import { Box, CardMedia, Typography } from '@mui/material'
import useStyles from './styles'
import CopyrightIcon from '@mui/icons-material/Copyright'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import PinterestIcon from '@mui/icons-material/Pinterest'
import TwitterIcon from '@mui/icons-material/Twitter'
import YouTubeIcon from '@mui/icons-material/YouTube'
import { Link } from 'react-router-dom'

function Footer() {
   const styles = useStyles()

   return (
      <Box className={styles.footer}>
         <Box className={styles.brandFooter}>
            <Box className={styles.brandBox}>
               <CardMedia
                  className={styles.brandImage}
                  component='img'
                  image='https://bom.so/bDVNCf'
                  alt='brand'
               />
            </Box>
            <Box className={styles.brandBox}>
               <CardMedia
                  className={styles.brandImage}
                  component='img'
                  image='https://bom.so/xvtfWO'
                  alt='brand'
               />
            </Box>
            <Box className={styles.brandBox}>
               <CardMedia
                  className={styles.brandImage}
                  component='img'
                  image='https://bom.so/0z97He'
                  alt='brand'
               />
            </Box>
            <Box className={styles.brandBox}>
               <CardMedia
                  className={styles.brandImage}
                  component='img'
                  image='https://bom.so/mJHZmF'
                  alt='brand'
               />
            </Box>
            <Box className={styles.brandBox}>
               <CardMedia
                  className={styles.brandImage}
                  component='img'
                  image='https://bom.so/e1gOjI'
                  alt='brand'
               />
            </Box>
            <Box className={styles.brandBox}>
               <CardMedia
                  className={styles.brandImage}
                  component='img'
                  image='https://bom.so/C2S6sk'
                  alt='brand'
               />
            </Box>
            <Box className={styles.brandBox}>
               <CardMedia
                  className={styles.brandImage}
                  component='img'
                  image='https://bom.so/9IOfcf'
                  alt='brand'
               />
            </Box>
            <Box className={styles.brandBox}>
               <CardMedia
                  className={styles.brandImage}
                  component='img'
                  image='https://bom.so/E4lTQx'
                  alt='brand'
               />
            </Box>
         </Box>
         <Box className={styles.mainFooter}>
            <Box className={styles.copyright}>
               <Typography className={styles.copyrightText}>
                  <CopyrightIcon className={styles.copyrightIcon} />
                  Copyright Marion
               </Typography>
            </Box>
            <Box className={styles.middle}>
               <Link to='#' className={styles.linkMiddle}>
                  <Typography className={styles.middleText}>Support</Typography>
               </Link>
               <Link to='#' className={styles.linkMiddle}>
                  <Typography className={styles.middleText}>Contact Us</Typography>
               </Link>
               <Link to='#' className={styles.linkMiddle}>
                  <Typography className={styles.middleText}>Disclaimer</Typography>
               </Link>
               <Link to='#' className={styles.linkMiddle}>
                  <Typography className={styles.middleText}>Privacy Policy</Typography>
               </Link>
            </Box>
            <Box className={styles.socials}>
               <Box className={styles.socialLinkWrapper}>
                  <a
                     href='https://www.facebook.com/'
                     target='_blank'
                     rel='noreferrer'
                     className={styles.socialLink}
                  >
                     <FacebookIcon className={styles.socialIcon} />
                  </a>
                  <a
                     href='https://twitter.com/'
                     target='_blank'
                     rel='noreferrer'
                     className={styles.socialLink}
                  >
                     <TwitterIcon className={styles.socialIcon} />
                  </a>
                  <a
                     href='https://www.linkedin.com/'
                     target='_blank'
                     rel='noreferrer'
                     className={styles.socialLink}
                  >
                     <LinkedInIcon className={styles.socialIcon} />
                  </a>
                  <a
                     href='https://www.instagram.com/'
                     target='_blank'
                     rel='noreferrer'
                     className={styles.socialLink}
                  >
                     <InstagramIcon className={styles.socialIcon} />
                  </a>
                  <a
                     href='https://www.youtube.com/'
                     target='_blank'
                     rel='noreferrer'
                     className={styles.socialLink}
                  >
                     <YouTubeIcon className={styles.socialIcon} />
                  </a>
                  <a
                     href='https://www.pinterest.com/'
                     target='_blank'
                     rel='noreferrer'
                     className={styles.socialLink}
                  >
                     <PinterestIcon className={styles.socialIcon} />
                  </a>
               </Box>
            </Box>
         </Box>
      </Box>
   )
}

export default Footer
