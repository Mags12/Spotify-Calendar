import React, { Component } from 'react';
import NewEvent from './new-event';
import EventLayout from './event-layout';

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
        }
        this.handleEventDelete = this.handleEventDelete.bind(this);
    }

    handleSubmit(e) {
      fetch('/events', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.state)
      }).then(() => {
        this.setState({
            date: ''
            event: ''
            time: ''
        });
      });
    }

    handleInput(e) {
        this.setState({
            event: e.target.value
        });
    }

    handleEventDelete(e) {
      const id = e.target.parentNode.dataset.id;
      fetch(`/event/${id}`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }).then(() => {
          this.getEventss();
      })
    }

    handleDisplayEvents(e) {
      const id = e.target.parentNode.dataset.id;
      fetch(`/events/${id}`, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: { is_completed: true }
      }).then((e) => {
        this.setState({
          event: '',
        })
      })
    }

    getEvents() {
      fetch('/events')
        .then((response) => {
          response.json().then((json) => {
            this.setState({
              handleDisplayEvents()
            });
        })
      })
    }

    componentDidMount() {
        this.getEvents();
    }

    render() {
      return (
        <div id="wrapper" style="text-align: center">
          <div id="calendar">
            <header>
              <h2>Spotify Calendar</h2>
            </header>
          <table>
            <tr class="week">
              <td>Mon</td>
              <td>Tues</td>
              <td>Weds</td>
              <td>Thurs</td>
              <td>Fri</td>
              <td>Sat</td>
              <td>Sun</td>
            </tr>
            <tr class="june">
              <td class="days"></td>
              <td class="days"></td>
              <td class="days"></td>
              <td class="days"><lie type="button" value="1" onClick={this.handleSubmit}></td>
              <td class="days"><input type="button" value="2" onClick={this.handleSubmit}></td>
              <td class="days"><input type="button" value="3" onClick={this.handleSubmit}></td>
              <td class="days"><input type="button" value="4" onClick={this.handleSubmit}></td>
              <td class="days"><input type="button" value="5" onClick={this.handleSubmit}></td>
            </tr>
            <tr class="june">
              <td class="days"><input type="button" value="6" onClick={this.handleSubmit}></td>
              <td class="days"><input type="button" value="7" onClick={this.handleSubmit}></td>
              <td class="days"><input type="button" value="8" onClick={this.handleSubmit}></td>
              <td class="days"><input type="button" value="9" onClick={this.handleSubmit}></td>
              <td class="days"><input type="button" value="10" onClick={this.handleSubmit}></td>
              <td class="days"><input type="button" value="11" onClick={this.handleSubmit}></td>
              <td class="days"><input type="button" value="12" onClick={this.handleSubmit}></td>
            </tr>
            <tr class="june">
              <td class="days"><input type="button" value="13" onClick={this.handleSubmit}></td>
              <td class="days"><input type="button" value="14" onClick={this.handleSubmit}></td>
              <td class="days"><input type="button" value="15" onClick={this.handleSubmit}></td>
              <td class="days"><input type="button" value="16" onClick={this.handleSubmit}></td>
              <td class="days"><input type="button" value="17" onClick={this.handleSubmit}></td>
              <td class="days"><input type="button" value="18" onClick={this.handleSubmit}></td>
              <td class="days"><input type="button" value="19" onClick={this.handleSubmit}></td>
            </tr>
            <tr class="june">
              <td class="days"><input type="button" value="20" onClick={this.handleSubmit}></td>
              <td class="days"><input type="button" value="21" onClick={this.handleSubmit}></td>
              <td class="days"><input type="button" value="22" onClick={this.handleSubmit}></td>
              <td class="days"><input type="button" value="23" onClick={this.handleSubmit}></td>
              <td class="days"><input type="button" value="24" onClick={this.handleSubmit}></td>
              <td class="days"><input type="button" value="25" onClick={this.handleSubmit}></td>
              <td class="days"><input type="button" value="26" onClick={this.handleSubmit}></td>
            </tr>
            <tr class="june">
              <td class="days"><input type="button" value="27" onClick={this.handleSubmit}></td>
              <td class="days"><input type="button" value="28" onClick={this.handleSubmit}></td>
              <td class="days"><input type="button" value="29" onClick={this.handleSubmit}></td>
              <td class="days"><input type="button" value="30" onClick={this.handleSubmit}></td>
              <td class="days"></td>
              <td class="days"></td>
              </tr>
          </table>
          <button id="DisplayAll" onClick={this.getEvents}>"Display All Events"</button>
          </div>
        </div>
      )
  }
};

export default Calendar;