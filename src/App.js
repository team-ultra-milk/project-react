import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import {
  Menu,
  Dropdown,
  Card,
  Container,
  Divider,
  Button,
  Grid
} from "semantic-ui-react";
import "./App.css";
import Reservation from "./reservation";
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
      <BrowserRouter>
        <div style={{ margin: "20px" }}>
          <div
            style={{
              background: "#1c1d1e"
            }}
          >
            <Grid>
              <Grid.Column floated="left" width={5}>
                <h1
                  style={{
                    paddingLeft: "20px",
                    fontStyle: "italic",
                    fontSize: "50px",
                    margin: 0
                  }}>
                 <Link to="/" style={{
                   textDecoration: "none",
                   color: "#ffd238"
                 }}>Frequenz</Link> 
                </h1>
              </Grid.Column>
              <Grid.Column floated="right" width={5}>
                <Button
                  style={{
                    float: "right",
                    marginTop: "20px",
                    marginRight: "10px",
                    fontSize: "20px"
                  }}
                >
                  {" "}
                  <Link to="/login"> Log In</Link>{" "}
                </Button>
              </Grid.Column>
            </Grid>
          </div>
          <Menu
            inverted
            style={{
              height: "60px"
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
          <Switch>
            <Route exact path="/" component={Reservation} />
            <Route path="/login" component={Login} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
