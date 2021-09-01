export const Grid = ({ children }) => {
  return (
    <div className="grid justify-center my-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      { children }
    </div>
  )
}