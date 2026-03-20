import { Suspense } from "react";
import { LoginForm } from "@/components/admin/LoginForm";

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
          <div className="text-gray-500">Loading...</div>
        </div>
      }
    >
      <LoginForm />
    </Suspense>
  );
}
