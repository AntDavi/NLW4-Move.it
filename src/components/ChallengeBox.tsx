import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengesContext';
import styles from '../styles/componentes/ChallengeBox.module.css'

export function ChallengeBox() {
    const contextData = useContext(ChallengeContext);

    const hasActiveChallenge = true;

    return (
        <div className={styles.challengeBoxContainer}>
            { hasActiveChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe 400 xp</header>

                    <main>

                        <img src="icons/body.svg"/>
                        <strong>Novo desafio</strong>
                        <p>Levante e faça 10 polichinelos.</p>

                        <footer>
                            <button type="button" className={styles.challengeFailedButton}>
                                <p>Falhei</p>
                            </button>

                            <button type="button" className={styles.challengeSucceededButton}>
                                <p>Completei</p>
                            </button>
                        </footer>
                    </main>
                </div>
            ) : (
                <div className={styles.challengeNotActive}>
                    <strong>Finalize um ciclo para receber um desafio.</strong>

                    <p>
                        <img src="icons/level-up.svg" alt="Level Up"/>
                        Avance de level completando desafios.
                    </p>
                </div>
            )}
        </div>
    )
}