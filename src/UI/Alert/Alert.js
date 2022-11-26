import {useEffect, useState} from "react";
import { Paragraph } from "../Paragraph/Paragraph";
import { Button } from "../Button/Button";
import style from './Alert.module.css';

const problems = [
    'Подумай немного головой, зай',
    'Уверна? хахахаха',
    'Тут так-то все замерзли, может поскорее подумаешь?',
    'Раз-два-три мозг включись!!!',
    'Неправильно(',
    'Почти угадала (нет)'
]

const answer = [
    'Иди ты', 'Ешки-матрешки', 'Зато у меня iPhone', 'Не поняла???'
]

export const Alert = ({ show, onClick }) => {
    const [isShow, setIsShow] = useState(false);

    useEffect(() => {
        if (show) {
            setIsShow(true);
            onClick();
        }
    }, [show])

    if (!isShow) return null;

    return <div className={style.background}>
        <div className={style.alert}>
            <Paragraph>
                {problems[Math.floor(Math.random() * problems.length)]}
            </Paragraph>
            <Button onClick={() => setIsShow(false)}>{answer[Math.floor(Math.random() * answer.length)]}</Button>
        </div>
    </div>
}