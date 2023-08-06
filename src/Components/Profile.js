import * as React from 'react';
import { Toolbar, List, ListItem, ListItemText, Box, Drawer, CssBaseline, Typography, Divider, ListItemButton } from '@mui/material';
import { CustomStyles } from '../Styles/CustomStyles';
import { getUserData } from '../redux/action';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import ProfileDashboard from './ProfileDashboard';
import { Link } from 'react-router-dom';

export const Profile = (props) => {

    const classes = CustomStyles();
    //extract the selected userID from URL and update user information
    const { id } = useParams();
    const selectedUser = props && props.data && props.data.userData && props.data.userData.find(user => user.id == id);

    useEffect(() => {
        if (!selectedUser) {
            props.getUserData();
        }
    }, [selectedUser, props]);

    return (

        <Box sx={{ display: 'flex'}}>
            <CssBaseline />
            <Drawer
                variant="permanent"
                className={classes.drawerStyles}
            >
                <Toolbar />
                <Box>
                    <List>
                        <ListItem>
                            <ListItemButton component={Link} to={`/user/${id}`}>
                                <ListItemText primary="Profile" className={classes.menuTextStyles} />
                            </ListItemButton>
                        </ListItem>
                        <Divider className={classes.menuDivider} />
                        <ListItem>
                            <ListItemButton component={Link} to="/posts">
                                <ListItemText primary="Posts" className={classes.menuTextStyles} />
                            </ListItemButton>
                        </ListItem>
                        <Divider className={classes.menuDivider} />
                        <ListItem>
                            <ListItemButton component={Link} to="/gallery">
                                <ListItemText primary="Gallery" className={classes.menuTextStyles} />
                            </ListItemButton>
                        </ListItem>
                        <Divider className={classes.menuDivider} />
                        <ListItem>
                            <ListItemButton component={Link} to="/todo">
                                <ListItemText primary="ToDo" className={classes.menuTextStyles} />
                            </ListItemButton>
                        </ListItem>
                        <Divider className={classes.menuDivider} />
                    </List>
                </Box>
            </Drawer>


            <div>
                {/* {selectedUser && (
                    <Typography variant="h5">{selectedUser.website}</Typography>
                )} */}
                <ProfileDashboard selectedUser={selectedUser} />
            </div>

        </Box>


    );
}

const mapStateToProps = (state) => ({ data: state.data, })
const mapDispatchToProps = { getUserData, }

export default connect(mapStateToProps, mapDispatchToProps)(Profile);