import navStyles from "../styles/Nav.module.css";
import React, { useState } from "react";
import style from "../styles/Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className={style.body1}>
        <footer className={style.footer}>
          <div className={style.container}>
            <div className={style.aboutus}>
              <h2>About Us</h2>
              <p>
                our expert team provides the professional maintenance and{" "}
                installation support that you and your property require. We are
                plumbing, heating, and drainage experts.
              </p>
              <ul className={style.sci}>
                <Link href="https://www.facebook.com/mitegra.mk/">
                  <a>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 42 41"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M42 20.6255C42 9.2341 32.5984 0 21.0026 0C9.40157 0.00256218 0 9.2341 0 20.6281C0 30.9204 7.67979 39.4524 17.7165 41V26.5877H12.3884V20.6281H17.7218V16.0802C17.7218 10.9123 20.8583 8.05806 25.6535 8.05806C27.9528 8.05806 30.3543 8.46032 30.3543 8.46032V13.5334H27.706C25.0997 13.5334 24.2861 15.1245 24.2861 16.7567V20.6255H30.1076L29.1785 26.5852H24.2835V40.9974C34.3202 39.4499 42 30.9178 42 20.6255Z"
                        fill="#999"
                      />
                    </svg>
                  </a>
                </Link>
                <Link href="https://twitter.com/mitegra1">
                  <a>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 46 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.4498 38C31.809 38 41.3051 23.3766 41.3051 10.7175C41.3051 10.3082 41.3051 9.89319 41.2879 9.48398C43.1367 8.12332 44.7323 6.43874 46 4.50917C44.273 5.28331 42.4429 5.79352 40.5691 6.02324C42.5429 4.82379 44.0212 2.93655 44.7292 0.712296C42.8748 1.82921 40.8452 2.61329 38.7291 3.03017C37.3065 1.48986 35.424 0.469453 33.3732 0.127003C31.3225 -0.215447 29.2178 0.139174 27.3853 1.13594C25.5529 2.1327 24.0948 3.71597 23.237 5.64052C22.3793 7.56506 22.1696 9.72346 22.6406 11.7814C18.888 11.5901 15.2168 10.599 11.8652 8.87234C8.51365 7.1457 5.55647 4.72209 3.1855 1.7587C1.98185 3.87222 1.61452 6.37224 2.15811 8.75111C2.70169 11.13 4.11543 13.2093 6.11225 14.5669C4.61593 14.5153 3.1525 14.1068 1.84 13.3744V13.5059C1.84258 15.72 2.59701 17.8652 3.97576 19.579C5.35452 21.2929 7.27302 22.4701 9.407 22.9119C8.59701 23.1387 7.76028 23.2518 6.92013 23.248C6.32783 23.2498 5.73672 23.1941 5.15487 23.0814C5.75801 24.9873 6.93241 26.6537 8.51358 27.8472C10.0948 29.0406 12.0035 29.7014 13.9725 29.7369C10.6276 32.4079 6.49578 33.8565 2.2425 33.8495C1.49305 33.8527 0.744116 33.8087 0 33.7179C4.31686 36.5159 9.33023 38.0016 14.4498 38V38Z"
                        fill="#999"
                      />
                    </svg>
                  </a>
                </Link>
                <Link href="https://www.instagram.com/mitegra.mk/">
                  <a>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 43 41"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.5 0C15.6654 0 14.9318 0.025625 12.6393 0.123C10.3469 0.2255 8.78544 0.568875 7.4175 1.07625C5.98263 1.59085 4.68295 2.39805 3.60931 3.44144C2.5157 4.46566 1.66923 5.70474 1.12875 7.0725C0.596625 8.37425 0.233813 9.86562 0.129 12.0437C0.026875 14.2347 0 14.9317 0 20.5026C0 26.0683 0.026875 26.7653 0.129 28.9511C0.2365 31.1344 0.596625 32.6232 1.12875 33.9275C1.67969 35.2754 2.41338 36.4182 3.60931 37.5586C4.80256 38.6989 6.00119 39.401 7.41481 39.9237C8.78544 40.4311 10.3442 40.7771 12.6339 40.877C14.9291 40.9744 15.6601 41 21.5 41C27.3399 41 28.0683 40.9744 30.3634 40.877C32.6504 40.7745 34.2173 40.4311 35.5852 39.9237C37.0191 39.4089 38.3179 38.6017 39.3907 37.5586C40.5866 36.4182 41.3203 35.2754 41.8712 33.9275C42.4007 32.6232 42.7635 31.1344 42.871 28.9511C42.9731 26.7653 43 26.0683 43 20.5C43 14.9317 42.9731 14.2347 42.871 12.0463C42.7635 9.86563 42.4007 8.37425 41.8712 7.0725C41.3309 5.7047 40.4844 4.46561 39.3907 3.44144C38.3174 2.39767 37.0176 1.5904 35.5825 1.07625C34.2119 0.568875 32.6477 0.222938 30.3607 0.123C28.0656 0.025625 27.3373 0 21.4946 0H21.5027H21.5ZM19.5731 3.69513H21.5027C27.2432 3.69513 27.9231 3.71306 30.1887 3.813C32.2849 3.90269 33.4244 4.23838 34.1823 4.51769C35.1847 4.88925 35.9023 5.33512 36.6548 6.05262C37.4073 6.77012 37.8723 7.45175 38.2619 8.41013C38.5576 9.13019 38.9069 10.2167 39.001 12.2154C39.1058 14.3756 39.1273 15.0239 39.1273 20.4949C39.1273 25.9658 39.1058 26.6167 39.001 28.7769C38.9069 30.7756 38.5549 31.8596 38.2619 32.5822C37.9172 33.4723 37.3671 34.2771 36.6521 34.9371C35.8996 35.6546 35.1848 36.0979 34.1796 36.4695C33.4271 36.7514 32.2876 37.0845 30.1887 37.1768C27.9231 37.2741 27.2432 37.2972 21.5027 37.2972C15.7622 37.2972 15.0796 37.2741 12.814 37.1768C10.7178 37.0845 9.58094 36.7514 8.82306 36.4695C7.88915 36.1413 7.04428 35.6177 6.35056 34.9371C5.63502 34.2761 5.08401 33.4705 4.73806 32.5796C4.44513 31.8596 4.09306 30.7731 3.999 28.7743C3.89688 26.6141 3.87538 25.9658 3.87538 20.4897C3.87538 15.0162 3.89688 14.3705 3.999 12.2103C4.09575 10.2116 4.44513 9.12506 4.74075 8.40244C5.13044 7.44663 5.59806 6.76244 6.35056 6.04494C7.10306 5.32744 7.81794 4.88413 8.82306 4.51256C9.58094 4.23069 10.7178 3.89756 12.814 3.80531C14.7974 3.71819 15.566 3.69256 19.5731 3.69V3.69513V3.69513ZM32.9783 7.09812C32.6395 7.09812 32.304 7.16176 31.991 7.28538C31.678 7.40901 31.3936 7.59021 31.154 7.81864C30.9144 8.04707 30.7244 8.31826 30.5947 8.61672C30.465 8.91518 30.3983 9.23507 30.3983 9.55813C30.3983 9.88118 30.465 10.2011 30.5947 10.4995C30.7244 10.798 30.9144 11.0692 31.154 11.2976C31.3936 11.526 31.678 11.7072 31.991 11.8309C32.304 11.9545 32.6395 12.0181 32.9783 12.0181C33.6626 12.0181 34.3188 11.7589 34.8026 11.2976C35.2865 10.8363 35.5583 10.2106 35.5583 9.55813C35.5583 8.90569 35.2865 8.27998 34.8026 7.81864C34.3188 7.3573 33.6626 7.09812 32.9783 7.09812V7.09812ZM21.5027 9.97325C20.0382 9.95146 18.5838 10.2077 17.2241 10.727C15.8645 11.2463 14.6268 12.0183 13.583 12.9981C12.5393 13.9779 11.7104 15.1458 11.1446 16.434C10.5789 17.7221 10.2875 19.1047 10.2875 20.5013C10.2875 21.8978 10.5789 23.2804 11.1446 24.5686C11.7104 25.8567 12.5393 27.0247 13.583 28.0045C14.6268 28.9843 15.8645 29.7563 17.2241 30.2756C18.5838 30.7949 20.0382 31.0511 21.5027 31.0293C24.4013 30.9862 27.1658 29.858 29.1996 27.8883C31.2334 25.9186 32.3734 23.2654 32.3734 20.5013C32.3734 17.7372 31.2334 15.0839 29.1996 13.1142C27.1658 11.1445 24.4013 10.0164 21.5027 9.97325V9.97325ZM21.5027 13.6658C23.4036 13.6658 25.2267 14.3858 26.5709 15.6675C27.9151 16.9492 28.6703 18.6875 28.6703 20.5C28.6703 22.3125 27.9151 24.0508 26.5709 25.3325C25.2267 26.6142 23.4036 27.3342 21.5027 27.3342C19.6017 27.3342 17.7786 26.6142 16.4345 25.3325C15.0903 24.0508 14.3351 22.3125 14.3351 20.5C14.3351 18.6875 15.0903 16.9492 16.4345 15.6675C17.7786 14.3858 19.6017 13.6658 21.5027 13.6658V13.6658Z"
                        fill="#999"
                      />
                    </svg>
                  </a>
                </Link>
              </ul>
            </div>
            <div className={style.quickLinks}>
              <h2>Quick Links</h2>
              <ul>
                <li>
                  {" "}
                  <Link href="/best-Plumber-in-North-macedonia-plumbing">
                    <a>Plumbing</a>
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link href="/best-central-heating-north-macedonia-heating">
                    <a>Heating</a>
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link href="/best-air-condition-north-macedonia-debar">
                    <a>Bathrooms</a>
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link href="/contact-mitegra">
                    <a>Contact</a>
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link href="/about-mitegra">
                    <a>About Us</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className={style.contact}>
              <h2>Contact info</h2>
              <ul className={style.info}>
                <li>
                  <span>
                    {" "}
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPpath="url(#clip0_117_28)">
                        <path
                          d="M12 1C8.13 1 5 4.13 5 8C5 13.25 12 21 12 21C12 21 19 13.25 19 8C19 4.13 15.87 1 12 1ZM12 10.5C10.62 10.5 9.5 9.38 9.5 8C9.5 6.62 10.62 5.5 12 5.5C13.38 5.5 14.5 6.62 14.5 8C14.5 9.38 13.38 10.5 12 10.5Z"
                          fill="#999"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_117_28">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  <span>UL. AMDI LESHI No. 2 Debar</span>
                </li>
                <li>
                  <span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 4H4C2.9 4 2.01 4.95625 2.01 6.125L2 18.875C2 20.0438 2.9 21 4 21H20C21.1 21 22 20.0438 22 18.875V6.125C22 4.95625 21.1 4 20 4ZM20 8.25L12 13.5625L4 8.25V6.125L12 11.4375L20 6.125V8.25Z"
                        fill="#999"
                      />
                    </svg>
                  </span>
                  <span>Info@mitegra.mk</span>
                </li>
                <li>
                  <span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"
                        fill="#999"
                      />
                    </svg>
                  </span>
                  <span>
                    +38946791241 <br />
                    +38972735307
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </footer>

        <div className={style.copyrightText}>
          <p>
            Copyright @ 2021 Mitegra Technology System. All Rights Reserved.
            website made by
            <Link href="https:nehardev.com">
              <span className={style.mit1}> nehardev.com</span>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};
export default Footer;
