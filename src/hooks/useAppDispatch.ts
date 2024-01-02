import { useDispatch } from 'react-redux';

import IAppDispatch from '@/types/IAppDispatch';

const useAppDispatch: () => IAppDispatch = useDispatch;

export default useAppDispatch;
