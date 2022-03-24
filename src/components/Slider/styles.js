import { makeStyles } from '@mui/styles'

export default makeStyles(theme => ({
   slider: {
      position: 'relative',
      height: '45vw',
      maxHeight: 675,
   },

   // SLIDE 1
   slide1: {
      position: 'absolute',
      width: '100%',
      paddingTop: '42%',
      backgroundColor: '#f1f3f2',
   },

   thumbSlide1: {
      position: 'absolute',
      top: 0,
      width: '100%',
      height: '100%',
      background: 'url(https://bom.so/TWQ8kL)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: '50% 0px',
      animation: '$thumbSlide1Effect 2s ease-in-out',
      transition: 'visibility 0s linear 2s',
   },
   thumbSlide1Out: {
      visibility: 'hidden',
      animation: '$thumbSlide1OutEffect 2s ease-in-out',
   },
   '@keyframes thumbSlide1Effect': {
      from: {
         top: '-100%',
      },
      to: {
         top: 0,
      },
   },
   '@keyframes thumbSlide1OutEffect': {
      from: {
         top: '0%',
      },
      to: {
         top: '-100%',
      },
   },

   designStyles1: {
      position: 'absolute',
      top: '36%',
      right: '3%',
      '&.MuiTypography-root': {
         fontFamily: 'Montserrat, sans-serif',
         fontSize: 21,
         color: theme.palette.secondary.lightTextHover,
         letterSpacing: 4,
      },
      animation: '$designStyles1Effect 2s ease-in-out',
      transition: 'visibility 0s linear 2.6s',
   },
   designStyles1Out: {
      visibility: 'hidden',
      animation: '$designStyles1OutEffect 2.6s ease-in-out',
   },
   '@keyframes designStyles1Effect': {
      '0%': {
         opacity: 0,
      },
      '50%': {
         top: '60%',
         opacity: 0,
      },
      '80%': {
         opacity: 1,
      },
      '100%': {
         top: '36%',
      },
   },
   '@keyframes designStyles1OutEffect': {
      '0%': {
         opacity: 1,
      },
      '50%': {
         top: '36%',
         opacity: 1,
      },
      '80%': {
         opacity: 0,
      },
      '100%': {
         top: '60%',
         opacity: 0,
      },
   },

   productName1: {
      position: 'absolute',
      top: '38%',
      right: '3%',
      '&.MuiTypography-root': {
         fontSize: 38,
         color: theme.palette.secondary.darkerText,
         fontWeight: 'bold',
         letterSpacing: 2,
      },
      animation: '$productName1Effect 2.2s ease-in-out',
      transition: 'visibility 0s linear 2.4s',
   },
   productName1Out: {
      visibility: 'hidden',
      animation: '$productName1OutEffect 2.4s ease-in-out',
   },
   '@keyframes productName1Effect': {
      '0%': {
         opacity: 0,
      },
      '50%': {
         top: '65%',
         opacity: 0,
      },
      '80%': {
         opacity: 1,
      },
      '100%': {
         top: '38%',
      },
   },
   '@keyframes productName1OutEffect': {
      '0%': {
         opacity: 1,
      },
      '50%': {
         top: '38%',
         opacity: 1,
      },
      '80%': {
         opacity: 0,
      },
      '100%': {
         top: '65%',
         opacity: 0,
      },
   },

   price1: {
      position: 'absolute',
      top: '48%',
      right: '3%',
      '&.MuiTypography-root': {
         fontFamily: 'Montserrat, sans-serif',
         fontSize: 42,
         color: theme.palette.info.main,
         fontWeight: 'lighter',
         letterSpacing: 2,
      },
      animation: '$price1Effect 2.4s ease-in-out',
      transition: 'visibility 0s linear 2.2s',
   },
   price1Out: {
      visibility: 'hidden',
      animation: '$price1OutEffect 2.2s ease-in-out',
   },
   '@keyframes price1Effect': {
      '0%': {
         opacity: 0,
      },
      '50%': {
         top: '78%',
         opacity: 0,
      },
      '80%': {
         opacity: 1,
      },
      '100%': {
         top: '48%',
      },
   },
   '@keyframes price1OutEffect': {
      '0%': {
         opacity: 1,
      },
      '50%': {
         top: '48%',
         opacity: 1,
      },
      '80%': {
         opacity: 0,
      },
      '100%': {
         top: '78%',
         opacity: 0,
      },
   },

   type1: {
      position: 'absolute',
      top: '63%',
      right: '3%',
      '&.MuiTypography-root': {
         fontFamily: 'Montserrat, sans-serif',
         fontSize: 14,
         color: theme.palette.secondary.lightText,
         fontWeight: 'bold',
         letterSpacing: 2,
      },
      animation: '$type1Effect 2.6s ease-in-out',
      transition: 'visibility 0s linear 2s',
   },
   type1Out: {
      visibility: 'hidden',
      animation: '$type1OutEffect 2s ease-in-out',
   },
   '@keyframes type1Effect': {
      '0%': {
         opacity: 0,
      },
      '50%': {
         top: '83%',
         opacity: 0,
      },
      '80%': {
         opacity: 1,
      },
      '100%': {
         top: '63%',
      },
   },
   '@keyframes type1OutEffect': {
      '0%': {
         opacity: 1,
      },
      '50%': {
         top: '63%',
         opacity: 1,
      },
      '80%': {
         opacity: 0,
      },
      '100%': {
         top: '83%',
         opacity: 0,
      },
   },

   // SLIDE 2
   slide2: {
      position: 'absolute',
      width: '100%',
      paddingTop: '42%',
      backgroundColor: '#f1f3f2',
   },

   thumbSlide2: {
      position: 'absolute',
      top: 0,
      width: '100%',
      height: '100%',
      background: 'url(https://bom.so/nT06la)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: '50% 0px',
      animation: '$thumbSlide2Effect 2s ease-in-out',
      transition: 'visibility 0s linear 2s',
   },
   thumbSlide2Out: {
      visibility: 'hidden',
      animation: '$thumbSlide2OutEffect 2s ease-in-out',
   },
   '@keyframes thumbSlide2Effect': {
      from: {
         right: '-100%',
      },
      to: {
         right: 0,
      },
   },
   '@keyframes thumbSlide2OutEffect': {
      from: {
         right: '0%',
      },
      to: {
         right: '-100%',
      },
   },

   designStyles2: {
      position: 'absolute',
      top: '36%',
      left: '3%',
      '&.MuiTypography-root': {
         fontFamily: 'Montserrat, sans-serif',
         fontSize: 21,
         color: theme.palette.secondary.lightTextHover,
         letterSpacing: 4,
      },
      animation: '$designStyles2Effect 2s ease-in-out',
      transition: 'visibility 0s linear 2.6s',
   },
   designStyles2Out: {
      visibility: 'hidden',
      animation: '$designStyles2OutEffect 2.6s ease-in-out',
   },
   '@keyframes designStyles2Effect': {
      '0%': {
         opacity: 0,
         left: '-50%',
      },
      '60%': {
         opacity: 1,
      },
      '100%': {
         left: '3%',
      },
   },
   '@keyframes designStyles2OutEffect': {
      '0%': {
         opacity: 1,
         left: '3%',
      },
      '60%': {
         opacity: 0,
      },
      '100%': {
         left: '-50%',
         opacity: 0,
      },
   },

   productName2: {
      position: 'absolute',
      top: '38%',
      left: '3%',
      '&.MuiTypography-root': {
         fontSize: 38,
         color: theme.palette.secondary.darkerText,
         fontWeight: 'bold',
         letterSpacing: 2,
      },
      animation: '$productName2Effect 2.2s ease-in-out',
      transition: 'visibility 0s linear 2.4s',
   },
   productName2Out: {
      visibility: 'hidden',
      animation: '$productName2OutEffect 2.4s ease-in-out',
   },
   '@keyframes productName2Effect': {
      '0%': {
         opacity: 0,
         left: '-50%',
      },
      '60%': {
         opacity: 1,
      },
      '100%': {
         left: '3%',
      },
   },
   '@keyframes productName2OutEffect': {
      '0%': {
         opacity: 1,
         left: '3%',
      },
      '60%': {
         opacity: 0,
      },
      '100%': {
         left: '-50%',
         opacity: 0,
      },
   },

   price2: {
      position: 'absolute',
      top: '48%',
      left: '3%',
      '&.MuiTypography-root': {
         fontFamily: 'Montserrat, sans-serif',
         fontSize: 42,
         color: theme.palette.info.main,
         fontWeight: 'lighter',
         letterSpacing: 2,
      },
      animation: '$price2Effect 2.4s ease-in-out',
      transition: 'visibility 0s linear 2.2s',
   },
   price2Out: {
      visibility: 'hidden',
      animation: '$price2OutEffect 2.2s ease-in-out',
   },
   '@keyframes price2Effect': {
      '0%': {
         opacity: 0,
         left: '-50%',
      },
      '60%': {
         opacity: 1,
      },
      '100%': {
         left: '3%',
      },
   },
   '@keyframes price2OutEffect': {
      '0%': {
         opacity: 1,
         left: '3%',
      },
      '60%': {
         opacity: 0,
      },
      '100%': {
         left: '-50%',
         opacity: 0,
      },
   },

   type2: {
      position: 'absolute',
      top: '63%',
      left: '3%',
      '&.MuiTypography-root': {
         fontFamily: 'Montserrat, sans-serif',
         fontSize: 14,
         color: theme.palette.secondary.lightText,
         fontWeight: 'bold',
         letterSpacing: 2,
      },
      animation: '$type2Effect 2.6s ease-in-out',
      transition: 'visibility 0s linear 2s',
   },
   type2Out: {
      visibility: 'hidden',
      animation: '$type2OutEffect 2s ease-in-out',
   },
   '@keyframes type2Effect': {
      '0%': {
         opacity: 0,
         left: '-50%',
      },
      '60%': {
         opacity: 1,
      },
      '100%': {
         left: '3%',
      },
   },
   '@keyframes type2OutEffect': {
      '0%': {
         opacity: 1,
         left: '3%',
      },
      '60%': {
         opacity: 0,
      },
      '100%': {
         left: '-50%',
         opacity: 0,
      },
   },

   slideNumber: {
      position: 'absolute',
      top: 18,
      display: 'flex',
      left: 22,
   },
   slideNumberBtn: {
      position: 'relative',
      width: 16,
      height: 16,
      background: theme.palette.secondary.lightTextHover,
      borderRadius: '50%',
      '&:hover $subSlideNumber': {
         opacity: 1,
      },
      cursor: 'pointer',
      margin: 6,
   },
   subSlideNumber: {
      opacity: 0,
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: theme.palette.primary.main,
      transition: 'all 0.05s ease-in-out',
   },
   subSLiderNumberActive: {
      opacity: 1,
   },
}))
