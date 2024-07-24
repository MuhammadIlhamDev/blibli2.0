import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

import "./FavouriteScroller.scss";
import { useEffect } from "react";

function FavouriteScroller() {
  const [isNavigationEnabled, setIsNavigationEnabled] = useState(false);

  const handleResize = () => {
    if (window.innerWidth > 1022) {
      setIsNavigationEnabled(true);
    } else {
      setIsNavigationEnabled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return (
    <>
      <Swiper
        slidesPerView={5.6}
        speed={600}
        breakpoints={{
          480: {
            slidesPerView: 6,
          },
          576: {
            slidesPerView: 7,
          },
          660: {
            slidesPerView: 8,
          },
          744: {
            slidesPerView: 9,
          },
          855: {
            slidesPerView: 10,
          },
          940: {
            slidesPerView: 11,
          },
          991: {
            slidesPerView: 11.5,
          },
          1140: {
            slidesPerView: 12,
          },
          1240: {
            slidesPerView: 13,
          },
        }}
        spaceBetween={30}
        loop={true}
        navigation={isNavigationEnabled}
        modules={[Navigation]}
        className="favourite__scroller"
      >
        <SwiperSlide className="favourite__content">
          <img
            src="https://www.static-src.com/frontend/static/img/all-favourite.54dd3783.svg"
            alt="All favourite"
          />
          <span>Lihat Semua</span>
        </SwiperSlide>
        <SwiperSlide className="favourite__content">
          <img
            src="https://www.static-src.com/siva/asset/11_2023/new-all-promo_4x.png"
            alt="widget Semua Promo"
          />
          <span>Semua Promo</span>
        </SwiperSlide>
        <SwiperSlide className="favourite__content">
          <img
            src="https://www.static-src.com/siva/asset/10_2023/Widget-Highlight-utilities.png"
            alt="widget Tagihan & Isi Ulang"
          />
          <span>Tagihan & Isi Ulang</span>
        </SwiperSlide>
        <SwiperSlide className="favourite__content">
          <img
            src="https://www.static-src.com/siva/asset/06_2024/extra_Widget.png?w=64"
            alt="widget Naik Level Diamond"
          />
          <span>Naik Level Diamond</span>
        </SwiperSlide>
        <SwiperSlide className="favourite__content">
          <img
            src="https://www.static-src.com/siva/asset/06_2024/widget-pick-the-box-96-x-96-px.png?w=64"
            alt="widget Mystery Box"
          />
          <span>Mystery Box</span>
        </SwiperSlide>
        <SwiperSlide className="favourite__content">
          <img
            src="https://www.static-src.com/siva/asset/05_2024/Widget-Mola-v2.png?w=64"
            alt="widget Gratis 3 Bulan"
          />
          <span>Gratis 3 Bulan</span>
        </SwiperSlide>
        <SwiperSlide className="favourite__content">
          <img
            src="https://www.static-src.com/siva/asset/06_2024/pestaberlimpah-may24-blm-widget-96x96.png?w=64"
            alt="widget Berlimpah Hadiah"
          />
          <span>Berlimpah Hadiah</span>
        </SwiperSlide>
        <SwiperSlide className="favourite__content">
          <img
            src="https://www.static-src.com/siva/asset/07_2023/BLU-Widget.jpeg"
            alt="widget Cashback 25rb"
          />
          <span>Cashback 25rb</span>
        </SwiperSlide>
        <SwiperSlide className="favourite__content">
          <img
            src="https://www.static-src.com/siva/asset/01_2024/paylater-widget-Jan.png"
            alt="widget Hemat 1.1Jt"
          />
          <span>Hemat 1.1Jt</span>
        </SwiperSlide>
        <SwiperSlide className="favourite__content">
          <img
            src="https://www.static-src.com/siva/asset/05_2023/quest_blibli_widget.png"
            alt="widget Misi Berhadiah"
          />
          <span>Misi Berhadiah</span>
        </SwiperSlide>
        <SwiperSlide className="favourite__content">
          <img
            src="https://www.static-src.com/siva/asset/11_2023/keuangan-icon-96px.png?w=64"
            alt="widget Keuangan"
          />
          <span>Keuangan</span>
        </SwiperSlide>
        <SwiperSlide className="favourite__content">
          <img
            src="https://www.static-src.com/siva/asset/10_2023/Widget-Finance-Payment-Promo.png?w=64"
            alt="widget Promo Bank"
          />
          <span>Promo Bank</span>
        </SwiperSlide>
        <SwiperSlide className="favourite__content">
          <img
            src="https://www.static-src.com/siva/asset/10_2023/widget-official-store.png?w=64"
            alt="widget Official Store"
          />
          <span>Official Store</span>
        </SwiperSlide>
        <SwiperSlide className="favourite__content">
          <img
            src="https://www.static-src.com/siva/asset/10_2023/Widget-Layanan-clickandcollect.png?w=64"
            alt="widget Click & Collect"
          />
          <span>Click & Collect</span>
        </SwiperSlide>
        <SwiperSlide className="favourite__content">
          <img
            src="https://www.static-src.com/siva/asset/02_2024/Icon-Dream-On-2024.png?w=64"
            alt="widget Dapatkan Macbook Air"
          />
          <span>Dapatkan Macbook Air</span>
        </SwiperSlide>
        <SwiperSlide className="favourite__content">
          <img
            src="https://www.static-src.com/siva/asset/10_2023/Widget-Belanja-ibuAnak.png?w=64"
            alt="widget Ibu & Anak"
          />
          <span>Ibu & Anak</span>
        </SwiperSlide>
        <SwiperSlide className="favourite__content">
          <img
            src="https://www.static-src.com/siva/asset/10_2023/widget-installment.png?w=64"
            alt="widget Cicilan 0%"
          />
          <span>Cicilan 0%</span>
        </SwiperSlide>
        <SwiperSlide className="favourite__content">
          <img
            src="https://www.static-src.com/siva/asset/10_2023/widget-layanan-2-jam-sampai.png?w=64"
            alt="widget 2 Jam Sampai"
          />
          <span>2 Jam Sampai</span>
        </SwiperSlide>
        <SwiperSlide className="favourite__content">
          <img
            src="https://www.static-src.com/siva/asset/10_2023/Widget-Belanja-kecantikan.png?w=64"
            alt="widget Kesehatan & Kecantikan"
          />
          <span>Kesehatan & Kecantikan</span>
        </SwiperSlide>
        <SwiperSlide className="favourite__content">
          <img
            src="https://www.static-src.com/siva/asset/10_2023/Widget-Layanan-tradein.png?w=64"
            alt="widget Tukar Tambah"
          />
          <span>Tukar Tambah</span>
        </SwiperSlide>
        <SwiperSlide className="favourite__content">
          <img
            src="https://www.static-src.com/siva/asset/10_2023/widget-bliblihome.png?w=64"
            alt="widget Bliblihome"
          />
          <span>Bliblihome</span>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default FavouriteScroller;
