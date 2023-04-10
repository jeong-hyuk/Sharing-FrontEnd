import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import companyLogo from '../pages/images/userIcon.png';

const CommonHeader = styled.div`
  position: fixed;
  width: 100%;
  height: 11vh;
  background-color: rgba(68, 106, 114, 0.9);
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
  z-index: 1;
  .UserHeader {
    width: 70%;
    height: 11vh;
    margin: 0px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header_logo {
  }
  .user_info_header {
    display: flex;
    align-items: center;
    .header_alram {
      height: 3vh;
      color: #fff;
    }
    .user_NameEmail {
      margin: 0px 20px;
      .user_logout_name {
        text-align: left;
        margin: 0;
        font-size: 1.5rem;
        color: #fff;
      }
      span {
        strong {
          font-size: 1.5rem;
        }
        :last-child {
          font-size: 0.5rem;
          color: #333;
          margin-left: 10px;
        }
        :first-child {
          font-size: 1.4rem;
          color: #f5f5f5;
        }
      }
      p {
        text-align: left;
        margin: 0;
        font-size: 1.4rem;
        color: #fff;
      }
    }
    .user_info_img {
      color: #fff;
      img {
        height: 5vh;
      }
    }
  }
`;

export default function Header() {
  return (
    <>
      <CommonHeader>
        <div className="UserHeader">
          <img src="" alt="로고" className="header_logo" />
          <div className="user_info_header">
            <a href="">
              <FontAwesomeIcon icon={faBell} className="header_alram" />
            </a>
            <div className="user_NameEmail">
              <div className="user_logout_name">
                <span>
                  <strong>찡꼴라</strong>&nbsp;님
                </span>
                <span>
                  <a href="">로그아웃</a>
                </span>
              </div>
              <p className="">ggolla@gmail.com</p>
            </div>
            <a href="" className="user_info_img">
              <img src={companyLogo} alt="프로필" />
            </a>
          </div>
        </div>
      </CommonHeader>
    </>
  );
}
