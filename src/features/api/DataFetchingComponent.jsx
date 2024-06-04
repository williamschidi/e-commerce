import { useDispatch } from 'react-redux';
import { useGetDataQuery } from './ApiSlice';
import { useEffect } from 'react';
import { setData } from './dataSlice';

function DataFetchingComponent() {
  const { data } = useGetDataQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(setData(data));
    }
  }, [data, dispatch]);
}

export default DataFetchingComponent;
