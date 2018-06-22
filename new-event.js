import React, { Component } from 'react';

class NewEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          date: ''
          event: ''
          time: ''
        };

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    render() {
        return (
          <div>
            <ul className='eventlayout'>
            {
              events.map((event) => {
                return (
                  <Event
                    key={event.id}
                      id={event.id}
                      event={event.event}
                      date={this.date}
                      time={event.time}
                      handleEventDelete={handleEventDelete}
                  />
                )
              })
            }
            </ul>
          </div>
        )
    }
}

export default NewEvent;