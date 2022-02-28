import { makeStyles } from '@mui/styles'

export default makeStyles(theme => ({
   homePage: {
      margin: 'auto',
      maxWidth: 1500,
   },

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

   // SIDEBAR
   sidebar: {},
   sidebarBody: {
      padding: 16,
      height: 2000,
      width: '35vw',
      overflow: 'scroll',
      '@media (max-width: 900px)': {
         width: '45vw',
      },
      '@media (max-width: 600px)': {
         width: '65vw',
      },
   },

   search: {
      padding: '0px 24px 32px 24px',
      '&.MuiOutlinedInput-root': {
         borderRadius: 17,
      },
   },
   sidebarHeading: {
      '&.MuiTypography-root': {
         fontSize: 36,
         fontWeight: 'lighter',
         margin: '0px 0px 20px 0px !important',
         fontFamily: 'Montserrat, sans-serif !important',
      },
   },
   searchTextfield: {
      width: '100%',
      background: theme.palette.primary.light,
      '&.MuiOutlinedInput-root': {
         borderRadius: 16,
      },
      '& .MuiOutlinedInput-notchedOutline': {
         border: 'none',
      },
      '& .MuiOutlinedInput-input': {
         padding: '6px 14px',
         border: 'none',
         outline: 'none',
         fontSize: 15,
      },
   },
   searchInput: {},
   searchIcon: {
      cursor: 'pointer',
   },
   subHeading: {
      '&.MuiTypography-root': {
         fontSize: 18,
         fontFamily: 'Montserrat, sans-serif !important',
         fontWeight: 'bold',
      },
   },

   filterByCategories: {
      padding: '2px 24px 16px 24px',
   },
   filterByCtgList: {
      '&.MuiList-root': {
         padding: 0,
      },
   },
   filterByCtgItem: {
      color: theme.palette.secondary.darkerText,
      cursor: 'pointer',
      transition: 'all 0.2s ease-in-out',
      '&.MuiListItem-root': {
         padding: 0,
      },
      '&:hover': {
         color: theme.palette.info.main,
         '& $filterByCtgCount': {
            color: theme.palette.primary.main,
            background: theme.palette.info.main,
         },
         '& $colorBorder': {
            border: `2px solid ${theme.palette.info.main}`,
         },
      },
   },
   filterByCtgSubItem: {
      '& .MuiTypography-root': {
         fontSize: 15,
      },
      '&.MuiListItem-root': {
         padding: '2px 0px',
      },
   },
   count: {
      width: 26,
      height: 20,
      fontSize: 12,
      lineHeight: '20px',
      textAlign: 'center',
      background: theme.palette.primary.light,
      borderRadius: 10,
   },

   filterByColor: {
      padding: '2px 24px 16px 24px',
   },
   color: {
      width: 22,
      height: 22,
      borderRadius: '50%',
      position: 'relative',
   },
   colorBorder: {
      position: 'absolute',
      width: 30,
      height: 30,
      background: 'transparent',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '50%',
      border: `2px solid ${theme.border.light}`,
   },
   listItemText: {
      marginLeft: 12,
   },

   filterByBrand: {
      padding: '2px 24px 16px 24px',
   },

   filterByPrice: {
      padding: '2px 24px 16px 24px',
   },
   priceRange: {
      '&.MuiSlider-root': {
         color: theme.palette.info.main,
      },
   },

   filterByStatus: {
      padding: '2px 24px 16px 24px',
   },

   filterTotal: {
      padding: '28px 24px',
   },
   selectedFilterItem: {
      display: 'inline-block',
      marginRight: 8,
      background: theme.palette.primary.light,
      borderRadius: 20,
      padding: '2px 10px',
      fontSize: 14,
      color: theme.palette.secondary.darkerText,
   },
   clearBtn: {
      cursor: 'pointer',
   },
   deleteSelectedFilterItemBtn: {
      cursor: 'pointer',
      marginLeft: 2,
   },

   // PRODUCTIONS
   productions: {
      padding: '0px 16px',
   },
   topPanelRow: {
      display: 'flex',
      justifyContent: 'space-between',
   },
   filterBtn: {
      '&.MuiButton-root': {
         color: theme.palette.secondary.darkerText,
         border: `1px solid ${theme.border.light}`,
         padding: '0px 8px',
      },
   },
   filterIcon: {
      '&.MuiSvgIcon-root': {
         fontSize: 20,
      },
      marginTop: -2,
      marginRight: 4,
   },
   sortBtn: {
      '&.MuiButton-root': {
         color: theme.palette.secondary.darkerText,
         border: `1px solid ${theme.border.light}`,
         padding: '0px 8px',
      },
   },
   sortIcon: {
      '&.MuiSvgIcon-root': {
         fontSize: 24,
      },
      // marginTop: -5.5,
      marginLeft: 4,
   },
}))
