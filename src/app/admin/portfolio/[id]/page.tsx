import { createServerSupabaseClient } from "@/lib/supabase/server";
import { PortfolioEditor } from "@/components/admin/PortfolioEditor";
import { notFound } from "next/navigation";
export default async function EditPortfolioItem({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createServerSupabaseClient();

  const { data: item } = await supabase
    .from("portfolio_items")
    .select("*")
    .eq("id", id)
    .single();

  if (!item) {
    notFound();
  }

  const { data: images } = await supabase
    .from("portfolio_images")
    .select("*")
    .eq("portfolio_item_id", id)
    .order("sort_order", { ascending: true });

  return <PortfolioEditor item={item} existingImages={images || []} />;
}
