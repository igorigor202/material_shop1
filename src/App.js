import * as React from 'react';

import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Navbar from './components/Navbar.jsx';
import { Box, createTheme, Stack, ThemeProvider } from '@mui/material';
import Add from './components/Add.jsx';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={'background.default'} color={'text.primary'}>
        <Navbar setMode={setMode} mode={mode} />
        <Stack
          direction={{ sm: 'column', md: 'row', lg: 'row' }}
          spacing={{ sm: 2, md: 15 }}
          justifyContent="space-around">
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
