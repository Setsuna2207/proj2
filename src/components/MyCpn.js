//class cpn

import React from "react";

class MyCpn extends React.Component {

    //state đồng bộ hóa biến JS và giao diện
    //thay đổi state -> thay đổi hiển thị
    state = {
        name: "Tuýn",
        age: "20",
        uni: "HAU"
    };

    //JSX
    //this: ánh xạ vào class đang sử dụng
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm {this.state.age}
            </div>
        );
    }
}

export default MyCpn;

//function cpn