import '../../../Main/Styles/GridTemplate.css'
import CfirstNavBar from '../Components/CfirstNavBar'
import { useState } from 'react'

function PfirstNavBar() {
    const [navLeft, setNavLeft] = useState(false)

    return (
        <div className='gridTemplate'>
            <button onClick={() => { setNavLeft(!navLeft) }}>Left Nav Bar</button>
            {navLeft && <CfirstNavBar closeNavLeft={() => { setNavLeft(false) }} />}
        </div>
    )
}

export default PfirstNavBar