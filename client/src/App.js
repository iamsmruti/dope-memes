import React from "react";
import dopeMemer from './images/dopeMemer.png'
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material'

import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import Form from './comps/Form/Form'
import Posts from './comps/Posts/Posts'

import useStyles from './styles'

import { getPosts } from './actions/posts'

const App = () => {
    const [id, setId] = useState(null)
    const styles = useStyles()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch]);

    return (
        <Container maxWidth='lg'>
            <AppBar className={styles.appBar} position="static" color='inherit'>
                <div className={styles.div}>
                    <img className={styles.image} src={dopeMemer} alt="dope memer" height='60' />
                    <Typography className={styles.heading} variant='h4' align='center'>Dope Memes</Typography>
                </div>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid  container className={styles.gridContainer} justifyContent="space-between" alignItems="stretch" spacing={3} sx={{flexWrap: 'wrap-reverse'}}>
                        <Grid item xs={12} sm={7}>
                            <Posts setId={setId}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form id={id}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}
 
export default App;