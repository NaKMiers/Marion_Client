import { makeStyles } from '@mui/styles'

export default makeStyles(theme => ({
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
      background: theme.palette.secondary.main,
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
      padding: '6px 24px 20px 24px',
   },
   filterByCtgList: {
      '&.MuiList-root': {
         padding: 0,
      },
   },
   filterByCtgItem: {
      margin: '8px 0px',
      color: theme.palette.secondary.darkerText,
      cursor: 'pointer',
      transition: 'all 0.2s ease-in-out',
      '&.MuiListItem-root': {
         padding: 0,
      },
      '&:hover': {
         color: theme.palette.info.main,
         // '& $filterByCtgCount': {
         //    color: theme.palette.primary.main,
         //    background: theme.palette.info.main,
         // },
         '& $colorBorder': {
            border: `2px solid ${theme.palette.info.main}`,
         },
      },
   },
   filterByCtgSubItem: {
      display: 'flex',
      alignItems: 'center',
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
      padding: '8px 24px 26px 24px',
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
      padding: '8px 24px 16px 24px',
   },

   filterByPrice: {
      padding: '8px 24px 10px 24px',
   },
   priceRange: {
      '&.MuiSlider-root': {
         color: theme.palette.info.main,
      },
   },
   showPrice: {
      '&.MuiTypography-root': {
         fontSize: 15,
         color: theme.palette.secondary.darkerText,
      },
   },

   filterByStatus: {
      padding: '8px 24px 16px 24px',
   },

   filterTotal: {
      padding: '20px 24px',
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
}))
