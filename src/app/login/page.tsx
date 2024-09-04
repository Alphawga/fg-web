import LoginForm from "@/components/login/login-form";
import { Suspense } from "react";
import { SessionProvider } from "next-auth/react";

export default async function LoginPage () {
  return (
    <div className="w-screen h-screen grid place-items-center">
      <div className="w-80 p-3 rounded border shadow">
        <SessionProvider>
          <Suspense>
            <LoginForm />
          </Suspense>
        </SessionProvider>
      </div>
    </div>
  );
}
