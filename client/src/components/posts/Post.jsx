import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

export const Post = ({
  postId,
  username,
  userImage,
  postTime,
  postTitle,
  postContent,
  postimage,
  postTag,
  postLikescount,
  postcommentscount,
  isPostLiked
}) => {

  const [ispostsloading, setIsPostsLoading] = useState(true);
  const [likeCount, setLikeCount] = useState(postLikescount);
  const [isThisPostLiked, setIsThisPostLiked] = useState(isPostLiked);

  function handlePostLike(postId, isPostLiked, userId) {
    if (isPostLiked) {
      // unlike post
      setLikeCount(likeCount - 1);
      setIsThisPostLiked(false);
    } else {
      // like post
      setLikeCount(likeCount + 1);
      setIsThisPostLiked(true);
    }
  }

  useEffect(() => {
    // fake loading remove after backend integration
    setTimeout(() => {
      setIsPostsLoading(false);
    }, 1000);
  }, [])
  const userId = "1"; // fake user id
  
  return (
    <article id="post" className="flex border border-gray-300 rounded bg-white cursor-pointer mb-2 px-5 sm:px-10 dark:bg-gray-800 dark:border-gray-700">
      <div className='w-full'>
      <div className="pt-3">
        <div className="flex items-center text-xs mb-2">
          <Link
            to={"/user/23"}
            className="font-semibold no-underline hover:underline text-black flex items-center dark:text-gray-300"
          >
            <img
              className="rounded-full border h-7 w-7"
              src={userImage}
              alt="User Avatar"
            />
            <span className="ml-2">{username}</span>
          </Link>
          <span className="text-gray-700 dark:text-gray-400 mx-1 text-xxs">•</span>
          <span className="text-gray-700 dark:text-gray-400">Posted</span>
          <span className="text-gray-700 dark:text-gray-400 pl-1">{postTime}</span>
        </div>
        <Link to={"/post/"+ postId}>
          <h2 className="text-lg font-bold mb-1 text-black dark:text-white">
            {postTitle} 
          {postTag && 
          <span className="text-xs bg-[#DBE2EF] text-gray-700 px-2 py-1 ml-2 rounded-full">
            {postTag}
          </span>
          }
          </h2>
          <p className="text-gray-300-darker text-sm mt-2">{postContent}</p>
          <div className="flex justify-center">
            {postimage && (
              ispostsloading ? (
                <div className='animate-pulse bg-gray-200 w-full h-96 rounded-lg mt-3'></div>
              ) : 
              <img
                className={`rounded-lg mt-3 h-auto xs:w-64 xs:h-auto md:w-[35rem]`}
                src={postimage}
                alt="post image"
                loading="lazy"
              />
            )}
          </div>
        </Link>
        <div className="inline-flex items-center my-3">
          <div className="flex p-2 items-center hover:bg-gray-200 rounded-lg" onClick={()=> handlePostLike(postId,isThisPostLiked,userId)}>    
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill={isThisPostLiked ? "red" : "none"}
              stroke="rgb(107 114 128)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            <span className="ml-2 text-xs font-semibold text-gray-500 select-none">
              {likeCount} Likes
            </span>
          </div>
          <Link to={"/post/"+postId} className="flex p-2 items-center hover:bg-gray-200 rounded-lg ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgb(107 114 128)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            <span className="ml-2 text-xs font-semibold text-gray-500 select-none">
              {postcommentscount} Comments
            </span>
          </Link>
          <div className="flex p-2 items-center hover:bg-gray-200 rounded-lg ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgb(107 114 128)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="1"></circle>
              <circle cx="19" cy="12" r="1"></circle>
              <circle cx="5" cy="12" r="1"></circle>
            </svg>
            <span className="ml-2 text-xs font-semibold text-gray-500">
              More
            </span>
          </div>
        </div>
      </div>
      </div>
    </article>
  );
};
