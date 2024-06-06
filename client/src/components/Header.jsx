
import Navigation from './Navigation'

function Header() {
    return (
    <header>
        <div className='brand'>
            <a href='/'>
                <img src='/AP-Logo.svg'></img>
            </a>

            <Navigation />
        </div>
    </header>
    )
  }
  
  export default Header