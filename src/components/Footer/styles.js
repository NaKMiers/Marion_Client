import { makeStyles } from '@mui/styles'

export default makeStyles(theme => ({
   footer: {},

   brandFooter: {
      height: 200,
      background: theme.palette.primary.light,
      '@media (max-width: 600px)': {
         height: 150,
      },
   },
   brandBox: {
      display: 'inline-block',
      width: '12.5%',
   },

   mainFooter: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px 48px',
      minHeight: 100,
      background: theme.palette.primary.dark,
      '@media (max-width: 600px)': {
         flexDirection: 'column',
      },
   },

   copyright: {
      width: '25%',
      '@media (max-width: 600px)': {
         width: 'auto',
      },
   },
   copyrightText: {
      width: '75%',
      color: theme.palette.secondary.contrastText,
      display: 'flex',
      alignItems: 'center',
      '&.MuiTypography-root': {
         fontSize: 14,
      },
      '@media (max-width: 600px)': {
         width: '100%',
      },
   },
   copyrightIcon: {
      '&.MuiSvgIcon-root': {
         fontSize: 20,
      },
      marginRight: 4,
   },

   middle: {
      width: '50%',
      padding: '0px 24px',
      textAlign: 'center',
      '@media (max-width: 600px)': {
         width: '100%',
         margin: '48px 0px',
      },
   },
   linkMiddle: {
      display: 'inline-block',
      textDecoration: 'none',
      padding: '0px 8px',
      borderLeft: `2px solid ${theme.border.light}`,
      color: theme.palette.secondary.contrastText,
      '&:first-child': {
         border: 'none',
      },
   },
   middleText: {
      '&.MuiTypography-root': {
         fontSize: 14,
      },
   },

   socials: {
      width: '25%',
      '@media (max-width: 600px)': {
         width: 'auto',
      },
   },
   socialLinkWrapper: {
      float: 'right',
      width: '75%',
      '@media (max-width: 600px)': {
         width: '100%',
      },
      marginBottom: -7,
   },
   socialLink: {
      float: 'right',
      padding: '0px 4px',
   },
   socialIcon: {
      '&.MuiSvgIcon-root': {
         color: theme.palette.secondary.contrastText,
      },
   },
}))
