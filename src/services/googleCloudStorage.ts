import type { StudySource } from "@/types";

export async function uploadSourceToGcsPlaceholder(source: StudySource): Promise<{ uri: string }> {
  // TODO(google-cloud-storage): Replace placeholder with real Google Cloud Storage upload logic.
  // TODO(google-cloud-storage): Add signed URL flow and MIME type validation.
  return Promise.resolve({ uri: `gs://neurostudy-placeholder/${source.id}` });
}
