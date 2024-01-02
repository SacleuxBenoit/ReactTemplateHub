import '../../Styles/Header/SHjournal.css'
import { Link } from 'react-router-dom'
function CHjournal() {
    return (
        <>
            <header>
                <div className='journalContainer'>
                    <svg className='svgBurgerMenuJournal' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" transform="rotate(0)">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.576"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path d="M20 7L4 7" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"></path>
                            <path d="M20 12L4 12" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"></path>
                            <path d="M20 17L4 17" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"></path>
                        </g>
                    </svg> {/* Link that svg to navBarLeft*/}
                    <Link to="/"><h1>Journal</h1></Link>

                    <div className='headerRight'>
                        <Link to="/">
                            <svg className='svgConnectionJournal' fill="#000000" viewBox="0 0 32 32" id="icon" xmlns="http://www.w3.org/2000/svg">
                                <title>user--online</title>
                                <circle cx="26" cy="16" r="4"></circle>
                                <path d="M22,30H20V25a5,5,0,0,0-5-5H9a5,5,0,0,0-5,5v5H2V25a7,7,0,0,1,7-7h6a7,7,0,0,1,7,7Z" transform="translate(0)"></path>
                                <path d="M12,4A5,5,0,1,1,7,9a5,5,0,0,1,5-5m0-2a7,7,0,1,0,7,7A7,7,0,0,0,12,2Z" transform="translate(0)"></path>
                                <rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" fill="none" width="32" height="32"></rect>
                            </svg>
                            <span className='connectionButton'>Se connecter</span>
                        </Link>
                        <Link to="/"><span className='subscribeButton'>S'abonner</span></Link>
                    </div>
                </div>
            </header>
            <nav className='scrollCategories'>
                <ul>
                    <li>à la une</li>
                    <li>En continu</li>
                    <li>Faits divers</li>
                    <li>Politique</li>
                    <li>Economie</li>
                    <li>Société</li>
                    <li>Sports</li>
                    <li>Culture</li>
                    <li>Etudiant</li>
                </ul>
            </nav>
        </>
    )
}

export default CHjournal