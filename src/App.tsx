import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './store/hooks/redux';
import { fetchUsers } from './store/reducers/actionCreator';
import PostContainer from './components/PostContainer';

function App() {
  // const dispatch = useAppDispatch();
  // const { users, isLoading, error } = useAppSelector(
  //   (state) => state.userReducer,
  // );
  // useEffect(() => {
  //   dispatch(fetchUsers());
  // }, []);
  return (
    <div>
      <PostContainer />
    </div>
  );
}

export default App;

