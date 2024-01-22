import "./globals.css";

export const metadata = {
  title: "El Gato",
  description: "Practica ws",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
