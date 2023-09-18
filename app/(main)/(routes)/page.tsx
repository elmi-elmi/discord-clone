import { UserButton } from "@clerk/nextjs";

const state = false;
export default function Home() {
  return (
    <>
      <div>
        <UserButton afterSignOutUrl="/" />
      </div>
      <h1 className="text-3xl font-semibold text-blue-400">
        Home Page: Protected Route
      </h1>
    </>
  );
}
