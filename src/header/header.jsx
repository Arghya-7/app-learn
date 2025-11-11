import style from './header.module.css'
function Header(){
    return(<>
        <nav className={style.navbar}>
            <ul className={style.navlinks}>
                <li><a href="#">Home</a></li>
                <li><a href="#">Content</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </>)
}

export default Header;