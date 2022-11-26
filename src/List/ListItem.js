import { Title } from '../UI/Titles/Title';
import { SiAdblock } from 'react-icons/si';
import { BsFillPatchCheckFill } from 'react-icons/bs';

import style from './List.module.css';

export const ListItem = ({ isCurrent, isActive, currentStep, onClick }) => {
    return (
        <div onClick={() => onClick(currentStep)} className={`${style.item} ${isActive ? isCurrent ? style.current : style.active : style.blocked}`}>
            {isActive ?
                isCurrent ?
                    <BsFillPatchCheckFill style={{ margin: '0 15px'}} size={40} color={'#f6be31'}/> :
                    <BsFillPatchCheckFill style={{ margin: '0 15px'}} size={40} color={'#64d214'}/> :
                <SiAdblock style={{ margin: '0 15px'}} size={40} color={'#f63131'}/>}
            <Title variant='h3'>{isActive ? isCurrent ? 'Поехали' : 'Забыли' : 'Реши прошлые загадки..'}</Title>
        </div>
    )
}