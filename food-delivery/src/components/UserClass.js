import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props)
        console.log(this.props);
        // this.state = {
        //     count: 0,
        //     countNew: 1
        // }
        // console.log(this.props.name + 'ctor called');
        this.state = {
            userInfo: {
                name: 'dummy',
                location: 'Default'
            }
        }
    }
    async componentDidMount() {
        // console.log(this.props.name + 'parent did mount called');
        const data = await fetch('https://api.github.com/users/aavesh123');
        const json = data.json();

        this.setState({
            userInfo: json
        })
    }

    // https://api.github.com/users/aavesh123
    render() {
        // console.log(this.props.name + 'render called');
        // const { name, location } = this.props;
        // const { count, countNew } = this.state;

        const { name, location } = this.state.userInfo;
        return (
            <div className="user-card">
                {/* <h1>Count: {count}</h1>
                <h1>Count: {countNew}</h1> */}
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: abd</h4>
            </div>
        );
    }
}

export default UserClass;