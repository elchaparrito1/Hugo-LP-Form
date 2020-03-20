import React from 'react';
import iCal from '../ics/HugoLP_Fall_Forum.ics';

const AddCalendar = () => (
  <>
    <table className="table">
      <tbody>
        <tr>
          <th>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://www.google.com/calendar/event?action=TEMPLATE&dates=20201102T010000Z%2F20201105T010000Z&text=Hugo-LP%20Fall%20Forum%202020&location=7500%20E%20Doubletree%20Ranch%20Rd%2C%20Scottsdale%2C%20AZ%2085258&details=Exclusive%202-day%20event%20to%20meet%2C%20collaborate."
            >
              +GoogleCal
            </a>
          </th>
          <th>
            <a target="_blank" rel="noopener noreferrer" href={iCal}>
              +iCal
            </a>
          </th>
        </tr>
      </tbody>
    </table>
  </>
);

export default AddCalendar;
