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

    handleClick(event) {
        console.log(">> Clicked");

        //merge state => react class
        this.setState({
            name: "Trung",
            age: Math.floor((Math.random() * 30) + 1)
        })
    }

    handleOnMouseOver(event) {
        console.log("x = ", event.pageX);
        console.log("y = ", event.pageY)
    }

    //JSX
    //this: ánh xạ vào class đang sử dụng
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm {this.state.age}
                <button onClick={(event) => { this.handleClick(event) }}>Click me</button>
                <button onMouseOver={(event) => { this.handleOnMouseOver(event) }}>Hover me</button>
            </div>
        );
    }
}

export default MyCpn;

//function cpn