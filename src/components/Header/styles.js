import { makeStyles } from '@mui/styles'

export default makeStyles(theme => ({
   '@global': {
      '*::-webkit-scrollbar': {
         width: 0,
         height: 0,
      },
   },

   header: {
      '&.MuiAppBar-root': {
         boxShadow: 'none',
      },

      position: 'fixed',
   },

   toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      transition: 'all ease-in-out 0.3s',
      height: 80,
   },
   tollbarScroll: {
      height: 56,
      boxShadow: '0px 0px 0.5px 0.1px #333',
   },

   logo: {
      '&.MuiTypography-root': {
         whiteSpace: 'nowrap',
         textAlign: 'center',
         fontWeight: 'bold',
         fontSize: 48,
         background: theme.palette.primary.gradient,
         WebkitBackgroundClip: 'text',
         WebkitTextFillColor: 'transparent',
         marginRight: 16,
      },
      // transform: 'scale(1.2)',
      transition: 'all ease-in-out 0.3s',
   },
   logoScroll: {
      '&.MuiTypography-root': {
         transform: 'scale(0.8) translateX(-20px)',
         '@media (max-width: 900px)': {
            marginRight: -16,
         },
      },
   },

   search: {
      flexGrow: 1,
      maxWidth: 500,
   },
   searchTextfiled: {
      width: '100%',
   },
   inputProp: {
      height: 36,
      width: '100%',
   },
   searchIcon: {
      marginRight: 4,
   },

   headerBtnWrap: {
      whiteSpace: 'nowrap',
   },
   iconBtn: {
      '&.MuiIconButton-root': {
         margin: '0px 8px 0px 0px',
         padding: 8,
      },
   },
   iconAvtBtn: {
      '&.MuiIconButton-root': {
         margin: '0px 0px 0px 12px',
         padding: 0,
      },
   },
   menuBtn: {
      '&.MuiButtonBase-root': {
         marginLeft: 8,
      },
   },
   menuIcon: {
      '&.MuiSvgIcon-root': {
         fontSize: 30,
      },
   },

   notificationDialog: {},
   notify: {
      width: 350,
   },

   notifyThumb: {
      '&.MuiCardMedia-root': {
         width: 'auto',
      },
      width: 60,
      height: 60,
      borderRadius: 4,
   },
   notifyContent: {
      padding: '0px 16px',
      overflowX: 'scroll',
   },
   notifyTitle: {
      '&.MuiTypography-root': {
         fontSize: 18,
      },
   },
   notifyDesc: {
      '&.MuiTypography-root': {
         fontSize: 14,
      },
   },

   navModal: {
      display: 'none',
      position: 'absolute',
      top: 'calc(-100vh - 5px)',
      right: 0,
      left: 0,
      height: '100vh',
      transition: 'all 0.2s ease-in-out',
      '@media (max-width: 899px)': {
         display: 'block',
      },
   },
   navModalActive: {
      top: 0,
   },

   navWrap: {
      display: 'flex',
      height: '100%',
   },

   navPager: {
      width: '100%',
      '&.MuiPaper-root': {
         background: theme.palette.secondary.main,
      },
   },

   navSearch: {
      display: 'flex',
      alignItems: 'center',
      padding: '16px 16px 0px 16px',
   },

   searchTextfiledModal: {
      flexGrow: 1,
   },
   inputPropModal: {
      height: 40,
   },
   closeModalBtn: {
      '&.MuiButtonBase-root': {
         marginLeft: 16,
         marginRight: -8,
         padding: 0,
      },
   },
   closeModalIcon: {
      '&.MuiSvgIcon-root': {
         fontSize: 50,
         color: theme.palette.primary.constractText,
      },
   },

   navList: {
      width: '100%',
   },
   collapseItem: {
      '&.MuiListItemButton-root': {
         paddingLeft: 40,
      },
   },

   listItemIcon: {
      '&.MuiListItemIcon-root': {
         minWidth: 0,
         padding: '0px 22px 0px 7px',
      },
   },

   navIcon: {
      '&.MuiSvgIcon-root': {
         fontSize: 26,
      },
   },

   count: {
      padding: 0,
      background: 'orange',
      width: 28,
      height: 28,
      textAlign: 'center',
      lineHeight: '28px',
      borderRadius: '50%',
      color: theme.palette.secondary.contrastText,
   },

   footerSocial: {
      padding: '14px 0px 14px 25px',
      marginTop: 8,
   },
   footerSocialIcon: {
      '&.MuiSvgIcon-root': {
         fontSize: 24,
         marginRight: 16,
      },
      cursor: 'pointer',
   },

   socialLink: {
      color: theme.palette.secondary.lightText,
      '&:hover': {
         color: theme.palette.secondary.lightTextHover,
      },
   },

   link: {
      color: theme.palette.primary.contrastText,
      textDecoration: 'none',
   },
}))
