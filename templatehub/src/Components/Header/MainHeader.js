import { useState } from 'react'
import { Link } from 'react-router-dom'
import('../../Styles/Header/MainHeader.css')

function MainHeader() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    function toggleBurgerMenu() {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }
    return (
        <>
            <div className='containerMainHeader'>
                <Link to="/"><div>TemplateHub</div></Link>
                <div>
                    <svg onClick={toggleBurgerMenu} className='svgBurgerMenu' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            {isMobileMenuOpen ? (
                                <>
                                    <path d="M3 12h18" stroke="#fff" strokeWidth="1.2" strokeLinecap="round"></path>
                                    <path d="M3 6h18" stroke="#fff" strokeWidth="1.2" strokeLinecap="round"></path>
                                    <path d="M3 18h18" stroke="#fff" strokeWidth="1.2" strokeLinecap="round"></path>
                                </>
                            ) : (
                                <>
                                    <path d="M20 7L4 7" stroke="#fff" strokeWidth="1.7" strokeLinecap="round"></path>
                                    <path d="M20 12L4 12" stroke="#fff" strokeWidth="1.7" strokeLinecap="round"></path>
                                    <path d="M20 17L4 17" stroke="#fff" strokeWidth="1.7" strokeLinecap="round"></path>
                                </>
                            )}
                        </g>
                    </svg>            </div>
                <div className='searchBar'><input type="text" placeholder="search..." /></div>

            </div>
            <nav className={isMobileMenuOpen ? 'mobileMenuOpen' : 'menu'}>
                <ul>
                    <Link to="/"><li>Header</li></Link>
                    <Link to="/"><li>Footer</li></Link>
                    <Link to="/"><li>NavBar</li></Link>
                </ul>
            </nav>
        </>
    )
}

export default MainHeader