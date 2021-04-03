import styled from "styled-components";

const Item = styled.tr`
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  td {
    padding: 10px;
  }
`;

export default function ListItem({ item, show }) {
  let propsToShow = Object.values(item);
  if (show) {
    propsToShow = Object.keys(item)
      .filter((key) => show.includes(key))
      .reduce((obj, key) => {
        obj[key] = item[key];
        return obj;
      }, {});
  }

  const propValues = Object.values(propsToShow).map((prop) => prop);

  return (
    <Item>
      {propValues.map((prop, index) => (
        <td key={`${index}${prop}`}>{prop}</td>
      ))}
    </Item>
  );
}
