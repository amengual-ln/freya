import Card from "../Card"

export default function GridItem ({ item, url }) {
  return (
    <Card to={`/${url}/${item.id}`} color={item.color}>
      <h4>{item.name}</h4>
    </Card>
  )
}