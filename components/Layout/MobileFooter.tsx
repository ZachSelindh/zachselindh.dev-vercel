import React, { useMemo } from 'react';
import type { FC } from 'react';
import { useRouter } from 'next/router';
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ArticleIcon from '@mui/icons-material/Article';
import InfoIcon from '@mui/icons-material/Info';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import { pages } from './helpers';

const mobileFooterStyles = {
    stickToBottom: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
    },
};

const IconMapping: FC<{ value: string }> = ({ value }) => {
    switch (value) {
        case 'about':
            return <InfoIcon />;
        case 'resume':
            return <ArticleIcon />;
        case 'portfolio':
            return <CalendarMonthIcon />;
        default:
            return null;
    }
};

const MobileFooter = () => {
    const { push, route } = useRouter();

    const handleChange: any = (e: MouseEvent, newValue: string) => {
        e.preventDefault();
        push(newValue);
    };

    const queryValue = useMemo(() => (typeof route === 'string' ? route.substring(1) : null), [route]);

    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
            <BottomNavigation sx={mobileFooterStyles} showLabels value={queryValue} onChange={handleChange}>
                {pages.map((page, i) => (
                    <BottomNavigationAction
                        key={`${page.value}-${i}`}
                        label={page.name}
                        value={page.value}
                        icon={<IconMapping value={page.value} />}
                    />
                ))}
            </BottomNavigation>
        </Paper>
    );
};

export default MobileFooter;
