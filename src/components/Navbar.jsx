import {
  AppBar,
  Toolbar,
  styled,
  Typography,
  Box,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
  alpha,
} from '@mui/material';
import React, { useState } from 'react';
import { FastfoodRounded, Mail, Notifications } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';

const StyledToolbar = styled(Toolbar)({ display: 'flex', justifyContent: 'space-between' });

const Icons = styled(Box)(({ theme }) => ({
  display: 'none',
  alignItems: 'center',
  gap: '20px',
  [theme.breakpoints.up('sm')]: { display: 'flex' },
}));

const Userbox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  [theme.breakpoints.up('sm')]: { display: 'none' },
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 15,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '50%',
    [theme.breakpoints.up('xs')]: {
      width: '10ch',
    },
    [theme.breakpoints.up('sm')]: {
      width: '30ch',
    },
    [theme.breakpoints.up('md')]: {
      width: '60ch',
    },
    [theme.breakpoints.up('md')]: {
      width: '65ch',
    },
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' } }}>
          Nagibin Blog
        </Typography>
        <FastfoodRounded sx={{ display: { xs: 'block', sm: 'none' } }} />
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            sx={{ widht: '100%' }}
            placeholder="Найти..."
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
        <Icons>
          <Badge badgeContent={2} color="success">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="success">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 40, height: 40 }}
            src="https://avatarzo.ru/wp-content/uploads/squid-game-player456-2.jpg"
            onClick={(e) => setOpen(true)}
          />
        </Icons>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}>
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
