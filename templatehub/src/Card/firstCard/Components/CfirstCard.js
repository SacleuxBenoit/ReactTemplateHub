import '../Styles/SfirstCard.css'
import { Link } from 'react-router-dom'

function CfirstCard() {
    return (
        <div className="containerCard">
            <div className='card'>
                <h2>Make your <span className='greenColor'>choice</span> right now !</h2>
                <p className='descriptionCard'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quisquam doloremque nostrum laboriosam, blanditiis</p>
                <p className='orderNow'><Link to="/">Order Now !</Link></p>
            </div>
        </div>
    )
}

export default CfirstCard