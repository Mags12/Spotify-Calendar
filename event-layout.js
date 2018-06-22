import React from 'react';
import Event from './event';

const EventLayout = ({ time, handleEventDelete}) => {
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
};

export default EventLayout;