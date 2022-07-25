export async function getMgmtToken(url?: string) {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      client_id: process.env.AUTH0_CLIENT_ID,
      client_secret: process.env.AUTH0_CLIENT_SECRET,
      audience: process.env.AUTH0_AUDIENCE,
      issuer: process.env.AUTH0_ISSUER_BASE_URL,
      grant_type: "client_credentials",
    }),
  };

  const tokenReq = await fetch(
    "https://dev-hqwvv51z.us.auth0.com/oauth/token",
    options
  );
  const token = await tokenReq.json();

  if (token.access_token) {
    return token;
  }
}
