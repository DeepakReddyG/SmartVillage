import React from 'react';
import data from './activities_array';

import './page.css';

function Page() {
  return (
    <div className='activities_table'>
      <div className="activities_table_in">
        <div className="activities_table_in_header">
          <div className="activities_table_in_header_in">
            <h1>Activities List</h1>
          </div>
        </div>

        <div className="activities_table_in_one">
          <div className="activities_table_in_one_in">

          <table>
        <thead>
          <tr>
            <th>S No</th>
            <th>Date</th>
            <th>Village Name</th>
            <th>Name of the Event</th>
            <th>Domain</th>
            <th>Number of Students Participated</th>
          </tr>
        </thead>
        <tbody>
          {data.map(event => (
            <tr key={event["S NO"]}>
              <td>{event["S NO"]}</td>
              <td>{event["DATE"]}</td>
              <td>{event["VILLAGE NAME"]}</td>
              <td>{event["NAME OF THE EVENT"]}</td>
              <td>{event["DOMAIN"]}</td>
              <td>{event["NUMBER OF STUDENTS PARTICIPATED"]}</td>
            </tr>
          ))}
        </tbody>
      </table>

          </div>
        </div>
      </div>

    </div>
  );
}

export default Page;
