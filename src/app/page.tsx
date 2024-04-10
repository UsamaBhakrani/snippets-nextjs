import { db } from "@/db";

export default async function Home() {
  const snippets = await db.snippet.findMany();
  return snippets.map(({ title, id, code }) => {
    return (
      <div key={id}>
        {title}-{code}
      </div>
    );
  });
}
