import { makeStyles } from '@mui/styles'

export default makeStyles(theme => ({
   slider: {
      position: 'relative',
      height: '45vw',
      maxHeight: 675,
      overflow: 'hidden',
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
      animation: '$thumbSlide1Effect 1s ease-in-out',
      transition: 'visibility 0s linear 1s',
   },
   thumbSlide1Out: {
      visibility: 'hidden',
      animation: '$thumbSlide1OutEffect 1s ease-in-out',
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

   slide1InfoWrap: {
      background: '#333',
      width: '35%',
      height: '100%',
      position: 'absolute',
      top: 0,
      right: 0,
      textAlign: 'center',
      animation: '$slide1InfoWrapEffect 1s ease-in-out',
   },
   slide1InfoWrapOut: {
      animation: '$slide1InfoWrapOutEffect 1s ease-in-out',
   },
   '@keyframes slide1InfoWrapEffect': {
      from: {
         right: '-35%',
         opacity: 0,
      },
      to: {
         right: 0,
         opacity: 1,
      },
   },
   '@keyframes slide1InfoWrapOutEffect': {
      from: {
         right: 0,
         opacity: 1,
      },
      to: {
         right: '-35%',
         opacity: 0,
      },
   },

   designStyles1: {
      maxWidth: '90%',
      position: 'absolute',
      top: '32%',
      left: '10%',
      '&.MuiTypography-root': {
         fontFamily: 'Montserrat, sans-serif',
         fontSize: 21,
         color: theme.palette.secondary.lightTextHover,
         letterSpacing: 4,
      },
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      animation: '$designStyles1Effect 1s ease-in-out',
      // transition: 'visibility 0s linear 1.3s',
   },
   designStyles1Out: {
      visibility: 'hidden',
      animation: '$designStyles1OutEffect 1.3s ease-in-out',
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
         top: '32%',
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
      maxWidth: '82%',
      position: 'absolute',
      top: '35%',
      right: '8%',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      '&.MuiTypography-root': {
         fontSize: 38,
         color: theme.palette.secondary.darkerText,
         fontWeight: 'bold',
         letterSpacing: 2,
      },
      animation: '$productName1Effect 1.05s ease-in-out',
      // transition: 'visibility 0s linear 1.2s',
   },
   productName1Out: {
      visibility: 'hidden',
      animation: '$productName1OutEffect 1.2s ease-in-out',
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
         top: '35%',
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
      maxWidth: '82%',
      position: 'absolute',
      top: '44%',
      right: '8%',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      '&.MuiTypography-root': {
         fontFamily: 'Montserrat, sans-serif',
         fontSize: 44,
         color: theme.palette.info.main,
         fontWeight: 'lighter',
         letterSpacing: 2,
      },
      animation: '$price1Effect 1.2s ease-in-out',
      // transition: 'visibility 0s linear 1.05s',
   },
   price1Out: {
      visibility: 'hidden',
      animation: '$price1OutEffect 1.05s ease-in-out',
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
         top: '44%',
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
      maxWidth: '82%',
      position: 'absolute',
      top: '26%',
      left: '10%',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      '&.MuiTypography-root': {
         fontFamily: 'Montserrat, sans-serif',
         fontSize: 14,
         color: theme.palette.secondary.lightText,
         fontWeight: 'bold',
         letterSpacing: 2,
      },
      animation: '$type1Effect 1.3s ease-in-out',
      // transition: 'visibility 0s linear 1s',
   },
   type1Out: {
      visibility: 'hidden',
      animation: '$type1OutEffect 1s ease-in-out',
   },
   '@keyframes type1Effect': {
      '0%': {
         opacity: 0,
      },
      '50%': {
         top: '0%',
         opacity: 0,
      },
      '80%': {
         opacity: 1,
      },
      '100%': {
         top: '26%',
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
      animation: '$thumbSlide2Effect 1s ease-in-out',
      transition: 'visibility 0s linear 1s',
   },
   thumbSlide2Out: {
      visibility: 'hidden',
      animation: '$thumbSlide2OutEffect 1s ease-in-out',
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

   slide2InfoWrap: {
      background: '#333',
      width: '35%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      textAlign: 'center',
      animation: '$slide2InfoWrapEffect 1s ease-in-out',
   },
   slide2InfoWrapOut: {
      animation: '$slide2InfoWrapOutEffect 1s ease-in-out',
   },
   '@keyframes slide2InfoWrapEffect': {
      from: {
         left: '-35%',
         opacity: 0,
      },
      to: {
         left: 0,
         opacity: 1,
      },
   },
   '@keyframes slide2InfoWrapOutEffect': {
      from: {
         right: 0,
         opacity: 1,
      },
      to: {
         right: '-35%',
         opacity: 0,
      },
   },

   designStyles2: {
      maxWidth: '82%',
      position: 'absolute',
      top: '32%',
      right: '10%',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      '&.MuiTypography-root': {
         fontFamily: 'Montserrat, sans-serif',
         fontSize: 21,
         color: theme.palette.secondary.lightTextHover,
         letterSpacing: 4,
      },
      animation: '$designStyles2Effect 1.3s ease-in-out',
      // transition: 'visibility 0s linear 1.3s',
   },
   designStyles2Out: {
      visibility: 'hidden',
      animation: '$designStyles2OutEffect 1.3s ease-in-out',
   },
   '@keyframes designStyles2Effect': {
      '0%': {
         opacity: 0,
         right: '80%',
      },
      '60%': {
         opacity: 1,
      },
      '100%': {
         right: '10%',
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
      maxWidth: '82%',
      position: 'absolute',
      top: '35%',
      left: '8%',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      '&.MuiTypography-root': {
         fontSize: 38,
         color: theme.palette.secondary.darkerText,
         fontWeight: 'bold',
         letterSpacing: 2,
      },
      animation: '$productName2Effect 1.4s ease-in-out',
      // transition: 'visibility 0s linear 1.2s',
   },
   productName2Out: {
      visibility: 'hidden',
      animation: '$productName2OutEffect 1.2s ease-in-out',
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
         left: '8%',
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
      maxWidth: '82%',
      position: 'absolute',
      top: '44%',
      left: '8%',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      '&.MuiTypography-root': {
         fontFamily: 'Montserrat, sans-serif',
         fontSize: 42,
         color: theme.palette.info.main,
         fontWeight: 'lighter',
         letterSpacing: 2,
      },
      animation: '$price2Effect 1.6s ease-in-out',
      // transition: 'visibility 0s linear 1.05s',
   },
   price2Out: {
      visibility: 'hidden',
      animation: '$price2OutEffect 1.05s ease-in-out',
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
         left: '8%',
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
      maxWidth: '82%',
      position: 'absolute',
      top: '26%',
      right: '10%',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      '&.MuiTypography-root': {
         fontFamily: 'Montserrat, sans-serif',
         fontSize: 14,
         color: theme.palette.secondary.lightText,
         fontWeight: 'bold',
         letterSpacing: 2,
      },
      animation: '$type2Effect 1.3s ease-in-out',
      // transition: 'visibility 0s linear 1s',
   },
   type2Out: {
      visibility: 'hidden',
      animation: '$type2OutEffect 1s ease-in-out',
   },
   '@keyframes type2Effect': {
      '0%': {
         opacity: 0,
         right: '50%',
      },
      '60%': {
         opacity: 1,
      },
      '100%': {
         right: '10%',
      },
   },
   '@keyframes type2OutEffect': {
      '0%': {
         opacity: 1,
         left: '8%',
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
