import styles from './Button.module.css'  
const Btn = ({children,onClick ,type }) => {
  return (
    <button onClick={onClick} className = {`${styles.button} ${styles[type]}`}>
      {children }
    </button>
  )
}

export default Btn
