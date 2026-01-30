import type { ReactNode } from "react";

export const metadata = {
  title: "World ID 투표 앱",
  description: "World ID 인증으로 1인 1표를 보장하는 투표 앱",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
