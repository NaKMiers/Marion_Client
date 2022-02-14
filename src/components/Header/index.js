import styles from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faCartShopping } from '@fortawesome/free-solid-svg-icons'

function Header() {
   return (
      <div className={styles.header}>
         <div className={styles.logo}>
            <h2>Marion</h2>
         </div>
         <div className={styles.search}>
            <input className={styles.searchInput} type='text' placeholder='Search...' />
         </div>
         <div className={styles.right}>
            <div className={styles.avatar}>
               <img className={styles.avtImage} alt='avatar' src='https://bom.so/4CyhEd' />
               <span className={styles.username}>nakmiers</span>
            </div>
            <div>
               <FontAwesomeIcon icon={faBell} className={styles.icon} />
               <FontAwesomeIcon icon={faCartShopping} className={styles.icon} />
            </div>
         </div>
      </div>
   )
}

export default Header
