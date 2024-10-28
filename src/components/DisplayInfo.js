import React from "react";

class DisplayInfo extends React.Component {
    render() {
        //destructuring array/object
        const { listUser } = this.props; //object
        // = const listUset = this.props.listUser
        console.log(listUser)
        //props -> properties: tài sản 
        //map là 1 function của JS
        return (
            <div>
                {listUser.map((user, index) => {
                    return (
                        <div key = {user.id}>
                            <div>My name is {user.name}</div>
                            <div>My age is {user.age}</div>
                            <hr />
                        </div>
                    )
                })}
            </div>

        )
    }
}

export default DisplayInfo