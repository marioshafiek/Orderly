import { useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '@store/store'

//instead of plain `useDispatch` and `useSelector` --> type-safe
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()