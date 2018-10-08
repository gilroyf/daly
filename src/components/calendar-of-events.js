import 'react-big-calendar/lib/css/react-big-calendar.css';
import React, { Component } from "react";
import ReactDOM from "react-dom";
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import Top from './top';
import Page from './page';
import { connect } from 'react-redux';

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
const localizer = BigCalendar.momentLocalizer(moment);
const CalendarOfEvents = ({events}) => {  
    const coe = (
        <div className="calendar">
            <BigCalendar
                events={events}
                step={30}
                selectable={false}
                showMultiDayTimes
                views={['month', 'agenda']}
                localizer={localizer}
                drilldownView="agenda"
                length={500}
            />
        </div>
    );
    return (
        <Page widget={coe} />
    )    
};

const calendar = () => (
    <CalendarOfEvents />
);  

const mapStateToProps = (state) => {
    return {events: state.event};
}
export default connect(mapStateToProps)(CalendarOfEvents);