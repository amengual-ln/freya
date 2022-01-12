import { useEffect} from 'react'
import { useDispatch } from "react-redux";
import { fetchResource } from "../../store/reducers/resources";

export const DataFetcher = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchResource('tasks'))
    dispatch(fetchResource('projects'))
    dispatch(fetchResource('docs'))
    dispatch(fetchResource('links'))
  }, [dispatch]);

  return (
    <>
      {children}
    </>
  )
}
