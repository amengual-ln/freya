import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { getDoc } from "../../store/selectors/docs";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import InlineEditor from "@ckeditor/ckeditor5-build-inline";

import styled from "styled-components";

const EditableSection = styled.div`
  background: #fff;
  box-shadow: 0 2px 2px rgb(0 0 0 / 15%);
  min-height: 200px;
`

export default function Doc() {
  const { id } = useParams();
  const doc = useSelector((state) => getDoc(state, id));
  const dispatch = useDispatch();

  const saveChanges = (editor, payload) => {
    dispatch({ type: '@docs/SAVE_CHANGES', payload:  payload})
  }

  return (
    <>
      <EditableSection>
        <CKEditor
          editor={InlineEditor}
          data={doc.title}
          onBlur={(event, editor) => saveChanges(editor, { id: doc.id, title: editor.getData() }) }
        ></CKEditor>
        <CKEditor
          editor={InlineEditor}
          data={doc.content}
          onBlur={(event, editor) => saveChanges(editor, { id: doc.id, content: editor.getData() }) }
        ></CKEditor>
      </EditableSection>
    </>
  );
}
