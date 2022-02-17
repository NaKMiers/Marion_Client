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
   },

   logo: {
      '&.MuiTypography-root': {
         whiteSpace: 'nowrap',
         textAlign: 'center',
         fontWeight: 'bold',
         fontSize: 32,
         background: theme.palette.primary.gradient,
         WebkitBackgroundClip: 'text',
         WebkitTextFillColor: 'transparent',
      },
      marginRight: 16,
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
}))
