import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type Member from '@/types/Member.type';

const initialState: { member: Member | null } = {
  member: null,
};

const memberSlice = createSlice({
  name: 'member',
  initialState,
  reducers: {
    setMemberData(state, action: PayloadAction<Member>) {
      localStorage.setItem('member', JSON.stringify(action.payload));
      state.member = action.payload;
    },
  },
});

export const { setMemberData } = memberSlice.actions;
export default memberSlice.reducer;
