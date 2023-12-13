import * as React from 'react';
import { Pagination } from '@mui/material';
import {Stack} from '@mui/material';

export default function PaginationRounded() {
  return (
    <Stack spacing={2}>
      <Pagination count={10} shape="rounded" />
      <Pagination count={10} variant="outlined" shape="rounded" />
    </Stack>
  );
}
