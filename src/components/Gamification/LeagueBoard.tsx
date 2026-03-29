import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import './LeagueBoard.css';

const LeagueBoard: React.FC = () => {
    const leaderboard = useSelector((state: RootState) => state.gamification.leaderboard);

    return (
        <div className="league-board">
            <h2>Leaderboard</h2>
            <ul>
                {leaderboard.map((user, index) => (
                    <li key={user.id} className="leaderboard-item">
                        <span className="rank">{index + 1}</span>
                        <span className="username">{user.username}</span>
                        <span className="xp">{user.xp} XP</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LeagueBoard;