export async function startGoogleOAuthPlaceholder(): Promise<{ url: string }> {
  // TODO(google-oauth): Add Google OAuth flow and secure callback endpoint.
  // TODO(google-oauth): Create session handling and role-based access controls.
  return Promise.resolve({ url: "https://accounts.google.com/o/oauth2/v2/auth" });
}
