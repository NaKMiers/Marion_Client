import { makeStyles } from '@mui/styles'

export default makeStyles(theme => ({
   homePage: {
      margin: 'auto',
      maxWidth: 1500,
   },

   // SLIDER

   // SIDEBAR

   // PRODUCTIONS
   main: {
      padding: '0px 16px',
      marginTop: 24,
      maxWidth: 1500,
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
   sortMenu: {
      '& .MuiPaper-root': {
         // boxShadow: 'none',
      },
   },
   sortItem: {
      '&.MuiMenuItem-root': {
         fontSize: 14,
         color: theme.palette.secondary.darkerText,
      },
   },

   productions: {
      position: 'relative',
      height: '400vh',
      fontSize: 16,
   },

   productContainer: {
      position: 'absolute',
      padding: 16,
   },
   product: {},

   productThumb: {
      position: 'relative',
   },
   productImg: {
      width: '100%',
      transition: 'all 0.3s ease-in-out',
   },

   // wooden chairs
   woodenChairsContainer: {
      top: 0,
      left: 0,
      width: '35%',
      height: 'calc(24.6vw + 150px)',
      '@media (max-width: 900px)': {
         top: 0,
         left: 0,
         width: '70%',
         height: 'calc(48.5vw + 150px)',
      },
      '@media (min-width: 1501px)': {
         top: 0,
         height: 'calc(23em + 150px)',
      },
   },
   thumbWoodenChairs: {
      '&:hover': {
         '& $woodenChairImg': {
            background: 'url(https://bom.so/zpcTuC)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
         },
      },
   },
   woodenChairImg: {
      background: 'url(https://bom.so/U0UUEO)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      paddingTop: '70%',
   },

   // floor lamp
   floorLampContainer: {
      top: 0,
      left: '35%',
      width: '15%',
      height: 'calc(23vw + 150px)',
      '@media (max-width: 900px)': {
         top: 0,
         left: '70%',
         width: '30%',
         height: 'calc(48.4vw + 150px)',
      },
      '@media (min-width: 1501px)': {
         top: 0,
         height: 'calc(21.8em + 150px)',
      },
   },
   thumbFloorLamp: {
      '&:hover': {
         '& $floorLampImg': {
            background: 'url(https://bom.so/VIrV7e)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
         },
      },
   },
   floorLampImg: {
      background: 'url(https://bom.so/DpYAsS)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      paddingTop: '170%',
      '@media (max-width: 900px)': {
         paddingTop: '177.8%',
      },
   },

   // hanging lamp
   hangingLampContainer: {
      top: 0,
      left: '50%',
      width: '15%',
      height: 'calc(16.9vw + 150px)',
      '@media (max-width: 900px)': {
         top: 'calc(48.5vw + 150px)',
         left: 0,
         width: '30%',
         height: 'calc(33.8vw + 150px)',
      },
      '@media (min-width: 1501px)': {
         top: 0,
         height: 'calc(16em + 150px)',
      },
   },
   thumbHangingLamp: {
      '&:hover': {
         '& $hangingLampImg': {
            background: 'url(https://bom.so/0nLpze)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
         },
      },
   },
   hangingLampImg: {
      background: 'url(https://bom.so/jHpz4g)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      paddingTop: '120%',
   },

   // classy bag
   classyBagContainer: {
      top: 0,
      left: '65%',
      width: '35%',
      height: 'calc(21.5vw + 150px)',
      '@media (max-width: 900px)': {
         top: 'calc(48.5vw + 150px)',
         left: '30%',
         width: '70%',
         height: 'calc(42.1vw + 150px)',
      },
      '@media (min-width: 1501px)': {
         top: 0,
         height: 'calc(20em + 150px)',
      },
   },
   thumbClassyBag: {
      '&:hover': {
         '& $classyBagImg': {
            background: 'url(https://bom.so/8wWmuS)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
         },
      },
   },
   classyBagImg: {
      background: 'url(https://bom.so/6XLSkH)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      paddingTop: '60%',
   },

   // luxury chairs
   luxuryContainer: {
      top: 'calc(24.7vw + 150px)',
      width: '35%',
      height: 'calc(24.7vw + 150px)',
      '@media (max-width: 900px)': {
         top: 'calc(90.5vw + 300px)',
         left: '30%',
         width: '70%',
         height: 'calc(48.2vw  + 150px)',
      },
      '@media (min-width: 1501px)': {
         top: 'calc(23.1em + 150px)',
         height: 'calc(23em + 150px)',
      },
   },
   thumbLuxuryChairs: {
      '&:hover': {
         '& $luxuryChairsImg': {
            background: 'url(https://bom.so/a9m4HP)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
         },
      },
   },
   luxuryChairsImg: {
      background: 'url(https://bom.so/VzfeS5)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      paddingTop: '70%',
   },

   // new fashion bags
   newFashionBagContainer: {
      top: 'calc(23vw + 150px)',
      left: '35%',
      width: '15%',
      height: 'calc(21.8vw + 150px)',
      '@media (max-width: 900px)': {
         top: 'calc(82.3vw + 300px)',
         left: 0,
         width: '30%',
         height: 'calc(43.8vw  + 150px)',
      },
      '@media (min-width: 1501px)': {
         top: 'calc(21.8em + 150px)',
         height: 'calc(20.7em + 150px)',
      },
   },
   thumbNewFashionBagChairs: {
      '&:hover': {
         '& $newFashionBagChairsImg': {
            background: 'url(https://bom.so/NGx30C)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
         },
      },
   },
   newFashionBagChairsImg: {
      background: 'url(https://bom.so/MpZ8BK)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      paddingTop: '160%',
   },

   // furniture
   furnitureContainer: {
      top: 'calc(16.9vw + 150px)',
      left: '50%',
      width: '15%',
      height: 'calc(16.9vw + 150px)',
      '@media (max-width: 900px)': {
         top: 'calc(126.1vw + 450px)',
         left: 0,
         width: '30%',
         height: 'calc(33.8vw + 150px)',
      },
      '@media (min-width: 1501px)': {
         top: 'calc(16em + 150px)',
         height: 'calc(16em + 150px)',
      },
   },
   thumbFurnitureChairs: {
      '&:hover': {
         '& $furnitureChairsImg': {
            background: 'url(https://bom.so/mlzFs8)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
         },
      },
   },
   furnitureChairsImg: {
      background: 'url(https://bom.so/1gZqpW)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      paddingTop: '120%',
   },

   // stylish watch
   stylishWatchContainer: {
      top: 'calc(21.5vw + 150px)',
      left: '65%',
      width: '17.5%',
      height: 'calc(16.8vw + 150px)',
      '@media (max-width: 900px)': {
         top: 'calc(138.8vw + 450px)',
         left: '30%',
         width: '35%',
         height: 'calc(33.6vw + 150px)',
      },
      '@media (min-width: 1501px)': {
         top: 'calc(20em + 150px)',
         height: 'calc(15.9em + 150px)',
      },
   },
   thumbStylishWatchChairs: {
      '&:hover': {
         '& $stylishWatchChairsImg': {
            background: 'url(https://bom.so/WRopjS)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
         },
      },
   },
   stylishWatchChairsImg: {
      background: 'url(https://bom.so/SgkcOm)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      paddingTop: '100%',
   },

   // antique Vase
   antiqueVaseContainer: {
      top: 'calc(21.5vw + 150px)',
      left: '82.5%',
      width: '17.5%',
      height: 'calc(20.6vw + 150px)',
      '@media (max-width: 900px)': {
         top: 'calc(138.8vw + 450px)',
         left: '65%',
         width: '35%',
         height: 'calc(41vw + 150px)',
      },
      '@media (min-width: 1501px)': {
         top: 'calc(20em + 150px)',
         height: 'calc(19.4em + 150px)',
      },
   },
   thumbAntiqueVaseChairs: {
      '&:hover': {
         '& $antiqueVaseChairsImg': {
            background: 'url(https://bom.so/bEj8Bf)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
         },
      },
   },
   antiqueVaseChairsImg: {
      background: 'url(https://bom.so/CF4dju)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      paddingTop: '125%',
   },

   // chairs mat
   chairsMatContainer: {
      top: 'calc(33.8vw + 300px)',
      left: '50%',
      width: '15%',
      height: 'calc(17.5vw + 150px)',
      '@media (max-width: 900px)': {
         top: 'calc(159.9vw + 600px)',
         left: 0,
         width: '30%',
         height: 'calc(35vw + 150px)',
      },
      '@media (min-width: 1501px)': {
         top: 'calc(41.4em + 150px)',
         height: 'calc(16.6em + 150px)',
      },
   },
   thumbChairsMatChairs: {
      '&:hover': {
         '& $chairsMatChairsImg': {
            background: 'url(https://bom.so/pL7NWV)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
         },
      },
   },
   chairsMatChairsImg: {
      background: 'url(https://bom.so/TzwSPT)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      paddingTop: '125%',
   },

   // exquisite vase
   exquisiteVaseContainer: {
      top: 'calc(44.8vw + 300px)',
      left: '35%',
      width: '15%',
      height: 'calc(22.4vw + 150px)',
      '@media (max-width: 900px)': {
         top: 'calc(194.6vw + 750px)',
         left: 0,
         width: '30%',
         height: 'calc(44.9vw + 150px)',
      },
      '@media (min-width: 1501px)': {
         top: 'calc(51.8em + 150px)',
         height: 'calc(21.3em + 150px)',
      },
   },
   thumbExquisiteVaseChairs: {
      '&:hover': {
         '& $exquisiteVaseChairsImg': {
            background: 'url(https://bom.so/uOz88O)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
         },
      },
   },
   exquisiteVaseChairsImg: {
      background: 'url(https://bom.so/3tH7RR)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      paddingTop: '165%',
   },

   // lamps shade
   lampShadeContainer: {
      top: 'calc(38.3vw + 300px)',
      left: '65%',
      width: '17.5%',
      height: 'calc(25vw + 150px)',
      '@media (max-width: 900px)': {
         top: 'calc(172.4vw + 600px)',
         left: '30%',
         width: '35%',
         height: 'calc(49.6vw + 150px)',
      },
      '@media (min-width: 1501px)': {
         top: 'calc(45.3em + 150px)',
         height: 'calc(23.6em + 150px)',
      },
   },
   thumbLampShadeChairs: {
      '&:hover': {
         '& $lampShadeChairsImg': {
            background: 'url(https://bom.so/NxtTfG)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
         },
      },
   },
   lampShadeChairsImg: {
      background: 'url(https://bom.so/3dCkMP)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      paddingTop: '155%',
   },

   // accessories
   accessoriesContainer: {
      top: 'calc(42vw + 300px)',
      left: '82.5%',
      width: '17.5%',
      height: 'calc(21.3vw + 150px)',
      '@media (max-width: 900px)': {
         top: 'calc(179.8vw + 600px)',
         left: '65%',
         width: '35%',
         height: 'calc(42.2vw + 150px)',
      },
      '@media (min-width: 1501px)': {
         top: 'calc(48.8em + 150px)',
         height: 'calc(20.1em + 150px)',
      },
   },
   thumbAccessoriesChairs: {
      '&:hover': {
         '& $accessoriesChairsImg': {
            background: 'url(https://bom.so/6lhurN)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
         },
      },
   },
   accessoriesChairsImg: {
      background: 'url(https://bom.so/zZscZp)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      paddingTop: '130%',
   },

   productCaption: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      border: `1px solid ${theme.border.light}`,
      padding: 16,
   },
   productCategorie: {
      margin: '0px !important',
      fontSize: 9,
      fontFamily: 'Montserrat, sans-serif !important',
      fontWeight: 'bold',
      color: theme.palette.secondary.darkerText,
      textAlign: 'center',
      letterSpacing: 2,
      whiteSpace: 'nowrap',
   },
   productName: {
      margin: '5px 0px 0px 0px !important',
      fontWeight: 'bold',
      textAlign: 'center',
      color: theme.palette.secondary.darkerText,
      fontSize: 16,
      whiteSpace: 'nowrap',
      width: '100%',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
   },
   productPrice: {
      margin: '2px 0px 0px 0px !important',
      textAlign: 'center',
      color: theme.palette.info.main,
      whiteSpace: 'nowrap',
      width: '100%',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
   },
   productPrevPrice: {
      margin: '0px !important',
      textDecoration: 'line-through',
      fontSize: 13,
      opacity: 0.6,
   },
   productCurPrive: {
      margin: '0px 0px 0px 6px !important',
      fontWeight: 'bold',
      fontSize: 18,
   },
   addToCartBtn: {
      '&.MuiButton-root': {
         background: theme.palette.secondary.main,
         color: theme.palette.primary.contrastText,
         padding: '4px 16px',
         marginTop: 14,
         fontWeight: 'bold',
         fontSize: 13,
         fontFamily: 'Montserrat, sans-serif !important',
         textTransform: 'none',
         borderRadius: 24,
         whiteSpace: 'nowrap',
      },
      '& .MuiSvgIcon-root': {
         fontSize: 20,
      },
   },
}))
