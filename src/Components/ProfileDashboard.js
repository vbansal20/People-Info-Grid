import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { Grid, Avatar, Typography, Divider } from '@mui/material';
import { CustomStyles } from '../Styles/CustomStyles';
import { getUserData } from '../redux/action';

export const ProfileDashboard = (props) => {

    const classes = CustomStyles();
    const [user, setUser] = useState({});

    useEffect(() => {
        props && props.selectedUser && setUser(props.selectedUser);
    }, [props.selectedUser])

    useEffect(() => {
        props.getUserData();
    }, [props]);

    return (
        <div>
            <Grid container spacing={70} style={{paddingTop: "30px"}}>
                <Grid item>
                    Profile
                </Grid>
                <Grid item display="flex"  columnSpacing={2}>
                    <Grid item><Avatar alt='xyz' src={user && user.profilepicture} /> </Grid>
                    <Grid item>{user.name}</Grid>
                </Grid>
            </Grid>
            <br />
            <Divider /> <br />

            <div>
                <Grid container direction={'column'} spacing={2}>
                    <Grid item style={{ marginLeft: "30px" }}>
                        <Avatar alt='xyz' src={user && user.profilepicture} sx={{ width: "200px", height: "200px" }} />
                    </Grid>
                    <Grid item alignSelf="flex-start" style={{ marginLeft: "30px" }}>
                        <Typography style={{ fontSize: "21px" }}>{user && user.name}</Typography>
                    </Grid>
                    <Grid item alignSelf="flex-start">
                        <Typography style={{ fontSize: "20px" }}>
                            <span style={{ color: "#B8B8B8" }}>Username : </span>
                            <span>{user && user.username}</span>
                        </Typography>
                    </Grid>
                    <Grid item alignSelf="flex-start">
                        <Typography style={{ fontSize: "20px" }}>
                            <span style={{ color: "#B8B8B8" }}>Email : </span>
                            <span>{user && user.email}</span>
                        </Typography>
                    </Grid>
                    <Grid item alignSelf="flex-start">
                        <Typography style={{ fontSize: "20px" }}>
                            <span style={{ color: "#B8B8B8" }}>Phone : </span>
                            <span>{user && user.phone}</span>
                        </Typography>
                    </Grid>
                    <Grid item alignSelf="flex-start">
                        <Typography style={{ fontSize: "20px" }}>
                            <span style={{ color: "#B8B8B8" }}>Website : </span>
                            <span>{user && user.website}</span>
                        </Typography>
                    </Grid>
                    <Divider variant="middle"  />
                    <Grid item alignSelf="flex-start" style={{ marginLeft: "80px" }}>
                        <Typography style={{ fontSize: "21px", color: "#B8B8B8" }}>Company</Typography>
                    </Grid>
                    <Grid item alignSelf="flex-start">
                        <Typography style={{ fontSize: "20px" }}>
                            <span style={{ color: "#B8B8B8" }}>Name : </span>
                            <span>{user.company && user.company.name}</span>
                        </Typography>
                    </Grid>
                    <Grid item alignSelf="flex-start">
                        <Typography style={{ fontSize: "20px" }}>
                            <span style={{ color: "#B8B8B8" }}>CatchPhrase : </span>
                            <span>{user.company && user.company.catchPhrase}</span>
                        </Typography>
                    </Grid>
                    <Grid item alignSelf="flex-start">
                        <Typography style={{ fontSize: "20px" }}>
                            <span style={{ color: "#B8B8B8" }}>Bs: </span>
                            <span>{user.company && user.company.bs}</span>
                        </Typography>
                    </Grid>
                </Grid>
                <Divider orientation="vertical" />
            </div>

        </div>
    )
}

const mapStateToProps = (state) => ({ data: state.data, })

const mapDispatchToProps = { getUserData }

export default connect(mapStateToProps, mapDispatchToProps)(ProfileDashboard)