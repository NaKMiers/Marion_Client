import DoneIcon from '@mui/icons-material/Done'
import { Box, List, Typography } from '@mui/material'
import clsx from 'clsx'
import { memo, useState } from 'react'
import Notify from '../../components/Notify'
import PageTitle from '../../components/PageTitle'
import useStyles from './styles'
import { notifyContents } from '../../constants/dataSample'

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

               <Notify image='images/notifyAvt1.png' content={notifyContents[0]} />
               <Notify image='images/notifyAvt2.png' content={notifyContents[1]} />
               <Notify image='images/notifyAvt3.png' content={notifyContents[2]} />
            </List>
         </Box>
      </Box>
   )
}

export default memo(NotificationPage)
