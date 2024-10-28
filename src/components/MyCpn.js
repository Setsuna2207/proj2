//class cpn

import React from "react";
import UserInfo from "./UserInfo";

class MyCpn extends React.Component {

    //JSX
    //this: ánh xạ vào class đang sử dụng
    render() {
        return (
            <div>
                <UserInfo />
            </div>
        );
    }
}

export default MyCpn;

//function cpn