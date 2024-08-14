// import React from "react";
import styled, { keyframes } from "styled-components";
import { useState, useEffect } from "react";
import { defaultTheme } from "../defaultTheme";
// import watch from "../assets/header/watch_icon.svg";
// import phone from "../assets/header/phone_icon.svg";
import logo from "../assets/header/logo.png";
import cart from "../assets/header/cart.svg";
import moto from "../assets/header/moto.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons/faArrowRightFromBracket";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { IconProps } from "./interface";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

// import { useAuth } from "./login-signup-components/AuthContext";
// import { AuthContext } from "./login-signup-components/AuthContext";
import { useAuth } from "./login-signup-components/AuthContext";
// Other imports...
import { useProfileImage } from "../pages/ProfileImageContext.";
import { useCart } from "./cart-components/CartContext";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  // const { isAuthenticated, logout } = useAuth();
  const { updateProfileImage, getProfileImage } = useProfileImage();
  const { isAuthenticated, logout, userData } = useAuth();
  const userId = userData?.id || ""; // Assign an empty string as default value

  const profileImage = isAuthenticated ? getProfileImage(userId) : null;

  const { cartItems } = useCart();

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setShowProfile(false);
    setShowMenu(false);
    localStorage.setItem("showProfile", JSON.stringify(false));
    localStorage.setItem("showMenu", JSON.stringify(false));
  }, [location.pathname]);
  useEffect(() => {
    // Load profile image from local storage when component mounts
    const storedImage = localStorage.getItem("profileImage_${userId}");
    if (storedImage) {
      updateProfileImage(userId, storedImage);
    }
  }, [userId]);

  useEffect(() => {
    console.log("userData:", userData);
    console.log("isAdmin:", userData?.isAdmin);
    console.log("isAuthenticated:", isAuthenticated);
  }, [userData, isAuthenticated]);

  const toggleMenu = () => {
    const newShowMenu = !showMenu;
    setShowMenu(newShowMenu);
    localStorage.setItem("showMenu", JSON.stringify(newShowMenu));
  };

  const toggleProfile = () => {
    const newShowProfile = !showProfile;
    setShowProfile(newShowProfile);
    localStorage.setItem("showProfile", JSON.stringify(newShowProfile));
  };
  const handleLogout = () => {
    logout(); // First logout
    navigate("/Login_SignUp"); // Then navigate to the desired route
  };
  return (
    <div>
      <MainHeader>
        <a href="/">
          <Logo src={logo} alt="logo" />
        </a>

        <NavAndInfo>
          <Ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/about">ABOUT</Link>
            </li>
            <li>
              <Link to="/items">ITEMS</Link>
            </li>
            <li>
              <Link to="/contact">CONTACT</Link>
            </li>
          </Ul>
          <CartPart>
            <CartLink to={"/cart"}>
              <p>{cartItems ? cartItems.length : 0}</p>
              <img src={cart} alt="cart" />
            </CartLink>
            <CartInfos>
              <div>
                <h3>Delivery Order</h3>
                <a href="tel:+880 1630 225 015">+880 1630 225 015</a>
              </div>
              <img src={moto} alt="moto" />
            </CartInfos>
          </CartPart>
          <Icons>
            <BurgerIcon
              icon={faBars}
              size="2x"
              onClick={toggleMenu}
              show={!showMenu}
            />
            {showMenu && (
              <XmarkIcon
                icon={faXmark}
                size="2x"
                onClick={toggleMenu}
                show={showMenu}
              />
            )}
            {showMenu && (
              <ModalDiv>
                <div>
                  <ModalUl>
                    <li>
                      <Link to="/">HOME</Link>
                    </li>
                    <li>
                      <Link to="/about">ABOUT</Link>
                    </li>
                    <li>
                      <Link to="/items">ITEMS</Link>
                    </li>
                    <li>
                      <Link to="/contact">CONTACT</Link>
                    </li>
                  </ModalUl>
                </div>
              </ModalDiv>
            )}
          </Icons>

          {isAuthenticated ? (
            <div>
              <User onClick={toggleProfile}>
                {profileImage ? (
                  <ProfileImage src={profileImage} alt="Profile" />
                ) : (
                  <FontAwesomeIcon icon={faUser} size="2xl" />
                )}
              </User>
              {showProfile && (
                <ProfielModal>
                  <div>
                    <FontAwesomeIcon icon={faUser} size="xl" />
                    <Link to={"/profile"}>Profile</Link>
                  </div>

                  <div>
                    <FontAwesomeIcon icon={faCartShopping} size="xl" />
                    <Link to="/cart">My Cart</Link>
                  </div>
                  {isAuthenticated && userData && userData.isAdmin && (
                    <div>
                      <FontAwesomeIcon
                        icon={faScrewdriverWrench}
                        size="xl"
                        style={{ color: "#cc3333" }}
                      />
                      <Link to="/Admin-Panel">Admin Panel</Link>
                    </div>
                  )}
                  <LogOut onClick={handleLogout}>
                    <FontAwesomeIcon icon={faArrowRightFromBracket} size="xl" />
                    <a href="#">Logout</a>
                  </LogOut>
                </ProfielModal>
              )}
            </div>
          ) : (
            <Login>
              <Link to="Login-SignUp">LOGIN</Link>
            </Login>
          )}
          {/* <Login>
            <Link to="Login-SignUp">LOGIN</Link>
          </Login>
          <User></User> */}
        </NavAndInfo>
      </MainHeader>
    </div>
  );
};
export default Header;

const MainHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 19px 100px 25px 100px;
  box-shadow: 2px 24px 30px -27px rgba(0, 0, 0, 0.45) inset,
    0px 25px 20px -20px rgba(0, 0, 0, 0.45);

  position: relative;
  @media (max-width: 795px) {
    padding: 19px 50px 25px 50px;
  }
`;
const NavAndInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.img`
  @media (max-width: 500px) {
    width: 80px;
  }
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  @media (max-width: 1150px) {
    display: none;
  }
  li {
    list-style-type: none;
  }
  a {
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-decoration: none;
    color: ${defaultTheme.colors.blue};
  }
`;
const CartPart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CartInfos = styled(CartPart)`
  margin-right: 44px;
  a {
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: ${defaultTheme.colors.blue};
    text-decoration: none;
  }
  @media (max-width: 795px) {
    display: none;
  }

  h3 {
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${defaultTheme.colors.blue};
  }
  p {
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: ${defaultTheme.colors.blue};
  }
  img {
    margin-left: 10px;
  }
`;

const CartLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3px 13px;
  background-color: ${defaultTheme.colors.blue};
  cursor: pointer;
  text-decoration: none;
  border-radius: 50%;
  margin-left: 40px;
  margin-right: 22px;
  p {
    font-size: 20px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    color: ${defaultTheme.colors.floralwhite};
  }
  img {
    @media (max-width: 500px) {
      width: 25px;
    }
  }
`;
const Login = styled.div`
  a {
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding: 9px 19px;
    background-color: ${defaultTheme.colors.red};
    color: ${defaultTheme.colors.floralwhite};
    border-radius: 10px;
    box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.25);
    text-decoration: none;
  }
`;
const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  z-index: 1;
`;

const BurgerIcon = styled(FontAwesomeIcon)<IconProps>`
  opacity: 0;
  color: ${defaultTheme.colors.blue};
  @media (max-width: 1150px) {
    opacity: ${(props) => (props.show ? "1" : "0")};
  }
`;

const XmarkIcon = styled(FontAwesomeIcon)<IconProps>`
  position: absolute;
  opacity: 0;
  color: ${defaultTheme.colors.blue};
  @media (max-width: 1150px) {
    opacity: ${(props) => (props.show ? "1" : "0")};
  }
`;

const ModalUl = styled.ul`
  list-style-type: none;
  margin-bottom: 10px;
`;
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ModalDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 100%;
  left: 0%;
  padding: 20px;
  background-color: ${defaultTheme.colors.lightred};
  text-align: center;
  animation: ${fadeIn} 0.5s ease-out; // Apply the animation
  a {
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-decoration: none;
    color: ${defaultTheme.colors.blue};
    margin-bottom: 10px;
  }
`;

const User = styled.div`
  cursor: pointer;
  svg {
    color: ${defaultTheme.colors.red};
  }
`;

const LogOut = styled.div``;
const fadeInProfileModal = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px); // Slide up animation
  }
  to {
    opacity: 1;
    transform: translateY(0); // Slide down animation
  }
`;

const ProfielModal = styled.div`
  width: 300px;
  padding: 10px;
  position: absolute;
  top: 80%;
  right: 5%;
  z-index: 2;
  background-color: ${defaultTheme.colors.floralwhite};
  animation: ${fadeInProfileModal} 0.5s ease forwards; // Apply the animation

  svg {
    color: ${defaultTheme.colors.red};
    margin-right: 15px;
  }
  div {
    padding: 5px 0;
    a {
      text-decoration: none;
      font-size: 25px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      color: ${defaultTheme.colors.blue};
    }
  }
`;

const ProfileImage = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
  @media (max-width: 500px) {
    width: 50px;
    height: 50px;
  }
`;
// const ModalLi = styled.li`
//   font-size: 12px;
//   font-style: normal;
//   font-weight: 300;
//   line-height: normal;
//   color: ${defaultTheme.colors.black};
//   margin-bottom: 8px;

//   a {
//     text-decoration: none;
//     /* color: ${defaultTheme.colors.brown}; */
//     cursor: pointer;
//   }
// `;
