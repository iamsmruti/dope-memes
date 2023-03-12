import { useState, useEffect } from 'react'
import { TextField, Button, Typography, Paper } from "@mui/material";

import { useDispatch, useSelector } from 'react-redux';
import {createPost, updatePost} from '../../actions/posts'

import FileBase from 'react-file-base64'


const style = {
    margin: 1
}

const Form = (id) => {
    const [postData, setPostData] = useState({
        creator: '', caption: '', selectedFile: '', tags: []
    })

    // const post = useSelector((state) => id ? state.posts.find((p) => p._id === id) : null)

    const dispatch = useDispatch()

    // useEffect(() => {
    //     if(post) setPostData(post);
    // }, [post]);

    const clearHandle = (e) => {
        e.preventDefault()
        setPostData({
            creator: '', caption: '', selectedFile: '', tags: []
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        // if(id){
        //     dispatch(updatePost(id, postData))
        // } else {
        //     dispatch(createPost(postData))
        // }

        dispatch(createPost(postData))
    }

    return (
        <Paper sx={{ marginTop: 1, width: '100', padding: 3 }} elevation={3}>
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Typography sx={{marginBottom: 2, textAlign: 'center'}} variant="h5">Post a Meme</Typography>
                <TextField
                    name="creator"
                    sx={{marginBottom: 1}}
                    variant="outlined"
                    label="Creator"
                    fullWidth
                    value={postData.creator}
                    onChange={(e) => {
                        setPostData({ ...postData, creator: e.target.value })
                    }} />

                <TextField
                    name="caption"
                    variant="outlined"
                    sx={{marginBottom: 1}}
                    label="Caption"
                    fullWidth
                    value={postData.caption}
                    onChange={(e) => {
                        setPostData({ ...postData, caption: e.target.value })
                    }} />

                <TextField 
                    name="tags"
                    variant="outlined"
                    sx={{marginBottom: 1}}
                    label="Tags"
                    fullWidth
                    value={postData.tags}
                    onChange={(e) => {
                        setPostData({ ...postData, tags: e.target.value })
                    }} />
                <div style={style}>
                    <FileBase 
                        type="file"
                        multiple={false}
                        onDone={({base64}) => setPostData({...postData, selectedFile: base64})}/> 
                </div>
                <Button onClick={handleSubmit} sx={{marginTop: 1, backgroundColor: 'lightblue'}} variant="container" size="large" type="submit" fullWidth>Submit</Button>
                <Button onClick={clearHandle} sx={{marginTop: 1, backgroundColor: 'red'}} variant="container" size="large" type="reset" fullWidth>Clear</Button>
            </form>
        </Paper>
    );
}

export default Form;