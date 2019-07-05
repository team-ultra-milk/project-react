import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { Menu, Dropdown } from "semantic-ui-react";
import "./App.css";

import Login from "./components/login";

const menuStyle = {
  padding: "0 120px"
};

export default class MenuExampleInverted extends Component {
  state = { activeItem: "RESERVATIONS" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <h1
          style={{
            background: "#1c1d1e",
            color: "#ffd238",
            paddingLeft: "10px",
            fontStyle: "italic",
            fontSize: "50px",
            margin: 0
          }}
        >
          Hertz
        </h1>
        <Menu
          inverted
          style={{
            height: "50px",
            display: "flex",
            justifyContent: "space-around"
          }}
        >
          <Dropdown item text="RESERVATIONS" style={menuStyle}>
            <Dropdown.Menu
              style={{
                background: "#ffd238"
              }}
            >
              <Dropdown.Item>Book a Car</Dropdown.Item>
              <Dropdown.Item>View/Modify/Cancel a Reservation</Dropdown.Item>
              <Dropdown.Item>Online Check-in</Dropdown.Item>
              <Dropdown.Item>Qualification and Requirements</Dropdown.Item>
              <Dropdown.Item>Vehicle Accident Report</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item
            style={menuStyle}
            name="CAR HIRE DEALS"
            active={activeItem === "CAR HIRE DEALS"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            style={menuStyle}
            name="LOCATIONS"
            active={activeItem === "LOCATIONS"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            style={menuStyle}
            name="PRODUCT AND SERVICES"
            active={activeItem === "PRODUCT AND SERVICES"}
            onClick={this.handleItemClick}
          />
          <Dropdown item text="HERTZ GOLD PLUS REWARDS" style={menuStyle}>
            <Dropdown.Menu
              style={{
                background: "#ffd238"
              }}
            >
              <Dropdown.Item>Join Now</Dropdown.Item>
              <Dropdown.Item>Membership Benefits</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu>
        <div>
          <Login />
        </div>
      </div>
    );
  }
}
