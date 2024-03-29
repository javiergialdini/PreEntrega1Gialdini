import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom'

export const Categories = () => {

return (
    <div>
        <Tab value="Anillos" label="Anillos" component={Link} to="/productos/Anillos"/>
        <Tab value="Aros" label="Aros" component={Link} to="/productos/Aros"/>
        <Tab value="Collares" label="Collares" component={Link} to="/productos/Collares"/>
        <Tab value="Todos" label="Todos" component={Link} to="/"/>
    </div>
);
}