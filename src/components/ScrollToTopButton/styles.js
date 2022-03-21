import { makeStyles } from '@mui/styles'

export default makeStyles(theme => ({
   srollToTopBtn: {
      '&.MuiButtonBase-root': {
         position: 'fixed',
         right: 32,
         bottom: 32,
         visibility: 'hidden',
         opacity: 0,
         boxShadow: 'none',
         backgroundColor: 'rgba(0, 0, 0, 0.5)',
         color: '#fff',
         borderRadius: 0,
         height: 48,
         width: 48,
         transition: 'all 0.5s ease-in-out',
         '@media (min-width: 1501px)': {
            right: 'calc((100vw - 1500px + 64px + 1px )/2)',
         },
      },
   },

   scrollToTopBtnActive: {
      '&.MuiButtonBase-root': {
         visibility: 'visible',
         opacity: 1,
      },
   },

   srollToTopBtnIcon: {
      '&.MuiSvgIcon-root': {
         fontSize: 28,
         transform: 'rotate(180deg)',
         // marginTop: 5,
      },
   },
}))
