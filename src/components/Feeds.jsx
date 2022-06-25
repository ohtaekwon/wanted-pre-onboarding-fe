import React from 'react';
import FeedsList from './FeedsList';
import { getFeeds } from '../api';
import { useState } from 'react';
import { useEffect } from 'react';

// CSS
import './Feeds.css';
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
      {/* <button onClick={handleLoad}>버튼</button> */}

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
      {loadingError?.message && <span>{loadingError.message}</span>}
    </>
  );
}
