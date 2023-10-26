import React from 'react';
import { Stack, Box, Typography } from '@mui/material';
import Icon from '../screens/skills/Icons';

export default function LanguageIcons ({languages}) {
  return (
    languages.map((language) => (
      <Stack direction='column' spacing={0.5} justifyContent="center" alignItems="center">
        <Box style={{ boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.5)', width: '50px', borderRadius: '15px' }}>
          <Typography ><Icon icon={language.icon} /></Typography>
        </Box>
        <Typography fontWeight='bold' color='#EDF0F5'>{language.title}</Typography>
      </Stack>
    ))
  )
}
