import dayjs from "dayjs";

import Card from "../Card";

var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)
require('dayjs/locale/es')

export default function DocGridItem({ doc, url }) {
  const title = doc.title.replace(/(<([^>]+)>)/gi, "");
  const date = doc.updatedAt.toDate ? doc.updatedAt.toDate() : dayjs(doc.updatedAt).toDate();
  const updatedAt = dayjs().locale('es').to(dayjs(date));
  return (
    <Card to={`/${url}/${doc.id}`}>
      <h4>{ title }</h4>
      <pre>{ updatedAt }</pre>
    </Card>
  );
}
