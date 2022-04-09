import styled from "styled-components";

export const NavWrapper = styled.nav`
  display: flex;
  width: 100%;
  height: 80px;
  justify-content: space-between;
  align-items: center;
  padding: 0px 40px;
  box-sizing: border-box;
  background-color: #040404;

  a {
    text-decoration: none;
    color: #78f8e2;
    font-size: 20px;
    padding: 0 10px;
    :hover {
      transform: scale(1.1);
    }
    // button {
    //   border: none;
    //   outline: none;
    //   text-decoration: none;
    //   color: #78f8e2;
    //   font-size: 20px;
    //   padding: 0 10px;
    //   :hover {
    //     transform: scale(1.1);
    //   }
    // }
    @media screen and (max-width: 350px) {
      font-size: unset;
    }
  }

  @media (max-width: 600px) {
    padding: 0px 20px;
  }
`;

export const Button = styled.button`
  background: none;
  border: none;
  outline: none;
  text-decoration: none;
  color: #78f8e2;
  font-size: 20px;
  padding: 0 10px;
  :hover {
    transform: scale(1.1);
  }
`;

export const NavLink = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: #fff;
  @media screen and (max-width: 350px) {
    font-weight: unset;
    font-size: 25px;
  }
`;
