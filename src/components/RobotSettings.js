import { useState, useCallback } from "react";

const RobotSettings = () => {
    const [inputText, setInputText] = useState({
        robotName: '',
        robotNumber: '2023-01-01',
        robotIP: '2099-12-30',
    });

    const onChange = useCallback(e => {
        const { name, value } = e.target;
        setInputText(prevForm => ({
            ...prevForm,
            [name]: value
        }));
    });
    return (
        <section id="RobotSettings">
            <ul>
                <li>robotName</li>
                <li>
                <input
                    id="robotName"
                    name="robotName"
                    placeholder='robotName'
                    value={inputText.robotName}
                    onChange={onChange}
                >
                </input>
                </li>
            </ul>
        </section>
    );
};

export default RobotSettings;