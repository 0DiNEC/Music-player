import React from 'react';
import { useSelector } from 'react-redux';
import { useAppSelector } from './store/hooks/redux';
import { userSlice } from './store/reducers/userSlice';
import { useDispatch } from 'react-redux';

function App() {
  const { count } = useAppSelector((state) => state.userReducer);
  const { increment } = userSlice.actions;
  const dispatch = useDispatch();
  console.log(increment);
  return (
    <div>
      <h1>{count}</h1>
      {/* <button onClick={() => dispatch(increment())}>+</button> */}
    </div>
  );
}

export default App;

