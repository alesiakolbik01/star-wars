import errorImage from '../assets/404.png';
import '../css/NoPage.css'

function NoPage() {
    return <img className='no-page-image' src = {errorImage}  alt = '404' />;
  }

  export default NoPage;