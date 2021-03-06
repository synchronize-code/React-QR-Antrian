import React from 'react'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

function NotFound(){
    return(
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh', backgroundColor:'#757575' }}
        >
            <Grid item md={9}>
                <Card style={{color:'#fff',backgroundColor:'#9e9e9e'}}>
                    <CardContent>
                        <Typography style={{fontWeight:'bold'}} gutterBottom variant="h4" align="center"component="h1">
                            404
                        </Typography>
                        <Typography gutterBottom variant="h5" align="center"component="h2">
                            Not Found
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

export default NotFound