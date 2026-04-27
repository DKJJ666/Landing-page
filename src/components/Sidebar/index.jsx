import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

function Sidebar() {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="d-flex" style={{ minHeight: '100vh' }}>
            {/* Sidebar */}
            <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
                <div className="sidebar-header">
                    <button
                        className="btn-toggle"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        ☰
                    </button>
                    {isOpen && <span className="brand">Menu</span>}
                </div>

                <nav className="sidebar-nav">
                    <a href="#home" className="nav-link">
                        <span className="icon">🏠</span>
                        {isOpen && <span>Home</span>}
                    </a>
                    <a href="#features" className="nav-link">
                        <span className="icon">⭐</span>
                        {isOpen && <span>Features</span>}
                    </a>
                    <a href="#tour" className="nav-link">
                        <span className="icon">🎬</span>
                        {isOpen && <span>Tour</span>}
                    </a>
                    <a href="#contact" className="nav-link">
                        <span className="icon">📧</span>
                        {isOpen && <span>Contato</span>}
                    </a>
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-grow-1">
                {/* Seu conteúdo aqui */}
            </div>
        </div>
    );
}

export default Sidebar;

