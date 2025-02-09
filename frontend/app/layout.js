import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Roboto } from "next/font/google";
import "./globals.css";
import css from "@/app/layout.module.css"
import ReactQueryProvider from "@/components/ReactQueryProvider";
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';

import SideMenu from "@/components/side-menu/side-menu";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.variable}>
        <AppRouterCacheProvider>
        <ThemeProvider theme={theme}> 
        <ReactQueryProvider>
          <main className={css.container}>
            <div className={css.side}>
              <SideMenu />
            </div>
            <div className={css['main-view']}>
              {children}
            </div>
          </main>
        </ReactQueryProvider>
        </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
