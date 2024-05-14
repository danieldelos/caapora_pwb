'use client'
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { AuthProvider } from "@/context/authContext";
import { UserProvider } from "@/context/userContext";
import { CompanieProvider } from "@/context/companieContext";
import { FirebaseProvider } from "@/context/firebaseContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <UserProvider>
            <CompanieProvider>
              <FirebaseProvider>
                <Providers>{children}</Providers>
              </FirebaseProvider>
            </CompanieProvider>
          </UserProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
