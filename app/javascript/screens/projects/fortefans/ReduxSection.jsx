import React from 'react';
import { Typography, Box } from '@mui/material';
import PostsSlice from '../../../images/PostsSlice.png'

export default function ReduxSection () {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
      <Box sx={{ width: '45%' }}>
        <Typography
          variant='h2'
          align='left'
          color='#EDF0F5'
          sx={{ padding: '30px' }}>
          Redux | Toolkit
        </Typography>
        <Typography
          variant='body1'
          align='left'
          color='#A0A3A8'
          sx={{ padding: '30px', fontSize: '25px', textAlign: 'justify' }}>
          <p>
            Here you will find a PostsSlice which handles pagination, errors, and API calls. My state has 5 attributes that are used together to handle a Post Object. The first attribute data, is used to hold all posts from the backend. The Posts are always added onto the array while scrolling. The loading attribute is to handle a loading state while the initial data is being fetched from the API. The secondLoading attribute is useful for the infinite scroll. While scrolling, an eventListener triggers a useEffect which then fetchs more posts and call the secondLoading attribute to show a spinner. I have included a morePosts flag set to true to manage when there are no more posts coming from the backend. When a object from the backend has an attribute false, I capture the inequality and set the attribute to false on the Post Object. This stops constant API calls when their are no more Posts to fetch.
          </p>
          <p>
            The incrementCommentsSum is useful to show the amount of comments per Post. The actionPayload has a PostId. I iterate through the Post object and find the post with that ID. I then add 1 to the comments sum on Post. Finally, the fetchPosts.fulfilled reducer is adding more posts onto the Posts Object if the Post Object already has posts, if not the action.payload is set to the Post Object.
          </p>
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', width: '50%' }}>
        <Box sx={{
          height: '80%',
          overflowY: 'auto',
          transform: 'scale(1.1)',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
          transformOrigin: 'top left'
        }}>
          <img src={PostsSlice}></img>
        </Box>
      </Box>
    </Box>
  )
}
