import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IUser } from '../models/IUser';

interface UserState {
  users: IUser[];
  isLoading: boolean;
  error: string;
  count: number;
}

const initialState: UserState = {
  users: [],
  isLoading: false,
  error: '',
  count: 0,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userFetching(state) {
      state.isLoading = true;
    },
    userFetchingSuccess(state, action:PayloadAction<IUser[]>) {
      state.isLoading = false;
      state.error ='';
      state.users = action.payload;
    },
    userFetchingFailing(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

  },
});

export default userSlice.reducer;
