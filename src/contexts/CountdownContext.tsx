import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengeContext } from "./ChallengesContext";

interface CountDownContextData {
    minutes: number, 
    seconds: number, 
    hasFinished: boolean, 
    isActive: boolean, 
    startCountDown: () => void, 
    resetCountDown: () => void,
}

interface countdownProviderProps {
    children: ReactNode;
}

export const CountDownContext = createContext({} as CountDownContextData)

let contDownTimeOut: NodeJS.Timeout;

export function CountdownProvider({children} : countdownProviderProps) {

    const {startNewChallenge} = useContext(ChallengeContext);

    const [time, setTime] = useState(25* 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    function startCountDown() {
        setIsActive(true);
    }

    function resetCountDown() {
        clearTimeout(contDownTimeOut);
        setIsActive(false);
        setTime(0.1 * 60);
        setHasFinished(false);
    }

    useEffect (() => {
        if (isActive && time > 0) {
            contDownTimeOut = setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        } else if(isActive && time == 0) {
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();
        }
    }, [isActive, time])

    return (
        <CountDownContext.Provider value={{
            minutes, seconds, hasFinished, isActive, startCountDown, resetCountDown
        }}>
           {children}
        </CountDownContext.Provider>
    )
}