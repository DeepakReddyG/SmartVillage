"use client"
import React, { useState } from 'react';
import data from './Updates_Array';
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
    // Handle both "." and "-" separators
    const parts = date.includes('.') ? date.split('.') : date.split('-');
    const [day, month, year] = parts;
    
    // Ensure year is padded correctly
    const fullYear = year.length === 2 ? `20${year}` : year;
    
    // Return ISO format date string
    return `${fullYear}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
  };

  // Sort the data based on the selected column and order
  let sortedData = [...data];
  if (sortBy) {
    sortedData = sortedData.sort((a, b) => {
      if (sortBy === 'DATE') {
        const dateA = formatDateForSorting(a["Date of the activity \nDD-MM-YYYY"]);
        const dateB = formatDateForSorting(b["Date of the activity \nDD-MM-YYYY"]);
        return sortOrder === 'asc' ? dateA.localeCompare(dateB) : dateB.localeCompare(dateA);
      } else {
        return sortOrder === 'asc' ? String(a[sortBy]).localeCompare(String(b[sortBy])) : String(b[sortBy]).localeCompare(String(a[sortBy]));
      }
    });
  }

  // Add this after sorting the data
  // console.log('Sorted data:', sortedData.slice(0, 5)); // Show first 5 entries

  // Filtered data based on search query and selected year
  const filteredData = sortedData.filter(event =>
    (selectedYear === '' || event['Year'].includes(selectedYear)) &&
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
  const years = Array.from(new Set(data.map(event => event['Year'])));
  const totalStudents = filteredData.reduce((sum, event) => sum + parseInt(event["Number of students participated in such activities"] || 0, 10), 0);


  return (
    <div className='activities_table'>
      <div className="activities_table_in">
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
            <div className="activities_table_in_Options">
              <div className="activities_table_in_Options_in">
                <div className='DateOption'>
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
                </div>
                <div className='BackHome'>
                  <a href="/">Back to Home</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="activities_table_in_one">
          <div className="activities_table_in_one_in">
            <table>
              <thead>
                <tr>
                  <th>Date &nbsp;
                  </th>
                  {/* <th>Village Name</th> */}
                  <th>Name of the Activity</th>
                  <th>Number of Students Participated</th>
                  <th>Report</th>
                </tr>
              </thead>
                <tbody> 
                {currentEvents.map(event => (
                  <tr key={event["S.No"]}>
                    <td>{event["Date of the activity \nDD-MM-YYYY"]}</td>
                    {/* <td className="village-column">{event["Village Name"] || "N/A"}</td> */}
                    <td className="activity">{event["Name of the activity"]}</td>
                    <td className="students-participated">{event["Number of students participated in such activities"]}</td>
                    <td>
                      {event["Web Links"] ? (
                       <a href={event["Web Links"]} target="_blank" rel="noopener noreferrer">
                          <button>View</button>
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
              <div className="activities_table_in_count">
                <button className="event-count-button">
                  Events Count: {filteredData.length}
                </button>
                <button className="student-count-button">
                  Total Students: {totalStudents}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;