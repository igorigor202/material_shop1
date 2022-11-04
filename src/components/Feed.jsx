import { Box, Grid } from '@mui/material';

import React, { useState } from 'react';
import Post from './Post.jsx';
import { useEffect } from 'react';

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://62fafe68abd610251c00224e.mockapi.io/posts')
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setPosts(arr);
      });
  }, []);
  return (
    <Box flex={35} sx={{}}>
      <Grid
        container
        padding={{ xs: 1, sm: 1, md: 5 }}
        spacing={{ xs: 1, sm: 2, md: 3 }}
        justifyContent="center"
        alignItems="stretch">
        {posts.map((obj) => (
          <Post
            key={obj.id}
            avatarUrl={obj.avatarUrl}
            title={obj.title}
            image={obj.image}
            text={obj.text}
            price={obj.price}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default Feed;
