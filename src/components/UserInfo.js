import React from "react";

class UserInfo extends React.Component {

    //state đồng bộ hóa biến JS và giao diện
    //thay đổi state -> thay đổi hiển thị
    state = {
        name: "Tuýn",
        age: "20",
        uni: "HAU"

    };

    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value //Thay thế value của biến name
        })
        console.log(event, event.target.value)
    }

    handleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value //Thay thế value của biến name
        })
        console.log(event, event.target.value)
    }


    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }

    render() {
        return (
            <div>
                My name is {this.state.name} and I'm {this.state.age}
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <label>Your name: </label>
                    <input
                        value={this.state.name}
                        type="text"
                        onChange={(event) => this.handleOnChangeInput(event)}
                    />

                    <label>Your age: </label>
                    <input
                        value={this.state.age}
                        type="text"
                        onChange={(event) => this.handleOnChangeAge(event)}
                    />

                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
export default UserInfo;