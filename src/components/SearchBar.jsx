import React, { useState, useEffect, useRef } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch, placeholder = "Search privacy content..." }) => {
  const [query, setQuery] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const searchRef = useRef(null);

  // Search data - in a real app, this would come from an API or database
  const searchableContent = [
    { id: 1, title: 'Privacy Policy', content: 'Your privacy matters to us. We collect minimal data...', url: '/privacy-policy', category: 'Legal' },
    { id: 2, title: 'Account Deletion', content: 'Request complete deletion of your account and data...', url: '/account-deletion', category: 'Account' },
    { id: 3, title: 'Reporting System', content: 'Report inappropriate content or behavior...', url: '/reporting', category: 'Support' },
    { id: 4, title: 'End-to-End Encryption', content: 'All messages are encrypted end-to-end...', url: '/features', category: 'Features' },
    { id: 5, title: 'Data Protection', content: 'We protect your data with industry-standard security...', url: '/features', category: 'Features' },
    { id: 6, title: 'Download Chatify', content: 'Download our secure messaging app...', url: '/download', category: 'Download' },
    { id: 7, title: 'How It Works', content: 'Learn how Chatify protects your privacy...', url: '/how-it-works', category: 'Guide' },
    { id: 8, title: 'Support Center', content: 'Get help with your account and privacy concerns...', url: '/support', category: 'Support' },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsExpanded(false);
        setSearchResults([]);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const performSearch = (searchQuery) => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
    
    // Simulate search delay
    setTimeout(() => {
      const results = searchableContent.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      
      setSearchResults(results);
      setIsSearching(false);
    }, 300);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    performSearch(value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  const handleResultClick = (result) => {
    window.location.href = result.url;
    setIsExpanded(false);
    setSearchResults([]);
    setQuery('');
  };

  return (
    <div className="search-container" ref={searchRef}>
      <form onSubmit={handleSearch} className="search-form">
        <div className="search-input-wrapper">
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            onFocus={() => setIsExpanded(true)}
            placeholder={placeholder}
            className="search-input"
          />
          <button type="submit" className="search-button">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
          </button>
        </div>
      </form>

      {isExpanded && (query || isSearching) && (
        <div className="search-results">
          {isSearching ? (
            <div className="search-loading">
              <div className="loading-spinner"></div>
              <span>Searching...</span>
            </div>
          ) : searchResults.length > 0 ? (
            <div className="results-list">
              {searchResults.map((result) => (
                <div
                  key={result.id}
                  className="search-result-item"
                  onClick={() => handleResultClick(result)}
                >
                  <div className="result-content">
                    <h4 className="result-title">{result.title}</h4>
                    <p className="result-excerpt">{result.content.substring(0, 80)}...</p>
                    <span className="result-category">{result.category}</span>
                  </div>
                  <div className="result-arrow">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="m9 18 6-6-6-6"/>
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          ) : query && (
            <div className="no-results">
              <span>No results found for "{query}"</span>
              <p>Try different keywords or check the spelling</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
