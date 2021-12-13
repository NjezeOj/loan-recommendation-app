import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { ChevronLeft, Menu, TableChart } from "@material-ui/icons";
import {
    Routes,
    Route,
    Link
} from "react-router-dom";
import "./listItems.css";
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { People} from "@material-ui/icons";
import { useNavigate } from 'react-router';
import UserList from './UserList';
import User from "./User";
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';

import Container from '@mui/material/Container';
/* import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper'; */

import NewUser from '../pages/NewUser';
import { Login } from '../pages/Login';
import MonoConnect from '../pages/MonoConnect';
import LoanPrediction from "../pages/LoanPrediction";
import SignIn from '../pages/SignUp';
/* import Chart from './Chart';
import Deposits from './Deposits';
import Orders from './Orders'; */

/* function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            
            Team Elevate
            
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
} */

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
);

const mdTheme = createTheme();

function DashboardContent() {
    let navigate = useNavigate()
    const [open, setOpen] = React.useState(true);
    const [headerValue, setHeaderValue] = React.useState("Users List");
    const toggleDrawer = () => {
        setOpen(!open);
    };
    const onChangeDashboard = () => setHeaderValue("Users List")
    const onChangeNewUser = () => setHeaderValue("New User")
    const onChangeMonoConnect = () => setHeaderValue("Mono Connect")
    const onChangePrediction = () => setHeaderValue("Loan Prediction")

    const handleLogout = () => {
        localStorage.removeItem('token')                
        navigate("/")
        window.location.reload()
    }

    if (!localStorage.getItem('token')) {
        navigate("/")
    }
    return (
        
            <ThemeProvider theme={mdTheme}>
                <Box sx={{ display: 'flex' }}>
                    <CssBaseline />
                    <AppBar position="absolute" open={open}>
                        <Toolbar
                            sx={{
                                pr: '24px', // keep right padding when drawer closed
                            }}
                        >
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="open drawer"
                                onClick={toggleDrawer}
                                sx={{
                                    marginRight: '36px',
                                    ...(open && { display: 'none' }),
                                }}
                            >
                                <Menu />
                            </IconButton>
                            <Typography
                                component="h1"
                                variant="h6"
                                color="inherit"
                                noWrap
                                sx={{ flexGrow: 1 }}
                            >
                                {headerValue}
                            </Typography>
                            <IconButton onClick={handleLogout} color="inherit">
    
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                    <Drawer variant="permanent" open={open}>
                        <Toolbar
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'flex-end',
                                px: [1],
                            }}
                        >
                            <IconButton onClick={toggleDrawer}>
                                <ChevronLeft />
                            </IconButton>
                        </Toolbar>
                        <Divider />
                        <List>
                            <Link to="/" className="link">
                                <ListItem onClick={onChangeDashboard} button>
                                    <ListItemIcon>
                                        <TableChart />
                                    </ListItemIcon>
                                    <ListItemText primary="Users List" />
                                </ListItem>
                            </Link>
                            <Link to="/loanprediction" className="link">
                            <ListItem onClick={onChangePrediction} button>
                                    <ListItemIcon>
                                        <TableChart />
                                    </ListItemIcon>
                                    <ListItemText primary="Loan Prediction" />
                                </ListItem>
                            </Link>

                            <Link to="/newuser" className="link">
                                <ListItem onClick={onChangeNewUser} button>
                                    <ListItemIcon>
                                        <People />
                                    </ListItemIcon>
                                    <ListItemText primary="Add New Customers" />
                                </ListItem>
                            </Link>

                            <Link to="/monoconnect" className="link">
                                <ListItem onClick={onChangeMonoConnect} button>
                                    <ListItemIcon>
                                        <People />
                                    </ListItemIcon>
                                    <ListItemText primary="Mono Connect" />
                                </ListItem>
                            </Link>
                        </List>

                    </Drawer>
                    <Box
                        component="main"
                        sx={{
                            backgroundColor: (theme) =>
                                theme.palette.mode === 'light'
                                    ? theme.palette.grey[100]
                                    : theme.palette.grey[900],
                            flexGrow: 1,
                            height: '100vh',
                            overflow: 'auto',
                        }}
                    >
                        <Toolbar />

                        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                            {/* Routable Components */}

                            {/* <NewUser/> */}
                            {/* <User/> */}

                            <Routes>
                                {/* <Route path="/" element={<Login/>} />
                                <Route path="/signup" element={<SignIn />} />
                                <Route path="/userslist" element={<UserList />}/> */}
                                <Route path="/" element={<UserList />}/>
                                <Route path="/loanprediction" element={<LoanPrediction />}/>
                                <Route path="/newuser" element={<NewUser />} />
                                <Route path="/user/:_id" element={<User/>} />
                                <Route path="/monoconnect" element={<MonoConnect/>}/>
                                
                            </Routes>

                            {/* <Copyright sx={{ pt: 4 }} /> */}
                        </Container>
                    </Box>
                </Box>
            </ThemeProvider>
        
    );
}

export default function Home() {
    return <DashboardContent />;
}