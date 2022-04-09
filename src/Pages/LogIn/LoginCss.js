import styled from "styled-components";

// export const ButtonDiv = styled.div`
//   display: flex;
//   width: 50%;
//   justify-content: space-between;
//   .login-with-google-btn {
//     transition: background-color 0.3s, box-shadow 0.3s;

//     padding: 12px 16px 12px 42px;
//     border: none;
//     border-radius: 3px;
//     box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 1px 1px rgba(0, 0, 0, 0.25);

//     color: #757575;
//     font-size: 14px;
//     font-weight: 500;
//     font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
//       Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;

//     background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4=);
//     background-color: white;
//     background-repeat: no-repeat;
//     background-position: 12px 11px;

//     :hover {
//       box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.25);
//     }

//     :active {
//       background-color: #eeeeee;
//     }

//     :focus {
//       outline: none;
//       box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.25),
//         0 0 0 3px #c8dafc;
//     }

//     :disabled {
//       filter: grayscale(100%);
//       background-color: #ebebeb;
//       box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 1px 1px rgba(0, 0, 0, 0.25);
//       cursor: not-allowed;
//     }
//   }
// `;

export const LoginContainer = styled.div`
  display: flex;
  width: 100vw;
  height: calc(100vh - 80px);
  justify-content: center;
  align-items: center;

  input {
    display: block;
    margin: 20px 0;
    width: 60%;
    height: 50px;
    outline: none;
    border-radius: 5px;
    border: none;
    background: rgb(120, 248, 226, 0.7) !important;
    padding: 0 20px;
    @media screen and (max-width: 600px) {
      width: 80%;
    }
    @media screen and (max-width: 350px) {
      width: 80%;
      margin: 13px 0;
    }
  }
  @media screen and (max-width: 350px) {
    height: unset;
    padding-top: 30px;
  }
`;

export const FormDiv = styled.div`
  display: flex;
  padding: 50px 0;
  flex-direction: column;
  align-items: center;
  width: 60%;
  height: 80%;
  border: 1px solid #78f8e2;
  border-radius: 5px;
  box-shadow: 0px 0px 10px #78f8e2;

  h3 {
    align-self: left;
    margin: 15px 0;
    font-size: 30px;
    @media screen and (max-width: 350px) {
      font-size: 25px;
      margin: 10px 0;
    }
  }
  button {
    color: #78f8e2;
    border-radius: 5px;
    font-size: 20px;
    background: #040404;
    border: none;
    padding: 10px 20px;
    margin-bottom: 15px;
    :hover {
      transform: scale(1.1);
      //   opacity: 0.8;
    }
  }
  img {
    width: 100px;

    @media screen and (max-width: 350px) {
      width: 80px;
    }
  }

  @media (max-width: 600px) {
    width: 80%;
  }
  @media (max-width: 350px) {
    padding: 20px 0;
  }
`;
