import React from 'react';
import { Box } from '@mui/system';
import { Note, People, Description, InsertComment, History } from '@mui/icons-material';

const Sidebar = () => {
    return (
        <Box
            sx={{
                width: '60px',
                backgroundColor: '#f1f3f4',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: 2,
            }}
        >
            <Box
                sx={{
                    margin: 4,
                    cursor: 'pointer',
                    '&:hover': {
                        backgroundColor: '#e0e0e0',
                    },
                }}
            >
                <Note />
            </Box>
            <Box
                sx={{
                    margin: 4,
                    cursor: 'pointer',
                    '&:hover': {
                        backgroundColor: '#e0e0e0',
                    },
                }}
            >
                <People />
            </Box>
            <Box
                sx={{
                    margin: 4,
                    cursor: 'pointer',
                    '&:hover': {
                        backgroundColor: '#e0e0e0',
                    },
                }}
            >
                <Description />
            </Box>
            <Box
                sx={{
                    margin: 4,
                    cursor: 'pointer',
                    '&:hover': {
                        backgroundColor: '#e0e0e0',
                    },
                }}
            >
                <InsertComment />
            </Box>
            <Box
                sx={{
                    margin: 4,
                    cursor: 'pointer',
                    '&:hover': {
                        backgroundColor: '#e0e0e0',
                    },
                }}
            >
                <History />
            </Box>
        </Box>
    );
};

export default Sidebar;
