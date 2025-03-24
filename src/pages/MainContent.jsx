import "../styles/MainContent.css";
import Result from './result.jsx'
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import fetchGrokResponse from '../api/grokApi.js'

function MainContent() {
    const navigate = useNavigate();
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(false);
    const handleSearch = async () => {
        if (!query.trim()) return alert("Please enter a search query!");
        setLoading(true);

        try {
            const grokResponse = await fetchGrokResponse(query);
            navigate("/result", { state: { query, grokResponse } });
        } catch (error) {
            alert(error.message);
        }

        setLoading(false);
    };    
    return (
        <main className="Main">
            <img className="google-img" src="src/assets/google.png" alt="google" />
            <input type="text" name="Inputbox" id="ipt-box" placeholder="Search" value={query} onChange={(e) => setQuery(e.target.value)}
            />
            <div className="Bottom-content">
                <div className="btn-container">
                    <button 
                        className="ipt-button" 
                        onClick={handleSearch} disabled={loading}>
                        {loading ? "Loading..." : "Search with Grok"}
                    </button>
                    <button className="ipt-button">I'm Feeling Lucky</button>
                </div>
                <p className="update-p">Stay up to date on all the latest cricket updates and scores</p>
                <ul className="lang-ul">
                    <li className="lang-head">Google offered in:</li>
                    <li className="lang-p">हिन्दी</li>
                    <li className="lang-p">বাংলা</li>
                    <li className="lang-p">తెలుగు</li>
                    <li className="lang-p">मराठी</li>
                    <li className="lang-p">தமிழ்</li>
                    <li className="lang-p">ગુજરાતી</li>
                    <li className="lang-p">ಕನ್ನಡ</li>
                    <li className="lang-p">മലയാളം</li>
                    <li className="lang-p">ਪੰਜਾਬੀ</li>
                </ul>
            </div>
        </main>
    );
}
export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainContent />} />
                <Route path="/result" element={<Result />} />
            </Routes>
        </Router>
    );
}
