import { useState, useCallback, useEffect } from "react";
import axios from 'axios';
import './MovePointSettings.css'


const MovePointSettings = () => {
    const [inputText, setInputText] = useState({
        pointName: '',
        pointCoordinates: '',
        searchText: ''
    });
    const onChange = useCallback(e => {
        const { name, value } = e.target;
        setInputText(prevForm => ({
            ...prevForm,
            [name]: value
        }));
        // console.log(e.target.value);
    });

    async function createPointList() {
        try {
            if(inputText.pointName == '' || inputText.pointCoordinates == ''){
                alert("비어있는 값이 있습니다.");
                return
            }

            const coordinates = inputText.pointCoordinates.split(',');
            const coordinatesX = coordinates[0];
            const coordinatesY = coordinates[1];
            const coordinatesTheta = coordinates[2];

            const response = await axios.post(`http://localhost:8084/api/createPointList`, {
                pointName: inputText.pointName,
                coordinatesX,
                coordinatesY,
                coordinatesTheta,

            });

            if (response.status === 200) {
                console.log(response.data);
      
            }
        } catch (error) {
            if (error.response && error.response.status === 409) {
                alert(error.response.data);
            } else {
                console.error('Error with API call:', error);
            }
        }
    }

    return (

        <section id="MovePointSettings">
            <div className='category'>
                <ul>
                    <li>포인트명</li>
                    <li>좌표</li>
                    <li>
                        <input
                            type="text"
                            placeholder="123"
                        >
                        </input>
                    </li>
                </ul>
            </div>
            <div className="createRobotList">
                <ul>
                    <li>
                        <input
                            type="text"
                            id="pointName"
                            name="pointName"
                            placeholder='포인트 지점의 이름을 입력해주세요.'
                            value={inputText.pointName}
                            onChange={onChange}
                        >
                        </input>
                    </li>
                    <li>
                        <input
                            type="text"
                            id="pointCoordinates"
                            name="pointCoordinates"
                            placeholder='서빙봇 좌표를 붙여 넣어주세요.'
                            value={inputText.pointCoordinates}
                            onChange={onChange}
                        >
                        </input>
                    </li>
                    <li>
                        <button onClick={createPointList}>포인트 추가</button>
                    </li>
                </ul>
            </div>
            <div className="line" />
            <h2>Point List</h2>
            <div className="robotListTitle">
                <ul>
                    <li>포인트명</li>
                    <li>좌표</li>
                    <li>수정 / 삭제</li>

                </ul>
            </div>
                




        </section>
    );
};

export default MovePointSettings;