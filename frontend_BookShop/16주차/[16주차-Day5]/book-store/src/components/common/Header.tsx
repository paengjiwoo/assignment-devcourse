import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import logo from '../../assets/images/logo.jpg';
import { FaSignInAlt, FaRegUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Category } from '../../models/category.model';
import { fetchCategory } from '../../api/category.api';
import { useCategory } from '../../hooks/useCategory';
import { useAuthStore } from '../../store/authStore';

const Header = () => {
  const { category } = useCategory();
  const { isLoggedIn, storeLogout } = useAuthStore();

  return(
    <HeaderStyle >
      <div className='logo'>
        <Link to="/">
          <img src={logo} alt="book store" width={100} />
        </Link>
      </div>

      <nav className="category">
        <ul>
          {
            category.map((item) => (
              <li key={item.id}>
                <Link to={item.id === null ? `/books` : `/books?category_id=${item.id}`}>
                  {item.name}
                </Link>
              </li>
            ))
          }
        </ul>
      </nav>

      <nav className="auth">
        {
          isLoggedIn && (
            <ul>
              <li><Link to="/cart">장바구니</Link></li>
              <li><Link to="/orderList">주문 내역</Link></li>
              <li><button onClick={storeLogout}>로그아웃</button></li>
            </ul>
          )
        }
        {
          !isLoggedIn && (
            <ul>
              <li>
                <a href="/login">
                  <FaSignInAlt />로그인
                </a>
              </li>
              <li>
                <a href="/login">
                  <FaRegUser  />회원가입
                </a>
              </li>
            </ul>
          )
        }
      </nav>
    </HeaderStyle >
  );
}

const HeaderStyle = styled.header`
  width: 100%;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.layout.width.large};
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.background}

  .logo {
    img {
      width: 100px;
    }
  }

  .category {
    ul {
      display: flex;
      gap: 32px;
      li {
        a {
          font-size: 1.1rem;
          font-weight: 600;
          text-decoration: none;
          color: ${({ theme }) => theme.color.text};

          &:hover {
            color: ${({ theme }) => theme.color.primary};
          }
        }
      }
    }
  }

  .auth {
    ul {
      display: flex;
      gap: 16px;
      li {
        a, button {
          font-size: 1rem;
          font-weight: 600;
          text-decoration: none;
          display: flex,
          align-item: center;
          line-height: 1;
          background: none;
          border: 0;
          cursor: pointer;

          svg {
            margin-right: 6px;
          }
        }
      }
    }
  }
`

export default Header;