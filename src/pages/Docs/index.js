import { useSelector } from "react-redux";
import { getDocs } from "../../store/selectors/docs";

import { Grid } from "../../components/Grid";
import DocGridItem from "../../components/DocGridItem";
import NewResourceButton from "../../components/NewResourceButton";

export default function Docs () {
  const docs = useSelector(state => getDocs(state))

  return (
    <section>
      <h2>Docs</h2>
      <Grid>
        <NewResourceButton collection='docs' />
        {docs.map((doc) => (
          <DocGridItem doc={doc} url="doc" key={doc.id} />
        ))}
      </Grid>
    </section>
  )
}
