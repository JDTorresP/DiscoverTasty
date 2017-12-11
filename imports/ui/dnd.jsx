import React from 'react'
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'
import BigCalendar from 'react-big-calendar'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

BigCalendar.momentLocalizer(moment);
const DragAndDropCalendar = withDragAndDrop(BigCalendar);

class Dnd extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      events: this.props.events
    }

    this.moveEvent = this.moveEvent.bind(this)
  }

  moveEvent({ event, start, end }) {
    const { events } = this.state;

    const idx = events.indexOf(event);
    const updatedEvent = { ...event, start, end };

    const nextEvents = [...events]
    nextEvents.splice(idx, 1, updatedEvent)

    this.setState({
      events: nextEvents
    })

    alert(`${event.title} was dropped onto ${event.start}`);
  }

  Event({ event }) {
    return (
        <span>
            <strong>
                {event.title}
            </strong>
            { event.desc && (':  ' + event.desc)}
        </span>
        )
    }

    EventAgenda({ event }) {
    return <span>
        <em style={{ color: 'magenta'}}>{event.title}</em>
        <p>{ event.desc }</p>
    </span>
    }

  render(){
    return (
        <div className="col-md-8">
            <DragAndDropCalendar
            selectable
            events={this.state.events}
            onEventDrop={this.moveEvent}
            defaultView='week'
            components={{
                event: this.Event,
                agenda: {
                  event: this.EventAgenda
                }
              }}
            />
        </div>
    )
  }
}

export default DragDropContext(HTML5Backend)(Dnd)