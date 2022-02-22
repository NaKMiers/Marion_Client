import { Box, Button } from '@mui/material'
import AdjustIcon from '@mui/icons-material/Adjust'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import useStyles from './styles'

function HomePage() {
   const styles = useStyles()

   return (
      <Box className={styles.homePage}>
         <Box className={styles.slider}>
            <Box className={styles.slide1}></Box>
            {/* <Box className={styles.slideNumber}>
               <AdjustIcon />
               <FiberManualRecordIcon />
            </Box> */}
         </Box>
      </Box>
   )
}

export default HomePage
