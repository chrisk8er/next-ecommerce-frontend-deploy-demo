import { useContext } from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/BuyButton.module.css'
import AuthContext from '../context/AuthContext'

export default function BuyButton () {

    const { user } = useContext(AuthContext)
    const router = useRouter()

    const redirectToLogin = () => {
        router.push('/login')
    }

    return (
        <>
            {!user &&
                <button 
                    className={styles.buy}
                    onClick={redirectToLogin}
                >
                    Login to Buy
                </button>
            }
        </>
    )
}