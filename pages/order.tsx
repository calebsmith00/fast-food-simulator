import { withPageAuthRequired, getSession } from "@auth0/nextjs-auth0";
import { getElevatedUser } from "../lib/getElevatedUser";

export default function Order({ user, isElevated }: any) {
  return (
    <div>
      <h1>Hi</h1>
    </div>
  );
}

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    const session: any = getSession(ctx.req, ctx.res);
    const { isElevated = false } = await getElevatedUser(session.user.sub);
    return { props: isElevated };
  },
});
