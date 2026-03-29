import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import './XPProgress.css'; // Assuming you have a CSS file for styling

const XPProgress: React.FC = () => {
    const xp = useSelector((state: RootState) => state.gamification.xp);
    const level = Math.floor(xp / 100); // Example: 100 XP per level
    const progress = xp % 100; // XP progress within the current level

    return (
        <div className="xp-progress-container">
            <h2>Experience Points (XP)</h2>
            <div className="xp-progress-bar">
                <div
                    className="xp-progress-fill"
                    style={{ width: `${progress}%` }}
                />
            </div>
            <p>Level: {level}</p>
            <p>XP: {xp} / {level * 100 + 100}</p>
        </div>
    );
};

export default XPProgress;