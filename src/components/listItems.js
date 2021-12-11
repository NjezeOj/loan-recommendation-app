import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Dashboard, People} from "@material-ui/icons";
/* import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment'; */

export const mainListItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <Dashboard />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <People />
            </ListItemIcon>
            <ListItemText primary="Add New Customers" />
        </ListItem>
    </div>
);

