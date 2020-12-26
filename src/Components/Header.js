import React from 'react'
import { Link } from 'react-router-dom'
import { useStateValue } from '../Provider'
import './Header.css'

function Header() {
    const [{basket}] = useStateValue()
    return (
        <nav className="header">
            <Link to="/">
                <img style={{cursor: "pointer"}} src="https://oborot.ru/wp-content/uploads/2018/03/amazon-1024x364.png" alt="img-header" className="header__logo" />
            </Link>
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <i className="fas fa-search"></i>
            </div>
            <div className="header__nav">
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Hello Username</span>
                        <span className="header__optionLineTwo">Sign Out</span>
                    </div>
                </Link>

                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span classNAme="header__optionLineTwo">& orders</span>
                    </div>
                </Link>

                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span classNAme="header__optionLineTwo">Prime</span>
                    </div>
                </Link>
            </div>
            
            <Link to='/checkout' className="header__link">
                <div className="header__optionBasket">
                   <i className="fas fa-shopping-basket"></i>
                   <span classsName="header__optionLineTwo header__basketCount" style={{marginLeft: '10px', marginRight: '10px'}}>{basket?.length}</span>
                </div>
            </Link>
        </nav>
    )
}

export default Header
