import { createFileRoute } from "@tanstack/react-router";
import { NotFound } from "@/components/NotFound";
import { BUSINESS_NAME } from "@/lib/consts";

export const Route = createFileRoute("/$")({
  head: () => ({
    meta: [
      { title: `404 - ${BUSINESS_NAME}` },
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  component: NotFound,
});
