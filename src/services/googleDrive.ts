export async function importGoogleDriveSourcesPlaceholder(userId: string): Promise<string[]> {
  // TODO(google-drive): Add OAuth scope handling and Google Drive file selection flow.
  // TODO(google-drive): Map imported file metadata into StudySource records.
  return Promise.resolve([`drive-import-placeholder-for-${userId}`]);
}
