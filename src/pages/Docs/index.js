import { useSelector } from "react-redux";
import { getDocs } from "../../store/selectors/docs";

import Grid from "../../components/Grid";
import DocGridItem from "../../components/DocGridItem";
import NewDocButton from "../../components/NewDocButton";

export default function Docs () {
  const docs = useSelector(state => getDocs(state))

  return (
    <>
      <Grid title="Docs" columns="4">
        <NewDocButton />
        {docs.map((doc) => (
          <DocGridItem doc={doc} url="doc" key={doc.id} />
        ))}
      </Grid>
    </>
  )
}
