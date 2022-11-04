import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from '@mui/material';
import React from 'react';
import { Home, ModeNight, Pages } from '@mui/icons-material';

const Sidebar = ({ mode, setMode }) => {
  return (
    <Box flex={3} padding={2} sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
      <Box position={'fixed'}>
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Магазин" />
            </ListItemButton>
          </ListItem>
          <ListItem disabled disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <Pages />
              </ListItemIcon>
              <ListItemText primary="Блог (в разработке)" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch onChange={(e) => setMode(mode === 'light' ? 'dark' : 'light')} />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
