import  React from 'react';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import {Link, useLocation} from 'react-router-dom';

const Header =({allCategories})=> {
    const location= useLocation();
    return (
        <>
        <Toolbar sx={{borderBottom: 1,borderColor: 'divider'}}>
            <Typography
             component="h2"
             variant="h5"
             color="inherit"
             align="center"
             sx={{flex: 1}}>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtuNj9VStIbZv3EoVSzgWW-Cj5CUBTGqnl8w&usqp=CAU' alt="logo" width="300" height="100" />
             </Typography>
        </Toolbar>
        <Toolbar component="nav" variant="dense"
              sx={{ justifyContent: 'space-between', overflowX: 'auto'}}>
                 {allCategories?.map((category) =>(
                    <Link 
                    key={category?.url}
                    to={category?.url}
                    className={location.pathname.startsWith(category?.url) ? "activeNavLink" : ""}
                    >
                        {category?.title}
                    </Link>
                 ))
                 }
              </Toolbar>
        </>
    );
};


export default Header;