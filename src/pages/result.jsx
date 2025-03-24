import '../styles/result.css'
import { useLocation } from "react-router-dom";
export default function Result(){
    const location = useLocation();
    const query = location.state?.query || "";
    const grokResponse = location.state?.grokResponse || "No response from Grok.";
    return(
        <>
        <div className='Result'>
            <textarea id="Resulttext" value={grokResponse} readOnly />
        </div>
        </>
    );
}