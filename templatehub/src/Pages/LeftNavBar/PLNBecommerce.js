import '../../Styles/GridTemplate.css'
import CLNBecommerce from '../../Components/LeftNavBar/CLNBecommerce'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function PLNBecommerce() {
    const [navLeft, setNavLeft] = useState(false)

    return (
        <div className='gridTemplate'>
            <button onClick={() => { setNavLeft(!navLeft) }}>Left Nav Bar</button>
            {navLeft && <CLNBecommerce closeNavLeft={() => { setNavLeft(false) }} />}
        </div>
    )
}

export default PLNBecommerce