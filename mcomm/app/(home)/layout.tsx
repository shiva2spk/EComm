// app/(home)/layout.tsx
import type { ReactNode } from "react";
import BannerSlider from "../components/client/bannerSlider";
import TopCategories from "../components/client/topCategories";
import FeaturedProducts from "../components/client/FeaturedProducts";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <BannerSlider />
      <TopCategories />
      <FeaturedProducts />
      {children}
    </>
  );
}
