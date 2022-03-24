import { makeStyles } from '@mui/styles'

export default makeStyles(theme => ({
   // notify in header
   notifyHeader: {
      width: 350,
   },

   notifyThumbHeader: {
      '&.MuiCardMedia-root': {
         width: 'auto',
      },
      width: 60,
      height: 60,
      borderRadius: 4,
   },
   notifyContentHeader: {
      padding: '0px 16px',
      overflowX: 'scroll',
   },
   notifyTitleHeader: {
      '&.MuiTypography-root': {
         fontSize: 18,
      },
   },
   notifyDescHeader: {
      '&.MuiTypography-root': {
         fontSize: 14,
      },
   },

   // notify in page
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
         margin: '3px 0px -8px 0px !important',
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
