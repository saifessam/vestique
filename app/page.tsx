"use client";
import Button from '@/components/button';
import GalleryImage1 from '@/public/assets/images/gallery/1.jpg';
import GalleryImage2 from '@/public/assets/images/gallery/2.jpg';
import GalleryImage3 from '@/public/assets/images/gallery/3.jpg';
import GalleryImage4 from '@/public/assets/images/gallery/4.jpg';
import Background from '@/public/assets/images/hero-background.jpg';
import ChanelLogo from '@/public/assets/svgs/sponsors/chanel.svg';
import GucciLogo from '@/public/assets/svgs/sponsors/gucci.svg';
import HermesLogo from '@/public/assets/svgs/sponsors/hermes.svg';
import PradaLogo from '@/public/assets/svgs/sponsors/prada.svg';
import RolexLogo from '@/public/assets/svgs/sponsors/rolex.svg';
import { Metadata } from 'next';
import Image from 'next/image';
import styles from './page.module.css';

export const metadata: Metadata = { title: 'VESTIQUE | HOME' };

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SponsorsSection />
      <AboutSection />
    </main>
  );
}

function HeroSection() {
  return (
    <section className={styles["hero"]}>
      <Image src={Background} alt="A man walking in the desert" priority />
      <div className={styles["title"]}>
        <p>Your Ultimate Destination for <br /> Luxury and Trendy Clothing</p>
        <Button style='PRIMARY' content={'Begin Your Journey Now'} onClick={() => alert("Clicked")} />
      </div>
    </section>
  );
}

function SponsorsSection() {
  return (
    <section className={styles["sponsors"]}>
      <HermesLogo />
      <ChanelLogo />
      <GucciLogo />
      <PradaLogo />
      <RolexLogo />
    </section>
  );
}

function AboutSection() {
  return (
    <section className={styles["about"]}>
      <div className={styles["gallery"]}>
        <Image src={GalleryImage1} alt="Assorted tops hanging indoors" loading='lazy' />
        <Image src={GalleryImage2} alt="Eiffel tower in paris during daytime" loading='lazy' />
        <Image src={GalleryImage3} alt="Person in black suit holding brown leather bag" loading='lazy' />
        <Image src={GalleryImage4} alt="Woman in beige coat sitting on brown concrete bench during daytime" loading='lazy' />
      </div>
      <div className={styles["description"]}>
        <h4>About <span id='logo'>VESTIQUE</span></h4>
        <p>
          Welcome to Vestique, a premium clothing brand that combines the best of Parisian fashion with luxury and aesthetic sensibilities. Our brand is dedicated to creating beautiful and timeless pieces that are crafted with the finest materials and fabrics in the industry.
          <br />
          <br />
          At Vestique, we believe that clothing is not just about style, but also about quality and comfort. That's why we source our materials from the most reputable suppliers in the world and ensure that every piece we create meets our high standards of excellence.
          <br />
          <br />
          Our aesthetic is inspired by the chic and sophisticated style of the Parisian fashion scene. We strive to create clothing that is both elegant and practical, with a focus on modernity and versatility. Our designs are perfect for any occasion, whether you're dressing up for a night out or dressing down for a casual brunch with friends.
          <br />
          <br />
          We are committed to providing our customers with exceptional service and an unparalleled shopping experience. From our carefully curated collections to our attentive customer service team, we are dedicated to ensuring that every customer is satisfied with their purchase.
        </p>
      </div>
    </section>
  );
}