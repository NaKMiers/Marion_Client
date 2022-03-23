import { makeStyles } from '@mui/styles'

export default makeStyles(theme => ({
   productPage: {
      margin: 'auto',
      maxWidth: 1500,
   },

   // PAGE TITLE
   pageTitle: {
      position: 'relative',
      width: '100%',
      height: 300,
      background: 'url(https://bom.so/z66yZs)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      '@media (max-width: 680px)': {
         height: 420,
      },
   },

   title: {
      '&.MuiTypography-root': {
         position: 'absolute',
         textAlign: 'center',
         width: '100%',
         top: '35%',
         left: '50%',
         transform: 'translate(-50%, -50%)',
         fontSize: 48,
         padding: '0px 16px',
         color: theme.palette.secondary.darkerText,
      },
      '@media (max-width: 600px)': {
         '&.MuiTypography-root': {
            fontSize: '8vw',
         },
      },
   },
   title1: {
      fontFamily: 'Montserrat, sans-serif',
   },
   title2: {
      fontWeight: 'bold',
   },

   subtitle: {
      '&.MuiTypography-root': {
         fontSize: 20,
         padding: '0px 24px',
      },
      '@media (max-width: 600px)': {
         '&.MuiTypography-root': {
            fontSize: '3.3vw',
         },
      },
   },

   navigator: {
      position: 'absolute',
      left: 28,
      bottom: 8,
      display: 'flex',
      alignItems: 'center',
   },
   nav1: {
      color: theme.palette.info.main,
      paddingBottom: 2,
   },
   navArrowIcon: {
      margin: '0px 8px 2px 8px',
   },
   nav2: {
      color: theme.palette.secondary.lightTextHover,
      borderBottom: `2px solid ${theme.palette.danger.main}`,
   },
   link: {
      textDecoration: 'none',
   },

   main: {
      padding: '72px 52px',
   },

   // PRODUCT CONTENT TOP
   productContentTop: {
      display: 'flex',
      '@media (max-width: 780px)': {
         flexDirection: 'column',
      },
   },

   // PRODUCT CONTENT TOP - left
   productContentLeft: {
      position: 'relative',
      width: '50%',
      padding: '0px 20px',
      '@media (max-width: 780px)': {
         width: '100%',
      },
   },

   thumbWrap: {
      position: 'relative',
   },
   productLabel: {
      position: 'absolute',
      top: 20,
      left: -6,
      color: theme.palette.primary.main,
      fontSize: 11,
      textAlign: 'center',
      lineHeight: '20px',
      fontWeight: 'bold',
   },
   onSale: {
      background: theme.palette.warning.main,
      borderRadius: 4,
      borderBottomLeftRadius: 0,
      height: 20,
      width: 64,
      marginBottom: 6,
      position: 'relative',
      '&::after': {
         position: 'absolute',
         content: '""',
         left: 0,
         bottom: -5,
         borderWidth: '5px 0 0 5px',
         borderStyle: 'solid',
         borderColor: `${theme.palette.warning.darker} transparent`,
      },
   },
   new: {
      background: theme.palette.primary.dark,
      borderRadius: 4,
      borderBottomLeftRadius: 0,
      height: 20,
      width: 40,
      marginBottom: 6,
      position: 'relative',
      '&::after': {
         position: 'absolute',
         content: '""',
         left: 0,
         bottom: -5,
         borderWidth: '5px 0 0 5px',
         borderStyle: 'solid',
         borderColor: `${theme.palette.primary.dark} transparent`,
      },
   },

   productThumb1: {
      background: 'url(https://bom.so/U0UUEO)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      paddingTop: '70%',
      animation: '$thumb1Effect 1s ease-in-out',
   },
   productThumb1Out: {
      visibility: 'hidden',
      animation: '$thumb1OutEffect 1s ease-in-out',
   },
   '@keyframes thumb1Effect': {
      from: {
         opacity: 0,
      },
      to: {
         opacity: 1,
      },
   },
   '@keyframes thumb1OutEffect': {
      from: {
         opacity: 1,
      },
      to: {
         opacity: 0,
      },
   },

   productThumb2: {
      background: 'url(https://bom.so/zpcTuC)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      paddingTop: '70%',
      animation: '$thumb2Effect 1s ease-in-out',
   },
   productThumb2Out: {
      visibility: 'hidden',
      animation: '$thumb2OutEffect 1s ease-in-out',
   },
   '@keyframes thumb2Effect': {
      from: {
         opacity: 0,
      },
      to: {
         opacity: 1,
      },
   },
   '@keyframes thumb2OutEffect': {
      from: {
         opacity: 1,
      },
      to: {
         opacity: 0,
      },
   },

   productThumb3: {
      background: 'url(https://bom.so/U0UUEO)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      paddingTop: '70%',
      animation: '$thumb3Effect 1s ease-in-out',
   },
   productThumb3Out: {
      visibility: 'hidden',
      animation: '$thumb3OutEffect 1s ease-in-out',
   },
   '@keyframes thumb3Effect': {
      from: {
         opacity: 0,
      },
      to: {
         opacity: 1,
      },
   },
   '@keyframes thumb3OutEffect': {
      from: {
         opacity: 1,
      },
      to: {
         opacity: 0,
      },
   },

   thumbNumber: {
      marginTop: 16,
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
   },
   thumbNumberBtn: {
      position: 'relative',
      width: 12,
      height: 12,
      background: theme.palette.secondary.lightTextHover,
      borderRadius: '50%',
      '&:hover $subThumbNumber': {
         opacity: 1,
      },
      cursor: 'pointer',
      margin: 6,
   },
   subThumbNumber: {
      opacity: 0,
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: theme.palette.primary.main,
      transition: 'all 0.05s ease-in-out',
   },
   subThumbNumberActive: {
      opacity: 1,
   },

   // PRODUCT CONTENT TOP - right
   productContentRight: {
      width: '50%',
      padding: '0px 20px',
      '@media (max-width: 780px)': {
         width: '100%',
         marginTop: 24,
      },
   },

   productHeading: {
      display: 'flex',
      justifyContent: 'space-between',
      color: theme.palette.secondary.darkerText,
   },
   productName: {
      '&.MuiTypography-root': {
         fontSize: 28,
         fontFamily: 'Montserrat, sans-serif !important',
         margin: '0px !important',
      },
   },
   productPageWrap: {
      width: 66,
      whiteSpace: 'nowrap',
   },
   productPageBtn: {
      padding: 2,
      border: 'none',
      background: 'none',
      cursor: 'pointer',
   },
   prevProductIcon: {
      '&.MuiSvgIcon-root': {
         fontSize: 18,
         color: theme.palette.secondary.lightText,
      },
   },
   moreProductIcon: {
      '&.MuiSvgIcon-root': {
         fontSize: 18,
         color: theme.palette.secondary.lightText,
      },
   },
   nextProductIcon: {
      '&.MuiSvgIcon-root': {
         fontSize: 18,
         color: theme.palette.secondary.lightText,
      },
   },

   productPrice: {
      color: theme.palette.info.main,
      letterSpacing: 2,
   },
   productPrevPrice: {
      fontSize: 21,
      opacity: 0.5,
      marginRight: 6,
      textDecoration: 'line-through',
   },
   productCurPrive: {
      fontSize: 28,
   },

   cartWrap: {
      display: 'flex',
      height: 40,
   },
   quantityWrap: {
      border: '1px solid #ccc',
      padding: '4px 0px',
      borderRadius: 4,
      whiteSpace: 'nowrap',
   },
   decQuantityBtn: {
      '&.MuiButton-root': {
         margin: -10,
      },
   },
   decIcon: {
      '&.MuiSvgIcon-root': {
         fontSize: 18,
         color: theme.palette.secondary.lightTextHover,
      },
   },
   quantityInput: {
      width: 44,
      height: '100%',
      fontSize: 16,
      color: theme.palette.secondary.darkerText,
      outline: 'none',
      padding: '5px 8px',
      border: 'none',
      borderLeft: '1px solid #ccc',
      borderRight: '1px solid #ccc',
   },
   incQuantityBtn: {
      '&.MuiButton-root': {
         margin: -10,
      },
   },
   incIcon: {
      '&.MuiSvgIcon-root': {
         fontSize: 18,
         color: theme.palette.secondary.lightTextHover,
      },
   },

   addToCartBtn: {
      '&.MuiButton-root': {
         background: theme.palette.info.main,
         color: theme.palette.secondary.contrastText,
         padding: '0px 16px',
         margin: '0px 14px 0px 24px',
         whiteSpace: 'nowrap',
         minWidth: 132,
      },
   },
   favBtn: {},
   favIcon: {},

   manufacture: {
      '&.MuiTypography-root': {
         color: theme.palette.secondary.lightTextHover,
      },
   },
   manufactureDate: {
      color: theme.palette.secondary.darkerText,
   },

   categories: {
      '&.MuiTypography-root': {
         color: theme.palette.secondary.lightTextHover,
      },
   },
   categorieLink: {
      textDecoration: 'none',
      color: theme.palette.info.main,
      '&:hover': {
         color: theme.palette.info.darker,
      },
   },

   tags: {
      color: theme.palette.secondary.lightTextHover,
   },

   tag: {
      display: 'inline-block',
      minWidth: 60,
      height: 22,
      marginLeft: 24,
      background: theme.palette.primary.light,
      lineHeight: '22px',
      color: theme.palette.secondary.lightTextHover,
      textAlign: 'center',
      fontSize: 12,
      fontWeight: 'bold',
      borderTopRightRadius: 4,
      borderBottomRightRadius: 4,
      position: 'relative',
      '&::before': {
         content: '""',
         position: 'absolute',
         top: 1.9,
         left: -10,
         width: 17.8,
         height: 18.2,
         background: theme.palette.primary.light,
         transform: 'rotate(45deg)',
         borderRadius: 4,
      },
      '&::after': {
         content: '""',
         position: 'absolute',
         top: '50%',
         left: 0,
         transform: 'translate(-50%, -50%)',
         width: 8,
         height: 8,
         background: theme.palette.primary.main,
         borderRadius: '50%',
      },
   },

   share: {
      '&.MuiTypography-root': {
         color: theme.palette.secondary.lightTextHover,
         position: 'relative',
      },
   },
   socialLinkWrapper: {
      display: 'inline-block',
      position: 'absolute',
   },
   socialLink: {
      padding: '0px 4px',
      marginBottom: -4,
   },
   socialIcon: {
      '&.MuiSvgIcon-root': {
         color: theme.palette.secondary.darkerText,
      },
   },

   // PRODUCT CONTENT BOTTOM
   productContentBottom: {
      padding: '56px 20px',
   },

   // PRODUCT CONTENT BOTTOM - tabs
   tabs: {},
   tabHeadings: {
      borderBottom: '1px solid #ccc',
      '& .MuiTabs-indicator': {
         background: theme.palette.info.main,
      },
      '& .Mui-selected': {
         background: theme.palette.info.main,
         color: theme.palette.info.main,
      },
   },
   tabHeading: {
      '&.MuiButtonBase-root': {
         color: theme.palette.secondary.darkerText,
      },
   },
   tabPanel: {},
   descItem: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
   },
   descIcon: {
      '&.MuiSvgIcon-root': {
         width: 48,
         height: 48,
         background: theme.palette.secondary.main,
         borderRadius: '50%',
         padding: 12,
      },
   },
   descItemText: {
      padding: '0px 12px',
   },
   descIcon1: {
      '&.MuiSvgIcon-root': {
         color: '#f44336',
      },
   },
   descIcon2: {
      '&.MuiSvgIcon-root': {
         color: theme.palette.info.main,
      },
   },
   descIcon3: {
      '&.MuiSvgIcon-root': {
         color: '#f44336',
      },
   },
   descIcon4: {
      '&.MuiSvgIcon-root': {
         color: theme.palette.info.main,
      },
   },
   descIcon5: {
      '&.MuiSvgIcon-root': {
         color: theme.palette.warning.main,
      },
   },
   descIcon6: {
      '&.MuiSvgIcon-root': {
         color: theme.palette.success.main,
      },
   },

   addtionalInfoTable: {
      textAlign: 'left',
      fontSize: 14,
   },
   tableHeading: {
      width: 150,
   },

   reviewPanelWrap: {
      display: 'flex',
      '@media (max-width: 900px)': {
         flexDirection: 'column',
      },
      color: theme.palette.secondary.darkerText,
   },
   otherReviews: {
      width: '50%',
      paddingRight: 16,
      '@media (max-width: 900px)': {
         width: '100%',
      },
   },
   tablePanelHeading: {
      '&.MuiTypography-root': {
         fontSize: 28,
         fontFamily: 'Montserrat, sans-serif !important',
         margin: '0px 0px 24px 0px !important',
      },
   },
   reviewList: {
      width: '100%',
      maxWidth: 500,
   },

   myReivew: {
      width: '50%',
      paddingLeft: 16,
      '@media (max-width: 900px)': {
         width: '100%',
      },
   },

   myReviewInput: {
      width: '100%',
      height: 150,
      fontSize: 16,
      padding: '8px 12px',
      outline: 'none',
      border: `1px solid ${theme.border.darker}`,
      borderRadius: 4,
      resize: 'none',
   },
   myReviewInfoInput: {
      width: '100%',
      fontSize: 16,
      outline: 'none',
      padding: '8px 12px',
      border: `1px solid ${theme.border.darker}`,
      borderRadius: 4,
   },
   saveInfoReviewBtnWrap: {
      display: 'flex',
      alignItem: 'center',
   },
   saveInfoReviewBtn: {
      width: 24,
      height: 24,
   },
   text: {
      margin: '0px 0px 0px 8px !important',
      fontSize: 16,
   },

   // PRODUCT CONTENT BOTTOM - coupon
   coupon: {
      margin: '24px 0px',
      padding: 24,
      background: 'url(https://bom.so/QFGwwN)',
      backgroundSize: 'contain',
      width: '100%',
      height: 230,
      '@media (max-width: 900px)': {
         height: 560,
      },
   },
   innerCoupon: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      border: '4px solid #fff',
      height: '100%',
      padding: 16,
      color: '#fff',
      '@media (max-width: 900px)': {
         flexDirection: 'column',
         padding: '16px 24px 36px 24px',
      },
   },
   couponPrice: {
      fontSize: 120,
      margin: '0px !important',
      fontWeight: 'bold',
      letterSpacing: 5,
      lineHeight: '142px',
      width: '24%',
      textAlign: 'center',
      padding: '0px 2%',
      '@media (max-width: 900px)': {
         width: '100%',
      },
   },
   couponTitle: {
      width: '26%',
      textAlign: 'center',
      fontSize: 36,
      fontFamily: 'Montserrat, sans-serif !important',
      fontWeight: 'bold',
      padding: '0px 2%',
      '@media (max-width: 900px)': {
         width: '100%',
      },
   },
   couponTitle1: {
      color: theme.palette.warning.main,
   },
   couponTitle2: {
      color: theme.palette.info.main,
   },
   couponSubTitle: {
      fontSize: 20,
      fontFamily: 'Montserrat, sans-serif !important',
      width: '26%',
      textAlign: 'center',
      padding: '0px 2%',
      '@media (max-width: 900px)': {
         width: '100%',
      },
   },
   couponSubscribe: {
      display: 'flex',
      flexDirection: 'column',
      width: '24%',
      padding: '0px 2%',
      '@media (max-width: 900px)': {
         width: '100%',
      },
   },
   couponInputEmail: {
      outline: 'none',
      fontSize: 16,
      padding: 8,
   },
   couponSignUpBtn: {
      background: theme.palette.info.main,
      border: 'none',
      fontSize: 16,
      padding: 8,
      fontWeight: 'bold',
      fontFamily: 'Montserrat, sans-serif',
      color: theme.palette.secondary.contrastText,
      marginTop: 20,
      borderRadius: 4,
      cursor: 'pointer',
      '&:hover': {
         background: theme.palette.info.darker,
      },
   },

   // PRODUCT CONTENT BOTTOM - moreDetail
   moreDetail: {
      marginTop: 48,
   },
   accordion: {
      '&.MuiPaper-root': {
         boxShadow: 'none',
         borderRadius: '0 !important',
      },
   },
   accordionHeading: {
      color: theme.palette.secondary.darkerText,
   },
   accordionSummary: {
      '&.MuiAccordionSummary-root': {
         height: 56,
         minHeight: 0,
         padding: 0,
      },
   },
   accordionDetails: {
      display: 'flex',
      margin: '0px -16px',
   },
   accordionDetail: {
      padding: '0px 16px',
   },
   accordionBrandImg: {
      width: '30%',
   },
}))
