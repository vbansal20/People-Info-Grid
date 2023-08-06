import React, { useState } from 'react'
import { connect } from 'react-redux';
import { Card, CardContent, Typography, CardHeader, Divider, Grid, Avatar } from '@mui/material';
import { CustomStyles } from '../Styles/CustomStyles';
import { getUserData } from '../redux/action';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Home = ({ data, getUserData }) => {

    const classes = CustomStyles();
    const [userList, setUserList] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        getUserData();
    }, [getUserData]);

    useEffect(() => {
        data && data.userData && data.userData.length > 0 && setUserList(data.userData);
    }, [data]);

    const handleNameClick = (user) => {
        setSelectedUser(user);
    }

    return (
        <div>
            <Card className={classes.cardStructure}>
                <CardHeader title="Select an account" className={classes.cardHeaderStyle} />
                <CardContent className={classes.contentSection}>
                    {userList && userList.map((item, index) => (
                        <React.Fragment key={index}>
                            <Grid container style={{ display: 'flex' }}>
                                <Grid item>
                                    <Avatar alt='xyz' src={item.profilepicture} />
                                </Grid>
                                <Grid item>
                                    <Typography variant="body2" align="left" className={classes.nameList}>
                                        <Link
                                            to={`/user/${item.id}`}
                                            onClick={() => handleNameClick(item)}
                                            className={classes.nameStyle}
                                        >
                                            {item.name}
                                        </Link>
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Divider style={{padding: "5px", marginBottom: "5px"}}/>
                        </React.Fragment>
                    ))}
                </CardContent>
            </Card>
        </div>
    )
}

const mapStateToProps = (state) => ({ data: state.data, })
const mapDispatchToProps = { getUserData, }

export default connect(mapStateToProps, mapDispatchToProps)(Home);