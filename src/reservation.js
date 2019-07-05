import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
// import { Link } from "react-router-dom";
import { Form, Grid } from "semantic-ui-react";

class Reservation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pickUp: "",
      pickUpDate: "",
      pickUpTime: "",
      dropOff: "",
      dropOffDate: "",
      dropOffTime: ""
    };
  }

  handleChange = event => {
    this.setState(
      {
        [event.target.name]: event.target.value
      },
      console.log(this.state)
    );
    console.log(event.target);
  };

  handleSubmit = event => {
    event.pereventDefault();
  };

  render() {
    return (
      <div className="App">
        
        <Grid
          divided="vertically"
          style={{
            display: "flex",
            justifyContent: "stretch",
            alignItems: "center",
            padding: "80px"
          }}
        >
          <h1>CAR HIRE JAKARTA</h1>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Form onSubmit={this.handleSubmit}>
                {/* Pick Up Location */}
                <label htmlFor="pickUp" />
                <Form.Input
                  style={{ display: "flex", alignSelf: "stretch" }}
                  icon="search"
                  placeholder="Pick Up Location..."
                  type="text"
                  name="pickUp"
                  value={this.state.pickUp}
                  onChange={this.handleChange}
                />

                <Form.Group inline>
                  {/* Set Date for the Pick Up */}
                  <label htmlFor="pickUpDate"> </label>
                  <Form.Input
                    style={{
                      alignSelf: "column"
                    }}
                    icon="calendar"
                    placeholder="Pick Up Date.."
                    type="text"
                    name="pickUpDate"
                    value={this.state.pickUpDate}
                    onChange={this.handleChange}
                  />
                  {/* Set Time for the Pick Up */}
                  <label htmlFor="pickUpTime" />
                  <Form.Input
                    icon="clock"
                    placeholder="Pick Up Time.."
                    type="text"
                    name="pickUpTime"
                    value={this.state.pickUpTime}
                    onChange={this.handleChange}
                  />
                </Form.Group>
              </Form>
            </Grid.Column>
            <Grid.Column>
              <Form onSubmit={this.handleSubmit}>
                {/* Pick Up Location */}
                <label htmlFor="pickUp" />
                <Form.Input
                  icon="search"
                  placeholder="Pick Up Location..."
                  type="text"
                  name="pickUp"
                  value={this.state.pickUp}
                  onChange={this.handleChange}
                />

                <Form.Group inline>
                  {/* Set Date for the Pick Up */}
                  <label htmlFor="pickUpDate"> </label>
                  <Form.Input
                    style={{
                      alignSelf: "column"
                    }}
                    icon="calendar"
                    placeholder="Pick Up Date.."
                    type="text"
                    name="pickUpDate"
                    value={this.state.pickUpDate}
                    onChange={this.handleChange}
                  />
                  {/* Set Time for the Pick Up */}
                  <label htmlFor="pickUpTime" />
                  <Form.Input
                    icon="clock"
                    placeholder="Pick Up Time.."
                    type="text"
                    name="pickUpTime"
                    value={this.state.pickUpTime}
                    onChange={this.handleChange}
                  />
                </Form.Group>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Reservation;
