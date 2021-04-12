export const saveContent = (id, updatedContent) => ({
  type: "@notes/SAVE_CONTENT",
  payload: { 
    id: id,
    title: title,
    content: updatedContent,
  }
})