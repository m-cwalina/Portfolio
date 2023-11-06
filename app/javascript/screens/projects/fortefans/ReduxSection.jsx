import React from 'react';
import { Typography, Box } from '@mui/material';
import PostsSlice from '../../../images/MacBookProRedux.png'

export default function ReduxSection () {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
      <Box sx={{ width: '50%' }}>
        <Typography
          variant='h2'
          align='left'
          color='#EDF0F5'
          sx={{ padding: '30px', fontWeight: 'bold' }}>
          Redux | Toolkit
        </Typography>
        <Typography
          variant='body2'
          align='left'
          color='#CCCCCC'
          sx={{ padding: '30px', fontSize: '25px', textAlign: 'justify' }}>
          <p>
            Here is a PostsSlice which handles pagination, errors, and async API calls. My state has 5 attributes that are used together to handle a Post Object. The first attribute data, is used to hold all posts from the backend. The Posts are always added onto the array while scrolling. The second attribute loading, handles a loading state for initial load and loading more posts onto the posts object. While scrolling, an eventListener triggers a useEffect which fetches more posts and provides an infinite scroll functionality. I have included a morePosts flag set to true to manage when there are no more posts available from the backend. When a object from the backend has an attribute false, I capture the inequality and set the attribute to false on the Post Object. This stops constant API calls when their are no more Posts to fetch.
          </p>
          <p>
            The postsSlice has further functionality to increment sum of commments on posts, adding or decreasing likes on Posts as well as handling errors. Included in the postsSlice are async API calls to the backend. I utilize Thunks from Redux Toolkit to handle promises, responses and rejections.
          </p>
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '50%'}}>
        <img className='redux-image' src={PostsSlice}></img>
      </Box>
    </Box>
  )
}
