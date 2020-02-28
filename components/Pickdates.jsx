import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import styeld from "styled-components";

import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

import {
  DateRangePicker,
  SingleDatePicker,
  DayPickerRangeController
} from "react-dates";
import styled from "styled-components";

class Dates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null
    };
  }

  render() {
    return (
      <Piker>
        {/* <Start>
          <SingleDatePicker
            date={this.state.date} // momentPropTypes.momentObj or null
            onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
            focused={this.state.focused} // PropTypes.bool
            onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
            id="your_unique_id" // PropTypes.string.isRequired,
            placeholder="dd/mm/yyyy"
            daySize={29}
            regular={true}
          />
        </Start>

        <div>
          <SingleDatePicker
            date={this.state.endDate} // momentPropTypes.momentObj or null
            onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
            focused={this.state.focusedInput} // PropTypes.bool
            onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
            id="your_unique_id2" // PropTypes.string.isRequired,
          />
        </div> */}
        <div>
          <DateRangePicker
            startDate={this.state.startDate} // momentPropTypes.momentObj or null,
            startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
            endDate={this.state.endDate} // momentPropTypes.momentObj or null,
            endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
            onDatesChange={({ startDate, endDate }) =>
              this.setState({ startDate, endDate })
            } // PropTypes.func.isRequired,
            focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
            onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
            startDatePlaceholderText="dd/mm/yyyy"
            endDatePlaceholderText="dd/mm/yyyy"
            daySize={32}
            numberOfMonths={1}
            block={true}
          />
        </div>
      </Piker>
    );
  }
}

export default Dates;

const Piker = styled.div`
  height: 20px;
  position: relative;
  display: flex;
  justify-content: center;

  width: 100%;
  margin-bottom: 30px;
`;

const Start = styled.div`
  margin-right: 40px;
  border: 1px black solid;
  z-index: 3;
`;
