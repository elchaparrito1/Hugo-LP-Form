import React from 'react';
import iCal from '../ics/HugoLP_Forum.ics';

const AddCalendar = () => (
  <>
    <table className="table">
      <tbody>
        <tr>
          <th>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://www.google.com/calendar/event?action=TEMPLATE&dates=20201009T170000Z%2F20201010T220000Z&text=Hugo-LP%20Forum&location=9100%20Marsac%20Avenue%20Park%20City%2C%20UT%2084060&details=Hugo-LP%20Forums%20is%20a%20special%20invitation%20summit%20designed%20to%20bring%20together%20leading%20LP%E2%80%99s%20and%20GP%E2%80%99s."
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
