import React from 'react';
import './index.css';

const NavBar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <a href="/">Kanban Project Management</a>
            </div>
        </nav>
    );
};

export default NavBar;