import { Separator } from "@/components/ui/separator";
import Chat from "./components/Chat";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession();
  return (
    <main>
      <h1 className="text-4xl font-bold">Welcome to GPT Chat</h1>
      {!session?.user?.email && <div>you need to log in to use this chat</div>}
      {session?.user?.email && (
        <>
          <Chat />
          <Separator />
        </>
      )}
    </main>
  );
}
