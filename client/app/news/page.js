'use client'; 
import React, { useEffect, useState} from 'react';
import newsArticles from './news_array';
import './news.css';
import {FaArrowLeft } from 'react-icons/fa';
import Footer from "../components/SmallFooter/footer";


export default function NewsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 10;
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [sortBy, setSortBy] = useState('DATE');
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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) { // Adjust the value as needed
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 850) { // Adjust the value as needed
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  

  // Utility functions
  const convertToISO = (date) => {
    const [day, month, year] = date.split('-').map(Number);
    return new Date(year, month - 1, day).toISOString().split('T')[0];
  };

  const formatDateForDisplay = (date) => {
    const [year, month, day] = date.split('-');
    return `${day}-${month}-${year}`;
  };

  // Sort and filter the news articles
  let sortedArticles = [...newsArticles];
  if (sortBy) {
    sortedArticles = sortedArticles.sort((a, b) => {
      if (sortBy === 'DATE') {
        const dateA = convertToISO(a.date);
        const dateB = convertToISO(b.date);
        return sortOrder === 'asc' ? dateA.localeCompare(dateB) : dateB.localeCompare(dateA);
      } else {
        return sortOrder === 'asc' ? a[sortBy].localeCompare(b[sortBy]) : b[sortBy].localeCompare(a[sortBy]);
      }
    });
  }

  const filteredArticles = sortedArticles.filter(article =>
    Object.values(article).some(value =>
      String(value).toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <><div className="back-to-home">
      {showScrollToTop && (
        <button onClick={scrollToTop} className="back-to-top-button">
          Scroll to Top
        </button>
      )}
    </div><div className='newsContainer'>
        <div className="newsContainer-in">
          <div className="newsContainer-in-header">
            <div className="newsContainer-in-header-in">
              <header className="header">
                <div className="header-in-one">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)} />
                </div>
                <div className="header-in-two">
                  <h1>Our Achievements in News Articles</h1>
                </div>
                <div className="header-in-three">
                  <a href="/">Back to Home</a>
                </div>
              </header>
            </div>
          </div>
          <div className="newsContainer-in-main">
            <section className="articlesGrid">
              {currentArticles.map(article => (
                <div key={article.id} className="articleCard">
                  <img src={article.imageUrl} alt={article.title} className="articleImage" />
                  <h2 className="articleTitle">{article.title}</h2>
                  <p className="articleMeta">
                    {article.publication} - {formatDateForDisplay(article.date)}
                  </p>
                  <p className="articleExcerpt">{article.excerpt}</p>
                  {/* <a href={article.url} className="readMore">Read More</a> */}
                </div>
              ))}
            </section>
          </div>
          <div className="pagination">
            <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>Prev</button>
            <span>Page {currentPage} of {Math.ceil(filteredArticles.length / articlesPerPage)}</span>
            <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(filteredArticles.length / articlesPerPage)}>Next</button>
          </div>
          <div className="Footer">
            <Footer />
          </div>
        </div>
      </div></>
  );
}
