import { useState, useEffect } from 'react';

type useTimerProps = {
    time: number; // Начальное время в секундах
};

export const useTimer = ({ time }: useTimerProps) => {
    const [remainingTime, setRemainingTime] = useState(time);

    // Отсчет времени
    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
        }, 1000);

        return () => clearInterval(interval); // Очистка интервала при размонтировании компонента
    }, []);

    // Форматирование времени в формат HH:MM:SS
    const formatTime = (seconds: number) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${hours.toString().padStart(2, '0')}h ${minutes.toString().padStart(2, '0')}m ${secs
            .toString()
            .padStart(2, '0')}s`;
    };

    return {
        remainingTime,
        formatTime,
    };
};
