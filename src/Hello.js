import React from "react";

export default class Hello extends React.Component {
  constructor() {
    super();
    this.state = {
      users: null
    };
  }
  componentDidMount() {
    fetch("https://reqres.in/api/users?page=2")
      .then((response) => response.json())
      .then((result) => {
        this.setState({ users: result.data });
      });
  }
  render() {
    return (
      <div>
        <h1> API Calling </h1>
        {this.state.users
          ? this.state.users.map((item, i) => (
              <div>
                {item.first_name} {item.last_name} -- {item.email}
              </div>
            ))
          : null}
      </div>
    );
  }
}
