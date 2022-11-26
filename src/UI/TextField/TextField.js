import style from './TextField.module.css';

export const TextField = ({ value, onChange }) => {
    return <input className={style.input} type={"text"} value={value} onChange={onChange} />
}