import { db } from "@/db";
import { redirect } from "next/navigation";

const SnippetCreatePage = () => {
  const createSnippet = async (formData: FormData) => {
    // Server Action
    "use server";
    // Validate Input
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;
    // Create new Record in DB
    const snippet = await db.snippet.create({
      data: {
        title,
        code,
      },
    });
    // Log Snippet
    console.log(snippet);
    // Navigate to Snippet List
    redirect("/");
  };
  return (
    <form action={createSnippet}>
      <h3 className="font-bold m-3">Create a Snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label htmlFor="title" className="w-12">
            Title
          </label>
          <input
            name="title"
            className="border rounded p-2 w-full"
            id="title"
          />
        </div>
        <div className="flex gap-4">
          <label htmlFor="code" className="w-12">
            Code
          </label>
          <textarea
            name="code"
            className="border rounded p-2 w-full"
            id="code"
          />
        </div>
        <button className="border p-2 bg-blue-200" type="submit">
          Create
        </button>
      </div>
    </form>
  );
};

export default SnippetCreatePage;
