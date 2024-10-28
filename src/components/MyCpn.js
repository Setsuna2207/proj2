//class cpn

import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";

class MyCpn extends React.Component {

    //JSX
    //this: ánh xạ vào class đang sử dụng
    render() {
        const myInfo = ['ab', 'c', 'd'];
        // key: value
        return (
            <div>
                <UserInfo />
                <br /><br />
                <DisplayInfo name="Tuýn" age="20" />
                <hr />
                <DisplayInfo name={"Trung"} age={21} myInfo ={myInfo}/>
            </div>
        );
    }
}

export default MyCpn;

//function cpn