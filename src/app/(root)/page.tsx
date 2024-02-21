import { UserButton } from "@clerk/nextjs";
 
export default function Home() {
  return (
    <>
      <header className="bg-white shadow">
        <UserButton />
      </header>
      <div>Your home page's content can go here.</div>
    </>
  );
}