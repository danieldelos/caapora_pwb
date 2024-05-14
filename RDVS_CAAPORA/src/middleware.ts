import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const allCookies = request.cookies.getAll();
  // Verifica se o token existe no cookie
  if (allCookies[0]) {
    // Se o token existir, permite o acesso as rotas protegidas'
    return NextResponse.next();
  }
  // Caso contrário, redireciona para a rota '/login'
  return NextResponse.redirect(new URL("/login", request.url));
}
export const config = {
  //   Determina quais rotas vão passar por essa regra',
  matcher: [
    "/dash/:path*",
    "/registerCompanie/:path*",
    "/Company/:path*",
    "/vintage/:path*",
    "/plot/:path*",
    "/culture/:path*",
    "/registerUser/:path*",
    "/listUsers/:path*",
    "/registerStandardChatAccounts/:path*",
    "/registerCrop/:path*",
    "/registerHarvest/:path*",
    "/registerPlot/:path*",
    "/financialMetrics/:path*",
    "/investmentsMetrics/:path*",
    "/profitabilityMetrics/:path*",
    "/profitabilityMetrics/:path*",
  ],
};
