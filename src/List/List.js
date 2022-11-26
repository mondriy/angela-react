import { ListItem } from "./ListItem";
import style from './List.module.css';

export const List = ({ steps, onClick }) => {
    return (
        <div className={style.container}>
            {steps.map((step, index) =>
                <ListItem
                    isCurrent={step.isActive && index !== steps.length - 1 && !steps[index + 1].isActive}
                    onClick={onClick}
                    currentStep={step}
                    key={step.title}
                    title={step.title}
                    isActive={step.isActive}/>)
            }
        </div>
    )
}