export async function getNotebookLmGroundedAnswerPlaceholder(question: string): Promise<string> {
  // TODO(notebooklm): Add source-grounded retrieval + answer synthesis pipeline.
  // TODO(notebooklm): Include per-source citations in final response payload.
  return Promise.resolve(`NotebookLM placeholder answer for: ${question}`);
}
