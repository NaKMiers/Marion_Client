import ClearIcon from '@mui/icons-material/Clear'
import { Box, CardMedia, ListItemButton, Typography } from '@mui/material'
import MenuItem from '@mui/material/MenuItem'
import { memo } from 'react'
import useStyles from './styles'

function Notify({ inHeader, handleCloseNotify, content }) {
   const styles = useStyles()

   return inHeader ? (
      <MenuItem onClick={handleCloseNotify} className={styles.notifyHeader}>
         <CardMedia
            className={styles.notifyThumbHeader}
            component='img'
            image={content.image}
            alt='thumb'
         />
         <Box className={styles.notifyContentHeader}>
            <Typography className={styles.notifyTitleHeader}>{content.title}</Typography>
            <Typography className={styles.notifyDescHeader}>{content.description}</Typography>
         </Box>
      </MenuItem>
   ) : (
      <ListItemButton className={styles.notify}>
         <Box className={styles.notifyThumbWrap}>
            <CardMedia
               alt='thumb'
               image={content.image}
               component='img'
               className={styles.notifyThumb}
            />
         </Box>
         <Box className={styles.notifyContent}>
            <Typography className={styles.notifyTitle}>{content.title}</Typography>
            <Typography className={styles.notifyDesc}>{content.description}</Typography>
         </Box>
         <Box className={styles.removeBtn}>
            <ClearIcon className={styles.removeIcon} />
         </Box>
      </ListItemButton>
   )
}

export default memo(Notify)
