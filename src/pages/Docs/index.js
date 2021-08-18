import { useSelector } from "react-redux";
import { getDocs } from "../../store/selectors/docs";

import Grid from "../../components/Grid";
import DocGridItem from "../../components/DocGridItem";
import NewResourceButton from "../../components/NewResourceButton";

export default function Docs () {
  const docs = useSelector(state => getDocs(state))

  return (
    <>
      <Grid title="Docs" itemWidth="270px">
        <NewResourceButton collection='docs' />
        {docs.map((doc) => (
          <DocGridItem doc={doc} url="doc" key={doc.id} />
        ))}
      </Grid>
    </>
  )
}
