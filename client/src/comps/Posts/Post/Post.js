import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import moment from 'moment'

import {deletePost, likePost} from '../../../actions/posts'
import { useDispatch } from 'react-redux';

export default function Post({post, setId}) {
  const dispatch = useDispatch()
  return (
    <Card  sx={{marginTop: 2, maxWidth: 385 }}>
      <CardHeader
        // action={
        //   <IconButton onClick={() => setId = post._id} aria-label="settings">
        //     <EditIcon />
        //   </IconButton>
        // }
        title={post.creator}
        subheader={moment(post.createdAt).fromNow()}
      />
      <CardMedia
        component="img"
        height="194"
        image={post.selectedFile}
        alt="Paella dish"
      />
      <CardContent>
        <Typography sx={{color: 'red', marginBottom: 1}} variant="body2" color="text.primary">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {post.caption}
        </Typography>
      </CardContent>
      <CardActions spacing={'auto'}>
        <IconButton onClick={() => {dispatch(likePost(post._id))}} aria-label="likes">
          <ThumbUpAltIcon />
        </IconButton>
        <Typography marginLeft={1} marginRight={'auto'} variant="body2" color="text.secondary">
            {post.likeCount}
        </Typography>
        {/* <IconButton onClick={() => {dispatch(deletePost(post._id))}} aria-label="likes">
          <DeleteIcon />
        </IconButton> */}
      </CardActions>
    </Card>
  );
}
