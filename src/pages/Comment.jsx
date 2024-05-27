import React, { useState, useEffect } from 'react';
import logoSunny from "../assets/images/logoSunny.png";
import { useParams } from 'react-router-dom';
import { fetchUser } from '../utils/fetchUser';
import client from '../client';
import { postDetails } from '../utils/data';


const Comment = () => {
  const [user, setUser] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  //ID;
  const { postId } = useParams();

  useEffect(() => {
    const fetchedUser = fetchUser();
    setUser(fetchedUser);
    const storedComments = JSON.parse(localStorage.getItem(`comments-${postId}`)) || [];
    setComments(storedComments);
    fetchComments();
  }, [postId]);

  const fetchComments = async () => {
    const query = postDetails(postId);
    const data = await client.fetch(query);
    setComments(data);
    localStorage.setItem(`comments-${postId}`, JSON.stringify(data));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      alert('Please sign in to comment');
      return;
    }

    const doc = {
      _type: 'comment',
      comment: newComment,
      postedBy: {
        _type: 'reference',
        _ref: user.sub,
      },
      post: {
        _type: 'reference',
        _ref: postId,
      },
    };

    const createdComment = await client.create(doc);
    const newCommentData = {
      _id: createdComment._id,
      comment: newComment,
      postedBy: {
        _id: user.sub,
        username: user.username,
        image: user.image,
      },
    };
    setNewComment('');
    const updatedComments = [...comments, newCommentData];
    setComments(updatedComments);
    localStorage.setItem(`comments-${postId}`, JSON.stringify(updatedComments));
  };

  return (
    <>
      <div className='mx-5 md:mx-8'>
        <h1 className='font-bold text-3xl mb-6'>Comments</h1>

        <div className='comment-content border border-emerald-700 max-h-full h-full p-[2rem] space-y-7'>
          {comments.map((comment) => (
            <div key={comment._id} className='flex space-x-4 flex-col border border-zinc-300 p-[1rem] bg-slate-500 text-white'>
              <div className='flex space-x-3'>
                <img src={comment.postedBy?.image} className='w-8 h-8 border rounded-full border-zinc-500' alt="user-profile" />
                <h4>{comment.postedBy?.username}</h4>
              </div>
              <p className='text-start pt-4'>{comment.comment}</p>
            </div>
          ))}
        </div>

        {user && (
          <div className='flex mt-6 p-0 bottom-0 top-0 bg-white sticky '>
            <img src={user.image || logoSunny} className='w-20 h-20' alt="user-profile" />
            <input
              type='text'
              placeholder='Add to the discussion'
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className='flex-1 h-[4rem] md:w-full border text-start sticky border-emerald-500 p-2'
            />
            <button
              onClick={handleSubmit}
              className='text-yellow-300 text-[18px] left-[58rem] pt-5 font-semibold absolute px-6'>
              Submit
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Comment;
