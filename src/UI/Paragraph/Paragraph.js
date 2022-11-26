import style from './Paragraph.module.css';

export const Paragraph = ({ children }) => {
    return <p className={style.p}>{children}</p>
}