import React from 'react';
import './ReservationForm.css';

class ReservationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      gender: '',
      destination: '',
      date: '',
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    alert('Reservation form submitted successfully!');
    event.preventDefault();
  };

  render() {
    return (
      <div className="reservation-form">
        <h2 id="head">Reservation Form</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Age:
            <input
              type="number"
              name="age"
              value={this.state.age}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Gender:
            <select
              name="gender"
              value={this.state.gender}
              onChange={this.handleInputChange}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </label>
          <label>
            Destination:
            <input
              type="text"
              name="destination"
              value={this.state.destination}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Date:
            <input
              type="date"
              name="date"
              value={this.state.date}
              onChange={this.handleInputChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default ReservationForm;
