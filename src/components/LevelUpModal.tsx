import { ChallengeContext } from '../contexts/ChallengesContext'
import styles from '../styles/componentes/LevelUpModal.module.css'

import { useContext } from 'react';

export function LevelUpModal() {
    const { level, closeLevelUpModal } = useContext(ChallengeContext);

    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <header>{level}</header>

                <strong>Parabéns</strong>
                <p>Você alcançou um novo level.</p>

                <button type="button" onClick={closeLevelUpModal}>
                    <img src="/icons/close.svg" alt="Fechar modal"/>
                </button>
            </div>
        </div>
    )
}