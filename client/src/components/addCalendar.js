import React from 'react';
import AddToCalendar from 'react-add-to-calendar';
import moment from 'moment';

const startDatetime = moment(
  '10-09-2020 11AM',
  'MM-DD-YYYY hhA',
  'America/Boise'
).utc();
const endDatetime = moment(
  '10-10-2020 16PM',
  'MM-DD-YYYY hhA',
  'America/Boise'
).utc();

const event = {
  title: 'Sample Event',
  description: 'This is the sample event provided as an example only',
  location: 'The Montage, Deer Valley Utah',
  startTime: startDatetime,
  endTime: endDatetime,
};

const AddCalendar = () => (
  <>
    <AddToCalendar event={event} buttonLabel="Add to Calendar" />
  </>
);

export default AddCalendar;
