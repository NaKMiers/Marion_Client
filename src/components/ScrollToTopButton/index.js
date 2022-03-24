import { Fab } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import useStyles from './styles'
import { useEffect, useState } from 'react'
import clsx from 'clsx'

function ScrollToTopButton() {
   const styles = useStyles()
   const [visible, setVisible] = useState(false)

   const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop
      if (scrolled > 150) {
         setVisible(true)
      } else if (scrolled <= 150) {
         setVisible(false)
      }
   }

   useEffect(() => {
      window.addEventListener('scroll', toggleVisible)
   })

   const scrollToTop = () => {
      window.scrollTo({
         top: 0,
         behavior: 'smooth',
      })
   }

   return (
      <Fab
         color='primary'
         aria-label='add'
         className={clsx(styles.srollToTopBtn, { [styles.scrollToTopBtnActive]: visible })}
         onClick={scrollToTop}
      >
         <KeyboardArrowDownIcon className={styles.srollToTopBtnIcon} />
      </Fab>
   )
}

export default ScrollToTopButton
