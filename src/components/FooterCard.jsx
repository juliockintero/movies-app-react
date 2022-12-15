import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import RemoveRedEyeRoundedIcon from '@mui/icons-material/RemoveRedEyeRounded';

const FooterCard = ({ Date, Views, Votes }) => {
    return (
        <div >
            <BottomNavigation
                showLabels
                value={''}
            >
                <BottomNavigationAction label={Votes} icon={<StarIcon sx={{ fill: '#efff34' }} />} className='active:bg-violet-700' />
                <BottomNavigationAction label={Date} icon={<CalendarMonthRoundedIcon />} />
                <BottomNavigationAction label={Views} icon={<RemoveRedEyeRoundedIcon sx={{ fill: '#17d526' }} />} />
            </BottomNavigation>
        </div>
    )
}

export default FooterCard