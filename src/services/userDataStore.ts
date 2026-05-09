export async function saveUserProfilePlaceholder(userId: string): Promise<{ storage: string }> {
  // TODO(firestore-or-cloudsql): Persist user profile and progress data in Firestore or Cloud SQL.
  // TODO(firestore-or-cloudsql): Add migration strategy and backup retention policy.
  return Promise.resolve({ storage: `placeholder-storage-for-${userId}` });
}
