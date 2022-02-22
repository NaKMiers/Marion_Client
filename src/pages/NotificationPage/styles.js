import { makeStyles } from '@mui/styles'

export default makeStyles(theme => ({
   notificationPage: {
      margin: 'auto',
      maxWidth: 1500,
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
      '@media (max-width: 600px)': {
         '&.MuiTypography-root': {
            fontSize: '8vw',
         },
      },
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
      margin: 'auto',
      minWidth: 280,
   },

   notificationList: {
      border: `1px solid #ccc`,
      '&.MuiList-root': {
         padding: 0,
      },
   },
   headingList: {
      textAlign: 'right',
      padding: '8px 16px',
      borderBottom: '1px solid #ccc',
   },
   markReaded: {
      display: 'inline-block',
      color: theme.palette.info.main,
      cursor: 'pointer',
      '&.MuiTypography-root': {
         marginRight: -22,
         transition: 'all 0.1s ease-in-out',
      },
      '&:hover': {
         color: theme.palette.secondary.lightText,
      },
   },
   markReadedActive: {
      color: theme.palette.secondary.lightText,
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

   notify: {
      marginBottom: 16,
      '&.MuiListItemButton-root': {
         padding: '16px 16px',
      },
   },
   notifyThumbWrap: {
      minWidth: 75,
      width: 75,
      minHeight: 75,
      height: 75,
   },
   notifyThumb: {
      width: '100%',
      height: '100%',
   },

   notifyContent: {
      width: 'auto',
      height: 80,
      marginLeft: 16,
      overflow: 'scroll',
   },
   notifyTitle: {
      '&.MuiTypography-root': {
         fontSize: 20,
      },
   },
   notifyDesc: {
      '&.MuiTypography-root': {
         fontFamily: 'Montserrat, sans-serif',
         fontWeight: 'bold',
         fontSize: 15,
      },
   },
   removeBtn: {
      position: 'absolute',
      top: 10,
      right: 12,
      cursor: 'pointer',
   },
   removeIcon: {
      '&.MuiSvgIcon-root': {
         fontSize: 20,
         color: theme.palette.secondary.lightTextHover,
      },
      '&:hover': {
         color: theme.palette.primary.dark,
      },
   },
}))
