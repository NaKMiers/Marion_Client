import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import ClearIcon from '@mui/icons-material/Clear'
import DoneIcon from '@mui/icons-material/Done'
import NotificationsIcon from '@mui/icons-material/Notifications'
import { Box, CardMedia, List, ListItemButton, Typography } from '@mui/material'
import clsx from 'clsx'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import useStyles from './styles'

function NotificationPage() {
   const [isReaded, setReaded] = useState(false)

   const styles = useStyles()

   return (
      <Box className={styles.notificationPage}>
         <Box className={styles.pageTitle}>
            <Typography className={styles.title}>
               <span className={styles.title2}>NOTIFICATIONS</span>
            </Typography>
            <Box className={styles.pageIconWrap}>
               <NotificationsIcon className={styles.pageIcon} />
            </Box>
            <Box className={styles.navigator}>
               <Link to='/' className={styles.link}>
                  <Typography className={styles.nav1}>Home</Typography>
               </Link>
               <ArrowRightAltIcon className={styles.navArrowIcon} />
               <Typography className={styles.nav2}>Notifications</Typography>
            </Box>
         </Box>

         <Box className={styles.notificationBody}>
            <List className={styles.notificationList}>
               <Box className={styles.headingList}>
                  <Typography
                     className={clsx(styles.markReaded, { [styles.markReadedActive]: isReaded })}
                     onClick={() => setReaded(true)}
                  >
                     Mark readed
                  </Typography>
                  <DoneIcon
                     className={clsx(styles.markReadedIcon, {
                        [styles.markReadedIconActive]: isReaded,
                     })}
                  />
               </Box>
               <ListItemButton className={styles.notify}>
                  <Box className={styles.notifyThumbWrap}>
                     <CardMedia
                        alt='thumb'
                        image='https://bom.so/EKb8Yx'
                        component='img'
                        className={styles.notifyThumb}
                     />
                  </Box>
                  <Box className={styles.notifyContent}>
                     <Typography className={styles.notifyTitle}>Summer BBQ</Typography>
                     <Typography className={styles.notifyDesc}>
                        Wish I could come, but I'm out of town this Wish I could come, but I'm out
                        Wish I could come, but I'm out of town this of town this
                     </Typography>
                  </Box>
                  <Box className={styles.removeBtn}>
                     <ClearIcon className={styles.removeIcon} />
                  </Box>
               </ListItemButton>
               <ListItemButton className={styles.notify}>
                  <Box className={styles.notifyThumbWrap}>
                     <CardMedia
                        alt='thumb'
                        image='https://bom.so/EKb8Yx'
                        component='img'
                        className={styles.notifyThumb}
                     />
                  </Box>
                  <Box className={styles.notifyContent}>
                     <Typography className={styles.notifyTitle}>Summer BBQ</Typography>
                     <Typography className={styles.notifyDesc}>
                        Wish I could come, but I'm out of town this…
                     </Typography>
                  </Box>
                  <Box className={styles.removeBtn}>
                     <ClearIcon className={styles.removeIcon} />
                  </Box>
               </ListItemButton>
            </List>
         </Box>
      </Box>
   )
}

export default NotificationPage
