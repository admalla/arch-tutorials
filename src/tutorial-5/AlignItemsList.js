import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

export default function AlignItemsList({ comment, onDeleteMessage }) {
  return comment.map((item, i) => {
    return (
      <List
        sx={{
          width: '100%',
          maxWidth: 360,
          bgcolor: 'background.paper',
          border: '1px solid darkslategray',
        }}
        key={i}
      >
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt={item.fullName} src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary={item.fullName}
            secondary={<React.Fragment>{item.text}</React.Fragment>}
          />
          <ListItemText
            primary={new Date(item.createAt).toLocaleString('ru', {
              hour: 'numeric',
              minute: 'numeric',
              second: 'numeric',
            })}
            secondary={<button onClick={() => onDeleteMessage(i)}>Del</button>}
          />
        </ListItem>
      </List>
    );
  });
}
