import { makeStyles } from '@mui/styles'

export default makeStyles(theme => ({
   notificationPage: {
      margin: 'auto',
      maxWidth: 1200,
   },
   pageTitle: {
      position: 'relative',
      width: '100%',
      height: 200,
      background: 'url(https://bom.so/z66yZs)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
   },

   title: {
      '&.MuiTypography-root': {
         fontSize: 48,
      },
      padding: '24px 28px',
   },
   title1: {
      fontWeight: 'bold',
   },
   title2: {
      fontWeight: 100,
      fontFamily: 'Montserrat, sans-serif',
   },

   pageIconWrap: {
      position: 'absolute',
      right: 32,
      top: 0,
      height: 200,
   },
   pageIcon: {
      '&.MuiSvgIcon-root': {
         fontSize: 144,
         height: 200,
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

   notificationBody: {
      padding: '24px 36px',
   },

   notificationList: {
      // border: `1px solid #ccc`,
   },
   headingList: {
      textAlign: 'right',
      padding: '0px 16px',
   },
   markReaded: {
      display: 'inline-block',
      color: theme.palette.secondary.lightText,
      cursor: 'pointer',
      '&.MuiTypography-root': {
         marginRight: -22,
         transition: 'all 0.1s ease-in-out',
      },
      '&:hover': {
         color: theme.palette.secondary.lightTextHover,
      },
   },
   markReadedActive: {
      '&.MuiTypography-root': {
         marginRight: 0,
      },
   },
   markReadedIcon: {
      marginBottom: -4,
      marginLeft: 4,
      '&.MuiSvgIcon-root': {
         fontSize: 20,
         transition: 'all 0.1s ease-in-out',
      },
      color: theme.palette.info.main,
      opacity: 0,
   },
   markReadedIconActive: {
      opacity: 1,
   },

   notify: {},
   notifyThumbWrap: {
      width: 70,
   },
   notifyThumb: {
      width: '100%',
   },

   notifyContent: {
      display: 'flex',
      flexDirection: 'column',
      height: 70,
      '&.MuiListItemButton-root': {
         alignItems: 'flex-start',
         padding: '0px 0px 0px 12px',
      },
   },
   notifyTitle: {
      '&.MuiTypography-root': {
         fontSize: 20,
      },
   },
   notifyDesc: {},
   removeIcon: {
      '&.MuiSvgIcon-root': {
         fontSize: 32,
         color: theme.palette.danger.main,
      },
   },
}))
