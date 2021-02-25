import styles from '../styles/componentes/Profile.module.css'

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/AntDavi.png" alt="Anthony Davi" />
            <div>
                <strong>Anthony Davi</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1
                </p>
            </div>
        </div>
    );
}