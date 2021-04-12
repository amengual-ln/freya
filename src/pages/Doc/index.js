import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { getDoc } from "../../store/selectors/docs";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import InlineEditor from "@ckeditor/ckeditor5-build-inline";

export default function Doc() {
  const { id } = useParams();
  const doc = useSelector((state) => getDoc(state, id));
  const dispatch = useDispatch();

  const saveContent = (editor, payload) => {
    dispatch({ type: '@docs/SAVE_CONTENT', payload:  payload})
  }

  return (
    <>
      <CKEditor
        editor={InlineEditor}
        data={doc.title}
        onBlur={(event, editor) => saveContent(editor, { id: doc.id, title: editor.getData() }) }
      ></CKEditor>
      <CKEditor
        editor={InlineEditor}
        data={doc.content}
        onBlur={(event, editor) => saveContent(editor, { id: doc.id, content: editor.getData() }) }
      ></CKEditor>
    </>
  );
}
