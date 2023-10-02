import React from 'react';
import type { FC } from 'react';
import { useTypedSelector } from '../store/hooks/useTypesSelector';

const UserList: FC = () => {
  const state = useTypedSelector(state => state)
  console.log(state.user);
  return <div>UserList</div>;
};

export default UserList;
