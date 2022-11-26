import { useRef, useState } from "react";
import { BsPlayFill, BsPauseFill } from "react-icons/bs";
import style from './Audio.module.css';

export const Audio = ({ src }) => {
    const [isPlay, setIsPlay] = useState(false);
    const audio = useRef(null);

    const onPlay = () => {
        if (audio.current.paused) {
            setIsPlay(true);
            audio.current.play();
        } else {
            setIsPlay(false);
            audio.current.pause();
        }
    }

    return <>
        <div style={{ backgroundColor: isPlay ? '#6e23e8' : '#2f9a41' }} onClick={onPlay} className={style.audio}>
            {!isPlay ? <BsPlayFill color={'#fff'} size={120}/> : <BsPauseFill color={'#fff'} size={120}/>}
        </div>
        <audio ref={audio} src={src}></audio>
    </>
}