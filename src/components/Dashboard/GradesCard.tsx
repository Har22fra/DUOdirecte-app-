import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const GradesCard: React.FC = () => {
    const grades = useSelector((state: RootState) => state.user.grades);

    return (
        <Card>
            <CardContent>
                <Typography variant="h5" component="div">
                    Your Grades
                </Typography>
                {grades.length > 0 ? (
                    grades.map((grade, index) => (
                        <Typography key={index} variant="body2">
                            {grade.subject}: {grade.score}
                        </Typography>
                    ))
                ) : (
                    <Typography variant="body2">
                        No grades available.
                    </Typography>
                )}
            </CardContent>
        </Card>
    );
};

export default GradesCard;