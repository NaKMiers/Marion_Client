import DoneIcon from '@mui/icons-material/Done'
import { Box, List, Typography } from '@mui/material'
import clsx from 'clsx'
import { memo, useState } from 'react'
import Notify from '../../components/Notify'
import PageTitle from '../../components/PageTitle'
import useStyles from './styles'

function NotificationPage() {
   const [isReaded, setReaded] = useState(false)

   const styles = useStyles()

   return (
      <Box className={styles.notificationPage}>
         <PageTitle page='notifications' />

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

               <Notify />
            </List>
         </Box>
      </Box>
   )
}

export default memo(NotificationPage)
