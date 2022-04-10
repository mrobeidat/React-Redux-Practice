import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import { counterAction } from "../store/counterSlice";
import { login, logout } from "../store/authSlice";

function Counter() {
  const globalstate = useSelector((state) => state);
  const dispatch = useDispatch();
  const { increase, decrease } = counterAction;
  const isLoggedIn = () => {
    return globalstate.auth.isLoggedIn;
  };

  const loginHandler = (status) => {
    if (status) {
      dispatch(logout(50));
    } else {
      dispatch(login());
    }
  };

  const counterHandler = useCallback(
    (type, value) => {
      if (type === "increase") {
        dispatch(increase(value));
      } else {
        dispatch(decrease(value));
      }
    },
    [increase, decrease, dispatch]
  );

  useEffect(() => {
    counterHandler("increase", 90);
  }, [counterHandler]);

  return (
    <div className="App">
      <h1>Redux Counter</h1>
      {isLoggedIn() && (
        <>
          <div className="counter">Counter: {globalstate.counter.value}</div>
          <div className="buttons">
            <Button
              variant="contained"
              size="large"
              className="btn"
              onClick={() => counterHandler("increase", 5)}
            >
              increase +
            </Button>
            <Button
              variant="contained"
              size="large"
              className="btn"
              onClick={() => counterHandler("decrease", 6)}
            >
              decrease -
            </Button>
          </div>
        </>
      )}

      <div>
        <Button
          variant="outlined"
          className="btn-hide"
          onClick={() => loginHandler(isLoggedIn())}
        >
          {isLoggedIn() ? "logout" : "login"}
        </Button>
      </div>
    </div>
  );
}
export default Counter;
