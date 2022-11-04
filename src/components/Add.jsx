import * as React from 'react';
import Tooltip from '@mui/material/Tooltip';
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  styled,
  TextField,
  Typography,
} from '@mui/material';
import {
  Add as AddIcon,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from '@mui/icons-material';
import { useState } from 'react';
import { Stack } from '@mui/system';

const SytledModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const Userbox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginBottom: '20px',
});

const Add = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Tooltip
        title="Add"
        size="small"
        sx={{ position: 'fixed', bottom: 20, left: { xs: 'calc(50% - 25px)', md: 30 } }}>
        <Fab onClick={handleOpen} color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <SytledModal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box
          width={400}
          height={400}
          bgcolor={'background.default'}
          color={'text.primary'}
          p={2}
          borderRadius={4}>
          <Typography variant="h6" color="gray" textAlign="center">
            Create post
          </Typography>
          <Userbox>
            <Avatar
              sx={{ width: 40, height: 40 }}
              src="https://avatarzo.ru/wp-content/uploads/z-za-pobedu-red2.jpg"
            />
            <Typography fontWeight={500} variant="span">
              Джим Бим
            </Typography>
          </Userbox>
          <TextField
            sx={{ width: '100%' }}
            id="standard-multiline-flexible"
            multiline
            maxRows={3}
            placeholder="Что ты думаешь?"
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
            <Button>Создать</Button>
            <Button sx={{ width: '30%' }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </SytledModal>
    </>
  );
};

export default Add;
