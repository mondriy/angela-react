import style from './Button.module.css';

export const Button = ({ onClick, children }) => {
    return <button onClick={onClick} className={style.button}>{children}</button>
}