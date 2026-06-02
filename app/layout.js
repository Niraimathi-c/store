import "bootstrap/dist/css/bootstrap.min.css";

export default function RootLayout({
  children,
}) {
  return (
    <html suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}