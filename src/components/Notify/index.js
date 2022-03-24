import ClearIcon from '@mui/icons-material/Clear'
import { Box, CardMedia, ListItemButton, Typography } from '@mui/material'
import MenuItem from '@mui/material/MenuItem'
import useStyles from './styles'

function Notify({ inHeader, handleCloseNotify }) {
   const styles = useStyles()

   return inHeader ? (
      <MenuItem onClick={handleCloseNotify} className={styles.notifyHeader}>
         <CardMedia
            className={styles.notifyThumbHeader}
            component='img'
            image='https://bom.so/EKb8Yx'
            alt='thumb'
         />
         <Box className={styles.notifyContentHeader}>
            <Typography className={styles.notifyTitleHeader}>
               Notify 1awdawdawdawdawdawdawdawdawdawdawdawdawdawd
            </Typography>
            <Typography className={styles.notifyDescHeader}>Description 1</Typography>
         </Box>
      </MenuItem>
   ) : (
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
               Wish I could come, but I'm out of town this Wish I could come, but I'm out Wish I
               could come, but I'm out of town this of town this
            </Typography>
         </Box>
         <Box className={styles.removeBtn}>
            <ClearIcon className={styles.removeIcon} />
         </Box>
      </ListItemButton>
   )
}

export default Notify
