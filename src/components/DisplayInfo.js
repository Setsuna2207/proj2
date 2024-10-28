import React from "react";

class DisplayInfo extends React.Component {

    state = {
        isShow: true
    }

    handleShowHide = () => {
        this.setState({
            isShow: !this.state.isShow //trạng thái ngược lại của biến isShow
        })
    }
    render() {
        //destructuring array/object
        const { listUser } = this.props; //object
        // = const listUset = this.props.listUser
        console.table(listUser)
        //props -> properties: tài sản 
        //map là 1 function của JS
        return (
            <div>
                <div>
                    <span onClick={() => { this.handleShowHide() }}>
                        {this.state.isShow === true ? "Hide users" : "Show users"}
                    </span>
                </div>
                {this.state.isShow &&
                    <div>
                        {listUser.map((user, index) => {
                            return (
                                <div key={user.id} className={+user.age > 30 ? "red" : "blue"}>
                                    <div>My name is {user.name}</div>
                                    <div>My age is {user.age}</div>
                                    <hr />
                                </div>
                            )
                        })}
                    </div>
                }
            </div>
        )
    }
}

export default DisplayInfo