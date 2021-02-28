import { useState, useEffect } from 'react';
import styles from '../styles/componentes/Countdown.module.css'

let contDownTimeOut: NodeJS.Timeout;

export function Countdown() {

    const [time, setTime] = useState(0.1 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    function startCountDown() {
        setIsActive(true);
    }

    function resetCountDown() {
        clearTimeout(contDownTimeOut);
        setIsActive(false);
        setTime(25 * 60);
    }

    useEffect (() => {
        if (isActive && time > 0) {
            contDownTimeOut = setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        } else if(isActive && time == 0) {
            setHasFinished(true);
            setIsActive(false);
        }
    }, [isActive, time])

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