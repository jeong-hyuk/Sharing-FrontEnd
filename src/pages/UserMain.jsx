import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import companyLogo from './images/userIcon.png';
import axios from 'axios';
import { useSelector } from 'react-redux';

/*reset
*{margin:0; padding:0;}
li{list-style:none;}
img{border:0; vertical-align:top;}-*/

/*a link
a{text-decoration:none;}
a:link, a:visited, a:hover, a:active{color:#333;}*/

const Header = styled.div`
  background-color: #fff;
  position: fixed;
  width: 100%;
  height: 120px;
  background-color: #fff;
  .UserHeader {
    width: 80%;
    height: 120px;
    margin: 20px auto 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header_logo {
  }
  .user_info_header {
    display: flex;
    align-items: center;
    background-color: #fff;
    .header_alram {
      /* margin-top: 20px; */
      width: 30px;
      height: 30px;
      color: #888;
    }
    .user_NameEmail {
      margin: 20px;
      p {
        text-align: right;
        margin: 0;
        font-size: 18px;
        :last-child {
          color: #888;
          font-size: 16px;
        }
      }
    }
    .user_info_img {
      /* margin: 20px 0px 0px 10px; */
      margin-left: 10px;
      img {
        width: 50px;
        height: 50px;
      }
    }
  }
`;

const Menu = styled.div`
  position: fixed;
  top: 120px;
  background-color: #fff;
  width: 30vw;
  height: calc(100vh - 120px);
  ul {
    width: 60%;
    position: absolute;
    right: 2vw;
    padding: 0;
    li {
      list-style: none;
      width: 100%;
      height: 7vh;
      line-height: 7vh;
      background-color: rgba(68, 106, 114, 0.2);
      border-radius: 5px;
      margin-bottom: 20px;
      padding: 0;
      a {
        display: inline-block;
        width: 100%;
        height: 100%;
        text-decoration: none;
        text-align: center;
        font-size: 20px;
        transition: all 0.1s;
        :link,
        :visited,
        :active {
          color: #333;
        }
        :hover {
          color: #fff;
          background-color: #446a72;
          border-radius: 5px;
          transition: all 0.1s;
          font-weight: 600;
        }
      }
    }
  }
  .menu_button {
    display: flex;
    width: 100%;
    height: calc(100vh - 120px);
    a {
      width: 50px;
      height: 50px;
      position: absolute;
      .menu_prev_button_icon,
      .menu_next_button_icon {
        width: 40px;
        height: 40px;
        color: #446a72;
        border-radius: 50%;
        box-shadow: 4px 4px 4px rgba(0, 0, 0, 25%);
      }
    }

    .menu_prev_button {
      bottom: 7vh;
      left: 10vw;
    }
    .menu_next_button {
      bottom: 7vh;
      right: 2vw;
    }
  }
`;

const Rent = styled.div`
  position: fixed;
  top: 120px;
  right: 0;
  background-color: #fff;
  width: 70vw;
  height: calc(100vh - 120px);
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    height: 100%;
    padding-left: 4vw;
    li {
      list-style: none;
      width: 26vw;
      height: 35vh;
      background-color: #fff;
      margin-right: 4vw;
      :last-child {
        background-color: rgba(68, 106, 114, 0.2);
        border: none;
        border-radius: 5px;
      }
      a {
        display: inline-block;
        width: 100%;
        height: 100%;
        transition: all 0.1s;
        border: 2px solid #446a72;
        box-sizing: border-box;
        border-radius: 5px;
        :hover {
          box-sizing: border-box;
          border-radius: 5px;
          border: 7px solid #446a72;
          box-shadow: 7px 7px 7px rgba(0, 0, 0, 25%);
          transition: all 0.1s;
        }
        :nth-child(3),
        :nth-child(4) {
          padding-top: 40px;
        }
      }
    }
  }
`;

export default function UserMain() {
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 });
    return isDesktop ? children : null;
  };
  const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
    return isTablet ? children : null;
  };
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return isMobile ? children : null;
  };
  const Default = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 768 });
    return isNotMobile ? children : null;
  };
  // 정혁이가 로그인 시켜줄떄 스토어에 저장해둔 userID 를 세션 으로 이용.
  const userId = useSelector((state) => state.user.userID);

  const [main, setMain] = useState([]);
  const [user, setUser] = useState();

  const showMain = async () => {
    const resShowMain = await axios.get(`http://localhost:4000/main/${userId}`);
    console.log(resShowMain);
    setUser(resShowMain.data.NAME.USER_NAME);
  };
  useEffect(() => {
    showMain();
  }, []);

  return (
    <>
      <Desktop>
        <Header>
          <div className="UserHeader">
            <img src="" alt="로고" className="header_logo" />
            <div className="user_info_header">
              <a href="">
                <FontAwesomeIcon icon={faBell} className="header_alram" />
              </a>
              <div className="user_NameEmail">
                <p>
                  <strong>{user}</strong>&nbsp;님
                </p>
                <p className="">{userId}</p>
              </div>
              <a href="" className="user_info_img">
                <img src={companyLogo} alt="프로필" />
              </a>
            </div>
          </div>
        </Header>
        <Menu>
          <ul>
            <li>
              <a href="">기자재대여</a>
            </li>
            <li>
              <a href="">마이페이지</a>
            </li>
            <li>
              <a href="">공지사항</a>
            </li>
          </ul>
          <div className="menu_button">
            <a href="" className="menu_prev_button">
              <FontAwesomeIcon
                icon={faCircleArrowLeft}
                className="menu_prev_button_icon"
              />
            </a>
            <a href="" className="menu_next_button">
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="menu_next_button_icon"
              />
            </a>
          </div>
        </Menu>
        <Rent>
          <ul>
            <li>
              <a href="./UserRent"></a>
            </li>
            <li>
              <a href=""></a>
            </li>
            <li>
              <a href=""></a>
            </li>
            <li></li>
          </ul>
        </Rent>
      </Desktop>
      <Tablet>Tablet</Tablet>
      <Mobile>Mobile</Mobile>
      <Default></Default>
    </>
  );
}
