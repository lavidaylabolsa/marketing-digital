import type { ReactNode } from 'react';
import { useLenis } from '../hooks/useLenis';
import Navbar from './Navbar';
import Footer from './Footer';
export default function Layout({ children }: { children: ReactNode }) {
  useLenis();
  return <><Navbar /><main>{children}</main><Footer /></>;
}
