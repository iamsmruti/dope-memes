import Post from './Post/Post'
import { useSelector } from 'react-redux';

import {Grid, CircularProgress} from '@mui/material'

const Posts = ({setId}) => {
    const posts = useSelector((state) => state.posts)
    return (
        !(posts.length) ? <CircularProgress /> : (
            <Grid container alignItems="stretch" spacing={3}>
                {posts.map((post) =>
                    <Grid key={post._id} item sm={6} sx={12}>
                        <Post post={post} setId={setId}/>
                    </Grid>
                )}
            </Grid>
        )
    );
}
 
export default Posts;