import { useDispatch } from "react-redux";
import { fetchResource } from "../../store/reducers/resources";

export const DataFetcher = ({ children }) => {
  const dispatch = useDispatch();

  dispatch(fetchResource('tasks'))
  dispatch(fetchResource('briefcases'))
  dispatch(fetchResource('projects'))
  dispatch(fetchResource('docs'))
  dispatch(fetchResource('links'))

  return (
    <>
      {children}
    </>
  )
}
