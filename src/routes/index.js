import { Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import NotFoundPage from '../pages/NotFoundPage'
import WishlistPage from '../pages/WishlistPage'
import NotificationPage from '../pages/NotificationPage'
import CartPage from '../pages/CartPage'
import ProductPage from '../pages/ProductPage'
import PurchaseOrderPage from '../pages/PurchaseOrders'

const routes = [
   {
      path: '/',
      exact: true,
      component: () => <HomePage />,
   },
   {
      path: '/notifications',
      exact: true,
      component: () => <NotificationPage />,
   },
   {
      path: '/carts',
      exact: true,
      component: () => <CartPage />,
   },
   {
      path: '/wishlist',
      exact: true,
      component: () => <WishlistPage />,
   },
   {
      path: '/product',
      exact: false,
      component: () => <ProductPage />,
   },
   {
      path: '/purchase-orders',
      exact: false,
      component: () => <PurchaseOrderPage />,
   },
   {
      path: '/',
      exact: false,
      component: () => <NotFoundPage />,
   },
]

const renderRoutes = () =>
   routes.map(r => <Route key={r.path} path={r.path} exact={r.exact} component={r.component} />)

export default renderRoutes()
