import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/Footer/Footer";
import '@/Styles/global.css';
import '@/Styles/Font/font.css';
import { AntdRegistry } from '@ant-design/nextjs-registry';

export const metadata = {
    title: "Khosroshah News",
    description: "News website",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" dir="rtl" suppressHydrationWarning>
            <body suppressHydrationWarning>
            <AntdRegistry>{children}</AntdRegistry>
            </body>
        </html>
        );
}
