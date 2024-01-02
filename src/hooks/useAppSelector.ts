import { TypedUseSelectorHook, useSelector } from 'react-redux';

import IRootState from '@/types/IRootState';

const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;

export default useAppSelector;
