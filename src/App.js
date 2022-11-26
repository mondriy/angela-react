import { useEffect, useState } from "react";
import JSConfetti from 'js-confetti'
import { TextField } from "./UI/TextField/TextField";
import { Title } from "./UI/Titles/Title";
import { List } from "./List/List";
import { Button } from "./UI/Button/Button";
import { Paragraph } from "./UI/Paragraph/Paragraph";
import { Alert } from "./UI/Alert/Alert";
import { Audio } from "./UI/Audio/Audio";
import { initialState } from './steps';
import './App.css';

function App() {
    const [steps, setSteps] = useState(initialState);
    const [isMenu, setIsMenu] = useState(true);
    const [currentStep, setCurrentStep] = useState(null);
    const [answer, setAnswer] = useState('');
    const [isFinish, setIsFinish] = useState(false);
    const [show, setShow] = useState(false);

    useEffect(() => {
        const jsConfetti = new JSConfetti();
        if (isMenu) {
            jsConfetti.addConfetti({
                emojis: ['✨', '💫', '🦄', '🦷', '🍒'],
                emojiSize: '150',
                confettiNumber: 40,
            })
        }
        return () => jsConfetti.clearCanvas();
    }, [isMenu])

    useEffect(() => {
        const savedStorage = localStorage.getItem('steps');
        if (savedStorage) setSteps(JSON.parse(savedStorage));
    }, []);

    const onStepClick = (step) => {
        if (!step.isActive) return null;

        setIsMenu(false);
        setCurrentStep(step);
    }

    const onSubmit = () => {
        if (answer.replace(/\s+/g, '').toLowerCase() === currentStep.title.toLowerCase()) {
            setIsMenu(true);
            setAnswer('');

            const newSteps = steps.map((step, index) => {
                if (step === currentStep) {
                    if (index !== steps.length - 1) {
                        steps[index + 1].isActive = true;
                        setIsFinish(false);
                    } else {
                        setIsFinish(true);
                    }
                }
                return step;
            });

            setSteps(newSteps)
            localStorage.setItem('steps', JSON.stringify(newSteps));
        } else {
            setShow(true);
        }
    }

    return (
        <div className="container">
            {isFinish ?
                <div className="content">
                    <Paragraph>
                        Покатались и хватит.
                        Поблагодари своих помошнников и возвращайся домой.
                        Там будет ждать тебя маленький сюрприз.
                    </Paragraph>
                </div> :
                isMenu ?
                    <div>
                        <Title styles={{marginBottom: '10px', fontWeight: '500'}}>💕 Солнышко 💕</Title>
                        <Title styles={{color: 'rgba(241,51,51,0.79)'}}>С Днём Рождения!</Title>
                        <Paragraph>Это чек-лист на твой День Рождения!
                            Отметь все пункты и тогда, может быть, ты что-нибудь получишь.</Paragraph>
                        <List onClick={onStepClick} steps={steps}/>
                    </div> :
                    <div className="content">
                        {currentStep.video &&
                            <video controls autoPlay>
                                <source src={currentStep.video} type="video/mp4" />
                            </video>}
                        {currentStep.audio &&
                            <Audio src={currentStep.audio} />}
                        {currentStep.image &&
                            <img alt="ребус" src={currentStep.image} />}
                        {currentStep.text && <Paragraph>{currentStep.text}</Paragraph>}
                        <div className="dialog">
                            <TextField value={answer} onChange={(e) => setAnswer(e.target.value)} />
                            <Button onClick={onSubmit}>Я уверена!</Button>
                        </div>
                    </div>
            }
            <Alert show={show} onClick={() => setShow(false)}/>
        </div>
    );
}

export default App;
