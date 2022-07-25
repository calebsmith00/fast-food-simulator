import { getMgmtToken } from "./getMgmtToken";

export async function getElevatedUser(userId: string): Promise<any> {
  try {
    const token = await getMgmtToken();

    const options = {
      method: "GET",
      headers: { Authorization: `Bearer ${token.access_token}` },
    };

    const request = await fetch(
      `${process.env.AUTH0_AUDIENCE}users/${userId}/roles`,
      options
    );
    const response = await request.json();

    const foundAdminRole = response.find(
      (roleDetails: any) => roleDetails.name === "Admin"
    );

    if (foundAdminRole) {
      return { isElevated: true };
    }
  } catch (error) {
    console.error(`Error when looking for elevated user ${error}`);
    return { isElevated: true };
  }
}
