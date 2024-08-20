import React, { useEffect, useState } from 'react';
import newsArticles from './news_array'; 
import './news.css';

export default function NewsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [articles, setArticles] = useState([]);
  const articlesPerPage = 10;
  const [sortBy, setSortBy] = useState('DATE');
  const [sortOrder, setSortOrder] = useState('desc');

  useEffect(() => {
    // Assume newsArticles is fetched or modified here
    setArticles(newsArticles);
  }, []);

  const handleSort = (column) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc');
    } else {
      setSortBy(column);
      setSortOrder('desc');
    }
  };

  const formatDateForSorting = (date) => {
    return new Date(date).toISOString();
  };

  let sortedArticles = [...articles];
  if (sortBy) {
    sortedArticles = sortedArticles.sort((a, b) => {
      if (sortBy === 'DATE') {
        const dateA = formatDateForSorting(a.date);
        const dateB = formatDateForSorting(b.date);
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
    <div className='newsContainer'>
      <div className="newsContainer-in">
        <header className="header">
          <div className="header-in-one">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="header-in-two">
            <h1>Our Achievements in News Articles</h1>
          </div>
        </header>
        <section className="articlesGrid">
          {currentArticles.map(article => (
            <div key={article.id} className="articleCard">
              <img src={article.imageUrl} alt={article.title} className="articleImage" />
              <h2 className="articleTitle">{article.title}</h2>
              <p className="articleMeta">
                {article.publication} - {format(new Date(article.date), 'MM/dd/yyyy')}
              </p>
              <p className="articleExcerpt">{article.excerpt}</p>
              <a href={article.url} className="readMore">Read More</a>
            </div>
          ))}
        </section>
        <div className="pagination">
          <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>Prev</button>
          <span>Page {currentPage} of {Math.ceil(filteredArticles.length / articlesPerPage)}</span>
          <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(filteredArticles.length / articlesPerPage)}>Next</button>
        </div>
      </div>
    </div>
  );
}
