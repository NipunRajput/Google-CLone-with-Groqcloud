import '../styles/footer.css';

export default function Footer() {
    return (
        <footer className='footer'>
            <ul className="list-items">
                <li className="location">India</li>
            </ul>
            <hr className='line' />
            <ul className="list-items">
                <div>
                    <li className="left-footer">About</li>
                    <li className="left-footer">Advertising</li>
                    <li className="left-footer">Business</li>
                    <li className="left-footer">How Search Works</li>
                </div>
                <div>
                    <li className="right-footer">Privacy</li>
                    <li className="right-footer">Terms</li>
                    <li className="right-footer">Settings</li>
                </div>
            </ul>
        </footer>
    );
}
