import { useContext } from 'react';
import styles from '../styles/componentes/Countdown.module.css'
import { CountDownContext } from '../contexts/CountdownContext'

let contDownTimeOut: NodeJS.Timeout;

export function Countdown() {

    const { minutes, seconds, hasFinished, isActive, startCountDown, resetCountDown} = useContext(CountDownContext)

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');


    return (
        <div>
            <div className={styles.countDownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            { hasFinished ? (
                <button 
                    disabled
                    className={styles.countDownButton}
                >
                    <p>
                        Ciclo encerrado
                        <img src="icons/check-circle.svg" alt="Verificado"/>
                    </p>
                </button>
            ) : (
                    <>
                        { isActive ? (
                            <button 
                                type="button" 
                                className={`${styles.countDownButton} ${styles.countDownButtonActive}`}
                                onClick={resetCountDown}
                            >
                                Abandonar um ciclo
                            </button>
                        ) : (
                            <button 
                                type="button" 
                                className={styles.countDownButton}
                                onClick={startCountDown}
                            >
                                Iniciar um ciclo
                            </button>

                        )}
                    </>
            )}

        </div>
    );
}