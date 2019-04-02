import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'
import './App.css';

class App extends Component {
  // Initialize state
  state = {
      passwords: [],
      activeItem: "subscribe",
  }
  handleItemClick = (e, {name}) => this.setState({activeItem: name});

  // Fetch passwords after first mount
  componentDidMount() {
    // this.getPasswords();
  }


  // getPasswords = () => {
  //   // Get the passwords and store them in state
  //   fetch('/api/passwords')
  //     .then(res => res.json())
  //     .then(passwords => this.setState({ passwords }));
  // }
  render() {
    const { passwords, activeItem } = this.state;
    const menu = <div>
                  <Menu tabular>
                    <Menu.Item name='subscribe' active={activeItem === 'subscribe'} onClick={this.handleItemClick} />
                    <Menu.Item name='users' active={activeItem === 'users'} onClick={this.handleItemClick} />
                  </Menu>
                </div>;

    let content;
    switch (activeItem) {
      case "subscribe":
        content =
          <div>
            hello world 1
          </div>;
        break;
      case "users":
        content =
          <div>
            hello world 2
          </div>
        break;
      default:
        content =
          <div>
          </div>
    };

    return (
      <div>
        {menu}
        {content}
      </div>
    );
  }
}

export default App;