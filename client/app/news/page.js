'use client';
import React, { useState } from 'react';
import './news.css';
import newsArticles from './news_array'; 
export default function NewsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter articles based on the search query
  const filteredArticles = newsArticles.filter(article =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='newsContainer'>
      <div className="newsContainer-in">
        <div className="newsContainer-in-header">
          <div className="newsContainer-in-header-in">
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
              <div className="header-in-three">
                <a href="/">Back to Home</a>
              </div>
            </header>
          </div>
        </div>
        <div className="newsContainer-in-main">
          <div className="newsContainer-in-main-in">
            <div className="main-in-box-group">
              {filteredArticles.map(article => (
                <div key={article.id} className="main-in-box-group-in">
                  <div className="box">
                    <div className="box-in">
                      <div className="box-in-img">
                        <img src={article.imageUrl} alt={article.title} />
                      </div>
                      <div className="box-in-info">
                        <div className="box-in-info-in">
                          <h1>{article.title}</h1>
                          <p>{article.excerpt}</p>
                          <p>{article.date}</p>
                          <a href={article.url} target="_blank" rel="noopener noreferrer">
                            Read more
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* <div className="newsContainer-in-footer">
          <Footer/>
        </div> */}
      </div>
    </div>
  );
}
