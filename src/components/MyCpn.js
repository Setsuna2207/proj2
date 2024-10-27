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

    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value //Thay thế value của biến name
        })
        console.log(event, event.target.value)
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }

    //JSX
    //this: ánh xạ vào class đang sử dụng
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm {this.state.age}
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <input
                        type="text"
                        onChange={(event) => this.handleOnChangeInput(event)}
                    />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default MyCpn;

//function cpn