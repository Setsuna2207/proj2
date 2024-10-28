//class cpn

import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";

class MyCpn extends React.Component {

    state = {
        listUser: [
            { id: 1, name: "Tuýn", age: "20" },
            { id: 2, name: "Trung", age: "20" },
            { id: 3, name: "Huy", age: "20" }
        ]
    }

    //JSX
    //this: ánh xạ vào class đang sử dụng
    render() {
        //DRY: Don't repeat yourself
        return (
            <div>
                <UserInfo />
                <br /><br />
                <DisplayInfo
                    listUser={this.state.listUser}
                />
                <hr />
            </div>
        );
    }
}

export default MyCpn;

//function cpn