interface AgentRequest {
  prompt: string;
  mode: string;
  sourceIds?: string[];
}

export async function getVertexAiResponsePlaceholder(request: AgentRequest): Promise<string> {
  // TODO(vertex-ai): Integrate Vertex AI / Gemini API client with secure server-side calls.
  // TODO(vertex-ai): Add prompt safety, grounding, and token usage tracking.
  return Promise.resolve(
    `Placeholder response in ${request.mode}: refine this with Vertex AI once credentials are configured.`,
  );
}
