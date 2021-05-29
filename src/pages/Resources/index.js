import { useSelector } from "react-redux";
import { getResources } from "../../store/selectors/resources";

import Grid from "../../components/Grid";
import Card from "../../components/Card";

export default function Resources() {
  const resources = useSelector((state) => getResources(state));

  return (
    <>
      <Grid title="Resources" itemWidth="270px">
        {resources.map((resource) => (
          <Card href={resource.url} key={resource.url}>
            <h4>{resource.title}</h4>
          </Card>
        ))}
      </Grid>
    </>
  );
}
