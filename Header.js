import React from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import {useStateValue } from "./StateProvider";
import {auth} from "./firebase";


function Header() {

    const [{cart,user}, dispatch] = useStateValue();
    const handleAuthentication= ()=>{
        if(user){
            auth.signOut()
        }

    }

    return (
        // Amazon logo
        <div className="header">
            <Link to="/"> 
            <img className = "header__logo"
            src="https://www.bizmonthly.com/wp-content/uploads/2020/04/Amazon-logo-black-template.png" 
            alt=""
            />
            </Link>
            
            {/* Amazon Search input field */}
            <div className = "header__search">
                <input  type="text" className="header__searchInput"/>
                <SearchIcon 
                className = "header__searchIcon"/>
                
            
            </div>
          {/* Amazon navbar */}
          
            <div className = "header__nav">
                
                <Link to={!user && "/login"}>
              <div onClick={handleAuthentication}className="header__option">
                  <span className="header__optionLineOne"> Hello {!user?'Guest':user.email}</span>
                  <span className="header__optionLineTwo">{user? 'Sign out':'Sign in'}</span>
              </div>
              </Link>

              <div className="header__option">
              <span className="header__optionLineOne">Returns</span>
                  <span className="header__optionLineTwo">& Orders</span>
              </div>

              <div className="header__option">
              <span className="header__optionLineOne">Your</span>
                  <span className="header__optionLineTwo">Prime</span>
              </div>

              <Link to="/checkout">
              <div className = "header__optionBasket">
              <ShoppingBasketIcon />
              <span className ="header__optionLineTwo header__basketCount">{cart?.length}</span>
              </div>
              </Link>
              

          </div>

        </div>
    )
}

export default Header;
