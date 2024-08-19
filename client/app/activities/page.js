"use client"
import React, { useState } from 'react';
import data from './activities_array';
import './page.css';

function Page() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedYear, setSelectedYear] = useState('');
  const eventsPerPage = 15;
  const [sortBy, setSortBy] = useState("DATE");
  const [sortOrder, setSortOrder] = useState('desc');

  // Function to handle sorting
  const handleSort = (column) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc');
    } else {
      setSortBy(column);
      setSortOrder('desc');
    }
  };

  // Function to convert date to a common format for sorting
  const formatDateForSorting = (date) => {
    const [day, month, year] = date.split('.');
    return `${year.padStart(4, '20')}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
  };

  // Sort the data based on the selected column and order
  let sortedData = [...data];
  if (sortBy) {
    sortedData = sortedData.sort((a, b) => {
      if (sortBy === 'DATE') {
        const dateA = formatDateForSorting(a[sortBy]);
        const dateB = formatDateForSorting(b[sortBy]);
        return sortOrder === 'asc' ? dateA.localeCompare(dateB) : dateB.localeCompare(dateA);
      } else {
        return sortOrder === 'asc' ? String(a[sortBy]).localeCompare(b[sortBy]) : String(b[sortBy]).localeCompare(a[sortBy]);
      }
    });
  }

  // Filtered data based on search query and selected year
  const filteredData = sortedData.filter(event =>
    (selectedYear === '' || event['DATE'].includes(selectedYear)) &&
    Object.values(event).some(value =>
      String(value).toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  // Calculate the index of the first and last events of the current page
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = filteredData.slice(indexOfFirstEvent, indexOfLastEvent);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  // Extract unique years from the data for the dropdown options
  const years = Array.from(new Set(data.map(event => event['DATE'].split('.')[2])));

  return (
    <div className='activities_table'>
      <div className="activities_table_in">
        <div className="activities_table_in_header">
          <div className="activities_table_in_header_in">
            {/* <h1>Activities List</h1> */}
          </div>
        </div>
        <div className="activities_table_in_HeaderTwo">
          <div className="activities_table_in_HeaderTwo_in">
            <div className="activities_table_in_search">
              <div className="activities_table_in_search_in">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <div className="activities_table_in_Heading">
              <div className="activities_table_in_Heading_in">
                <h1>Activities List</h1>
              </div>
            </div>
            {/* <div className="activities_table_in_dropdown">
              <div className="activities_table_in_dropdown_in">
                <label htmlFor="year">Select Year:</label>
                <select
                  id="year"
                  value={selectedYear}
                  onChange={e => setSelectedYear(e.target.value)}
                >
                  <option value="">All</option>
                  {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
            </div> */}
            <div className="activities_table_in_BackHome">
              <div className="activities_table_in_BackHome_in">
                <a href="/">Back to Home</a>
              </div>
            </div>
          </div>
        </div>
        <div className="activities_table_in_one">
          <div className="activities_table_in_one_in">
            <table>
              <thead>
                <tr>
                  <th>S No</th>
                  <th>Date
                    <select className='DateOption'
                      id="year"
                      value={selectedYear}
                      onChange={e => setSelectedYear(e.target.value)}
                    >
                      <option value="">All</option>
                      {years.map(year => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                  </th>
                  <th >Village Name</th>
                  <th >Name of the Event</th>
                  <th>Domain</th>
                  <th>Number of Students Participated</th>
                  <th>Report</th>
                </tr>
              </thead>
              <tbody>
                  {currentEvents.map(event => (
                    <tr key={event["S NO"]}>
                      <td>{event["S NO"]}</td>
                      <td>{event["DATE"]}</td>
                      <td className="village-column">{event["VILLAGE NAME"]}</td>
                      <td>{event["NAME OF THE EVENT"].length > 70 ? event["NAME OF THE EVENT"].substring(0, 60) + '...' : event["NAME OF THE EVENT"]}</td>
                      <td className="domain-column">{event["DOMAIN"]}</td>
                      <td className="students-participated">{event["NUMBER OF STUDENTS PARTICIPATED"]}</td>
                      <td>
                        {event["REPORT_URL"] ? (
                          <a href={event["REPORT_URL"]} download>
                            <button>Download</button>
                          </a>
                        ) : (
                          'Unavailable'
                        )}
                      </td>
                    </tr>
                  ))}
            </tbody>
            </table>
            <div className="pagination">
              <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>Prev</button>
              <span>Page {currentPage} of {Math.ceil(filteredData.length / eventsPerPage)}</span>
              <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(filteredData.length / eventsPerPage)}>Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
