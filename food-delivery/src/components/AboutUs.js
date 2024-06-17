import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class AboutUs extends Component {
    constructor(props) {
        super(props);
        console.log('parent ctor called');
    }

    componentDidMount() {
        console.log('parent did mount called');

    }

    render() {
        console.log('parent render called');
        return (
            <div>
                <h1>About</h1>
                <User name={'Avesh'} location={'Mumbai'} />
                <UserClass name={'child1'} location={'Mumbai'} />
                {/* <UserClass name={'child2'} location={'Mumbai'} /> */}
            </div>
        )
    }
}

// const AboutUs = () => {
//     return (
//         <div>
//             <h1>About</h1>
//             <User name={'Avesh'} location={'Mumbai'} />
//             <UserClass name={'Avesh'} location={'Mumbai'} />
//         </div>
//     )
// }

export default AboutUs;