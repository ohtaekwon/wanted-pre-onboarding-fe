// LIBRARY
import React from 'react';
import { useState, useEffect } from 'react';
// COMPONENTS
import FeedsList from './FeedsList';
// API
import { getFeeds } from '../api';

// CSS
import './Feeds.css';
import Loading from './Loading';
export default function Feeds() {
  const [feedState, setFeedState] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingError, setLoadingError] = useState(null);
  const handleLoad = async () => {
    let FeedList;
    try {
      setIsLoading(true);
      setLoadingError(null);
      FeedList = await getFeeds();
    } catch {
      // console.log(error);
      setLoadingError(error);
      return;
    } finally {
      setIsLoading(false);
    }
    // console.log(FeedList);
    setFeedState(FeedList);
  };
  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <ul className="FeedList">
          {feedState &&
            feedState.map((feed) => {
              return (
                <li key={feed.id}>
                  <FeedsList feed={feed} isLoading={isLoading} />
                </li>
              );
            })}
        </ul>
      )}
      {loadingError?.message && <span>{loadingError.message}</span>}
    </>
  );
}
