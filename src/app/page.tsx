import { db } from "@/lib/db"

export default async function Home() {
    const user = await db.user.findMany();
  return (
      <>
        <div className="min-h-screen min-w-screen flex items-center justify-center">
            {JSON.stringify(user)}
        </div>
      </>
  );
}
