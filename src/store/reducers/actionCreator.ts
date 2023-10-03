import axios from 'axios';
import { AppDispatch } from '../store';
import { IUser } from '../models/IUser';
import { userSlice } from './userSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';

// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//   try {
//     dispatch(userSlice.actions.userFetching());
//     const response = await axios.get<IUser[]>(
//       'https://jsonplaceholder.typicode.com/users',
//     );
//     dispatch(userSlice.actions.userFetchingSuccess(response.data));
//   } catch {
//     dispatch(userSlice.actions.userFetchingFailing('error'));
//   }
// };

export const fetchUsers = createAsyncThunk(
  'user/fetchAll',
  async (_, thunkAPI) => {
    const response = await axios.get<IUser[]>( 'https://jsonplaceholder.typicode.com/users');
    return response.data;
  }
)