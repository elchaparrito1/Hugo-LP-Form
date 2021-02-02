import React from 'react';
import iCal from '../ics/HugoLP_Virtual_Forum.ics';

const AddCalendar = () => (
  <>
    <table className="table">
      <tbody>
        <tr>
          <th>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.google.com/calendar/render?action=TEMPLATE&text=HUGO%20Forum%20-%20Virtual%20Event&dates=20210330/20210401&details=HUGO%20Forum%20-%20Virtual%20Event%0ADate%3A%20Mar%2030%2C%202021%20-%20Apr%201%2C%202021%0AVenue%3A%20Online%0AHUGO%20Forum%20is%20an%20invitation-only%20event%20that%20allows%20investors%20to%20meet%20multiple%20managers%20in%20small%20LP%20groups.%20Our%20upcoming%20forum%20will%20be%20a%20virtual%20event.%20The%20event%20provides%20an%20efficient%20platform%20to%20meet%20other%20investors%20and%20managers%20over%20two%20half-day%20sessions.&location=Online&trp=true&sf=true&output=xml#f"
            >
              +GoogleCal
            </a>
          </th>
          <th>
            <a target="_blank" rel="noopener noreferrer" href={iCal}>
              +iCal
            </a>
          </th>
          <th>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://outlook.live.com/owa/?path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=20210330T000000&enddt=20210331T000000&subjectAnand%20birthday&body=HUGO%20Forum%20Virtual%20Event%202021$location=Online"
            >
              +Outlook
            </a>
          </th>
        </tr>
      </tbody>
    </table>
  </>
);

export default AddCalendar;
