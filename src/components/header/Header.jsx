import './header.scss';


const Header = () => {
  return (
    <div className="header">
      <div className="headerLeft"><p>Home</p></div>
      <div className="headerRight">
     
      <a href="">Horoscopes</a>
      <a href="">Daily</a>
      <a href="">Tarot</a>
      <a href="">Support</a>
      </div>
    </div>
  )
}

export default Header