import Link from "next/link";
import { AdminNav } from "@/components/admin/AdminNav";

export const metadata = {
  title: "Admin Dashboard | Brower Inc",
  robots: "noindex, nofollow",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 border-r border-gray-200 bg-white">
        <div className="flex h-16 items-center border-b border-gray-200 px-6">
          <Link href="/admin" className="text-lg font-bold text-gray-900">
            Brower Admin
          </Link>
        </div>
        <AdminNav />
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto">
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
}
