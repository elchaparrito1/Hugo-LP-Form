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
              href="https://www.google.com/calendar/render?action=TEMPLATE&text=HUGO+Forum+-+Virtual+Event&details=HUGO+Forum+-+Virtual+Event%0ADate%3A+Apr+28%2C+2021+-+Apr+29%2C+2021%0AVenue%3A+Online%0AHUGO+Forum+is+an+invitation-only+event+that+allows+investors+to+meet+multiple+managers+in+small+LP+groups.+Our+upcoming+forum+will+be+a+virtual+event.+The+event+provides+an+efficient+platform+to+meet+other+investors+and+managers+over+two+half-day+sessions.&location=Online&dates=20210428T173000Z%2F20210429T221500Z"
            >
              +GoogleCal
            </a>
          </th>
          <th>
            <a target="_blank" rel="noopener noreferrer" href={iCal}>
              +iCal
            </a>
          </th>
          {/* <th>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://outlook.live.com/owa/?path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=20210330T000000&enddt=20210331T000000&subjectAnand%20birthday&body=HUGO%20Forum%20Virtual%20Event%202021$location=Online"
            >
              +Outlook
            </a>
          </th> */}
        </tr>
      </tbody>
    </table>
  </>
);

export default AddCalendar;
