import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sétima Digital" },
      { name: "description", content: "Sétima Digital" },
      { property: "og:title", content: "Sétima Digital" },
      { property: "og:description", content: "Sétima Digital" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <h1 className="text-3xl font-bold text-white">Sétima Digital</h1>
    </div>
  );
}
