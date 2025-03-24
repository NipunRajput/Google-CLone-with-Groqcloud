import '../styles/Header.css';

export default function Header() {
    return (
        <header className="content-header">
            {/* Right Section with Everything */}
            <div className="right-section">
                <ul className='header'>
                    <li className='list-items'>Gmail</li>
                    <li className='list-items2'>Images</li>
                </ul>
                <img className="imh-header" src="src/assets/labs.png" alt="Labs" />
                <img className="imh-header2" src="src/assets/9dots.png" alt="Menu" />
                <img className="imh-header" src="src/assets/profile.png" alt="Profile Image" />
            </div>
        </header>
    );
}
 