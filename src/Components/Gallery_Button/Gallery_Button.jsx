import './Gallery_Button.css';
import {Link} from 'react-router-dom';

const Gallery_Button = () => {
    return (
        <div className='reg-nav-button'>
            <Link to="/gallery">
            <button
              title="2024 Results"
              onClick={() => { }}
            >GALLERY
            </button>
            </Link>
        </div>
    )
}

export default Gallery_Button;