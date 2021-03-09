import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengesContext';
import { CountDownContext, CountdownProvider } from '../contexts/CountdownContext';
import styles from '../styles/componentes/ChallengeBox.module.css'

export function ChallengeBox() {
    const {activeChallenge, resetChallenge, completeChallenge} = useContext(ChallengeContext);
    const { resetCountDown } = useContext(CountDownContext)

    function handleChallengeSucceede() {
        completeChallenge();
        resetCountDown();
    }

    function handleChallengeFailed() {
        resetChallenge();
        resetCountDown();
    }

    return (
        <div className={styles.challengeBoxContainer}>
            { activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe {activeChallenge.amount} xp</header>

                    <main>

                        <img src={`icons/${activeChallenge.type}.svg`} alt=""/>
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>

                        <footer>
                            <button type="button"className={styles.challengeFailedButton}
                            onClick={handleChallengeFailed}>
                                <p>Falhei</p>
                            </button>

                            <button type="button" className={styles.challengeSucceededButton}
                            onClick={handleChallengeSucceede}>
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