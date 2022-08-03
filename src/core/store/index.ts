import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

import { apiReducer, ApiState } from './api';

export interface RootState {
    api: ApiState;
}

const reducers = combineReducers<RootState>({
    api: apiReducer,
});

export const store = configureStore({
    reducer: reducers,
    devTools: process.env.NODE_ENV !== 'production',
});

export const useStoreApi = () => useSelector<RootState, ApiState>((state) => state.api);
