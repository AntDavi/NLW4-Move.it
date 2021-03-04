import { createContext, useState, ReactNode } from 'react';

export const ChallengeContext = createContext ({});

interface ChallengeContextData {
    level: number;
    currentExperience
}

interface ChallengeProviderProps {
    children: ReactNode;
}

export function ChallengeProvider({children}: ChallengeProviderProps) {
    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesCompleted, setChallengesCompleted] = useState(0);

    function levelUp() {
      setLevel(level + 1);
    }

    function startNewChallenge() {
        console.log('Novo desafio')
    }

    return (
        <ChallengeContext.Provider 
        value={{
            level, currentExperience, challengesCompleted, levelUp, startNewChallenge
        }}>
            {children}
        </ChallengeContext.Provider>
    );
}