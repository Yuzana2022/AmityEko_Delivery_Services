import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PeopleAltSharpIcon from '@mui/icons-material/PeopleAltSharp';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { pink } from '@mui/material/colors';

// style
import styles from '../styles/pages.module.css';

const moreDisplay = (footer: string) => {
  if (footer != '') {
    return (
      <CardActions>
        <Button size="small">{footer}</Button>
      </CardActions>
    )
  } else {
    return <></>;
  }
}

export default function DashboardCard(props: any) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            m: 1,
            bgcolor: 'background.paper',
            borderRadius: 1,
          }}
        >            <div>
            <Typography className={styles.send_typography} gutterBottom variant="subtitle1" noWrap component="div" mr={3}>
              {props.title}
            </Typography>
            <Typography className={styles.send_typography} variant="body2" noWrap color="text.secondary">
              {props.count}
            </Typography>
          </div>
          <div>
            <PeopleAltSharpIcon sx={{ color: pink[500], fontSize: 40 }}></PeopleAltSharpIcon>
          </div>
        </Box>
      </CardContent>
      {moreDisplay(props.footer)}
    </Card>
  );
}
