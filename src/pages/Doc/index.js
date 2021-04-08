import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { getDoc } from "../../store/selectors/docs";

import { CKEditor } from '@ckeditor/ckeditor5-react';
import InlineEditor from '@ckeditor/ckeditor5-build-inline';

export default function Doc () {
  const { id } = useParams();
  const doc = useSelector(state => (getDoc(state, id)))

  return (
    <>      
    <CKEditor
      editor={ InlineEditor }
      data={ doc.title }
    ></CKEditor>
      <CKEditor
        editor={ InlineEditor }
        data={ doc.content }
      ></CKEditor>
    </>
  )
}