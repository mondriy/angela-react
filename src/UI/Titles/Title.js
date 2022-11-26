import style from './Title.module.css';

export const Title = ({ variant = 'h1', children, styles }) => {
    const Tag = variant;

    return <Tag style={styles} className={style.title}>{children}</Tag>
}