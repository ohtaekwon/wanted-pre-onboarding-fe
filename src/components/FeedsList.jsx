// LIBRARY
import React from 'react';
import { useEffect, useState, useRef, useContext } from 'react';
// CSS
import './FeedsList.css';
import Loading from './Loading';

// 이메일형식에서 아이디만 가려내기
function ChoosenId(id) {
  const nextId = id.split('@');
  return nextId[0];
}

// import FormContext from './FormContext';
export default function FeedList({ feed, isLoading }) {
  const inputRef = useRef();
  // const formContext = useContext(FormContext);
  const id = localStorage.getItem('id');
  const initailMsg = {
    id: '',
    msg: '',
  };
  const [msgState, setMsgState] = useState([initailMsg]);

  const handleForm = (e) => {
    e.preventDefault();
    const nextMsg = inputRef.current.value;
    if (nextMsg.length === 0) {
      return alert('빈 문자는 댓글을 달 수 없어요~');
    } else {
      handleMsgInput(nextMsg);
      inputRef.current.value = '';
    }
  };
  const handleMsgInput = (nextMsg) => {
    // const nextMsg = inputRef.current.value;
    setMsgState((prev) => [
      ...prev,
      {
        id: Date.now(),
        msg: nextMsg,
      },
    ]);
  };

  useEffect(() => {
    console.log(msgState);
  }, [msgState]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="FeedListItem">
          <div className="userId">
            <img src={process.env.PUBLIC_URL + 'assets/user.png'} alt="user" />
            <h1>{feed.userName}</h1>
          </div>
          <div className="FeedListItem-img">
            <img className="" src={feed.imgUrl} alt={feed.userName} />
          </div>
          <div className="FeedListItem-msg">
            <ul className="commentsList">
              {feed.comments &&
                feed.comments.map((comment) => {
                  return (
                    <li key={comment.id}>
                      <p>
                        <strong>{comment.userName} :</strong> {comment.comment}
                      </p>
                    </li>
                  );
                })}
            </ul>
            {msgState && (
              <ul className="myMsgList">
                {msgState.map((msg) => {
                  if (msg.id === '') {
                    return;
                  }
                  return (
                    <li key={msg.id}>
                      <p>
                        <strong>{ChoosenId(id)}</strong> : {msg.msg}
                      </p>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
          <form className="FeedListItem-input" onSubmit={handleForm}>
            <input
              type="text"
              className="msg-input"
              ref={inputRef}
              onChange={() => handleMsgInput}
              placeholder="  댓글 달기.."
            />
            <button type="submit">게시</button>
          </form>
        </div>
      )}
    </>
  );
}
