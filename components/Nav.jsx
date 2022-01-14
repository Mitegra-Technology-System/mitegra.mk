import navStyles from "../styles/Nav.module.css";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import usa from "../images/usa.png";
import alb from "../images/alb.png";
import ma from "../images/mkd.png";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useRouter } from "next/router";
import { al } from "../locales/al.js";
import { en } from "../locales/en.js";
import { mkd } from "../locales/mkd.js";
const Nav = () => {
  const router = useRouter();
  const languages = { en, al, mkd };
  const t = languages[router.locale];

  const [hamburger, setHamburger] = useState(false);
  const [submenu, setSubmenu] = useState(false);
  const [submenu1, setSubmenu1] = useState(false);
  const [submenu2, setSubmenu2] = useState(false);
  const [submenu3, setSubmenu3] = useState(false);

  return (
    <nav className={navStyles.nav}>
      <div className="Container">
        <Link href={t.lHome}>
          <svg
            className={navStyles.logo}
            width="120"
            height="60"
            viewBox="0 0 100 55"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M40.1255 8.38824L42.8647 16.1226L45.5893 8.38824H48.4751V19.0523H46.2705V16.1373L46.4902 11.1055L43.6118 19.0523H42.103L39.2319 11.1129L39.4516 16.1373V19.0523H37.2544V8.38824H40.1255ZM52.7304 19.0523H50.5332V8.38824H52.7304V19.0523ZM62.5815 10.168H59.3149V19.0523H57.1176V10.168H53.895V8.38824H62.5815V10.168ZM70.2573 14.4307H66.0385V17.2872H70.9897V19.0523H63.8413V8.38824H70.9751V10.168H66.0385V12.7095H70.2573V14.4307ZM80.7163 17.7047C80.3208 18.1783 79.7617 18.5469 79.039 18.8106C78.3164 19.0694 77.5156 19.1988 76.6367 19.1988C75.7138 19.1988 74.9033 18.9986 74.205 18.5982C73.5117 18.1929 72.9746 17.607 72.5937 16.8404C72.2177 16.0738 72.0249 15.1729 72.0151 14.1378V13.4127C72.0151 12.3482 72.1933 11.4278 72.5498 10.6514C72.9111 9.87018 73.4287 9.27448 74.1025 8.86432C74.7812 8.44928 75.5747 8.24176 76.4829 8.24176C77.7475 8.24176 78.7363 8.54449 79.4492 9.14996C80.1621 9.75055 80.5844 10.627 80.7163 11.7794H78.5776C78.4799 11.169 78.2627 10.7222 77.9257 10.439C77.5937 10.1558 77.1347 10.0142 76.5488 10.0142C75.8017 10.0142 75.2329 10.295 74.8422 10.8565C74.4516 11.418 74.2539 12.253 74.249 13.3614V14.0425C74.249 15.1607 74.4614 16.0054 74.8862 16.5767C75.311 17.148 75.9336 17.4337 76.7539 17.4337C77.5791 17.4337 78.1674 17.2579 78.519 16.9063V15.0679H76.5195V13.4493H80.7163V17.7047ZM86.4511 15.1485H84.7006V19.0523H82.5034V8.38824H86.4658C87.7255 8.38824 88.6972 8.66901 89.3808 9.23053C90.0644 9.79205 90.4062 10.5855 90.4062 11.6109C90.4062 12.3384 90.2475 12.9464 89.9301 13.4346C89.6176 13.918 89.1416 14.3038 88.5019 14.5919L90.809 18.9498V19.0523H88.4506L86.4511 15.1485ZM84.7006 13.3687H86.4731C87.0249 13.3687 87.4521 13.2296 87.7548 12.9512C88.0576 12.668 88.2089 12.2798 88.2089 11.7867C88.2089 11.2838 88.0649 10.8882 87.7768 10.6002C87.4936 10.3121 87.0566 10.168 86.4658 10.168H84.7006V13.3687ZM98.104 16.855H94.2514L93.519 19.0523H91.1826L95.1523 8.38824H97.1884L101.18 19.0523H98.8437L98.104 16.855ZM94.8447 15.0753H97.5107L96.1704 11.0836L94.8447 15.0753Z"
              fill="#fff"
            />
            <path
              d="M38.6305 26.8759H37.3238V30.4296H36.4449V26.8759H35.1559V26.164H38.6305V26.8759ZM41.7008 28.581H40.0133V29.7236H41.9938V30.4296H39.1344V26.164H41.9879V26.8759H40.0133V27.8925H41.7008V28.581ZM45.858 29.0087C45.8248 29.4677 45.6549 29.829 45.3483 30.0927C45.0436 30.3564 44.6412 30.4882 44.1412 30.4882C43.5944 30.4882 43.1637 30.3046 42.8492 29.9374C42.5367 29.5683 42.3805 29.0624 42.3805 28.4199V28.1591C42.3805 27.749 42.4528 27.3876 42.5973 27.0751C42.7418 26.7626 42.9479 26.5234 43.2154 26.3574C43.485 26.1894 43.7975 26.1054 44.1529 26.1054C44.6451 26.1054 45.0416 26.2372 45.3424 26.5009C45.6432 26.7646 45.817 27.1347 45.8639 27.6113H44.985C44.9635 27.3359 44.8863 27.1367 44.7535 27.0136C44.6227 26.8886 44.4225 26.8261 44.1529 26.8261C43.86 26.8261 43.6403 26.9316 43.4938 27.1425C43.3492 27.3515 43.275 27.6767 43.2711 28.1181V28.4404C43.2711 28.9013 43.3404 29.2382 43.4791 29.4511C43.6197 29.664 43.8404 29.7704 44.1412 29.7704C44.4127 29.7704 44.6149 29.7089 44.7477 29.5859C44.8824 29.4609 44.9596 29.2685 44.9791 29.0087H45.858ZM49.9069 30.4296H49.0279V28.6015H47.3141V30.4296H46.4352V26.164H47.3141V27.8925H49.0279V26.164H49.9069V30.4296ZM54.1461 30.4296H53.2672L51.5563 27.623V30.4296H50.6774V26.164H51.5563L53.2701 28.9765V26.164H54.1461V30.4296ZM58.4176 28.3935C58.4176 28.8134 58.3434 29.1816 58.1949 29.498C58.0465 29.8144 57.8336 30.0585 57.5563 30.2304C57.2809 30.4023 56.9645 30.4882 56.607 30.4882C56.2535 30.4882 55.9381 30.4033 55.6608 30.2333C55.3834 30.0634 55.1686 29.8212 55.0162 29.5068C54.8639 29.1904 54.7867 28.8271 54.7848 28.4169V28.206C54.7848 27.7861 54.86 27.4169 55.0104 27.0986C55.1627 26.7783 55.3766 26.5331 55.652 26.3632C55.9293 26.1913 56.2457 26.1054 56.6012 26.1054C56.9567 26.1054 57.2721 26.1913 57.5475 26.3632C57.8248 26.5331 58.0387 26.7783 58.1891 27.0986C58.3414 27.4169 58.4176 27.7851 58.4176 28.2031V28.3935ZM57.527 28.2001C57.527 27.7529 57.4469 27.413 57.2867 27.1806C57.1266 26.9482 56.8981 26.832 56.6012 26.832C56.3063 26.832 56.0787 26.9472 55.9186 27.1777C55.7584 27.4062 55.6774 27.7421 55.6754 28.1855V28.3935C55.6754 28.829 55.7555 29.1669 55.9156 29.4072C56.0758 29.6474 56.3063 29.7675 56.607 29.7675C56.902 29.7675 57.1285 29.6523 57.2867 29.4218C57.4449 29.1894 57.525 28.8515 57.527 28.4081V28.2001ZM59.9352 29.7236H61.8014V30.4296H59.0563V26.164H59.9352V29.7236ZM65.6246 28.3935C65.6246 28.8134 65.5504 29.1816 65.402 29.498C65.2535 29.8144 65.0406 30.0585 64.7633 30.2304C64.4879 30.4023 64.1715 30.4882 63.8141 30.4882C63.4606 30.4882 63.1451 30.4033 62.8678 30.2333C62.5904 30.0634 62.3756 29.8212 62.2233 29.5068C62.0709 29.1904 61.9938 28.8271 61.9918 28.4169V28.206C61.9918 27.7861 62.067 27.4169 62.2174 27.0986C62.3697 26.7783 62.5836 26.5331 62.859 26.3632C63.1363 26.1913 63.4528 26.1054 63.8082 26.1054C64.1637 26.1054 64.4791 26.1913 64.7545 26.3632C65.0319 26.5331 65.2457 26.7783 65.3961 27.0986C65.5485 27.4169 65.6246 27.7851 65.6246 28.2031V28.3935ZM64.734 28.2001C64.734 27.7529 64.6539 27.413 64.4938 27.1806C64.3336 26.9482 64.1051 26.832 63.8082 26.832C63.5133 26.832 63.2858 26.9472 63.1256 27.1777C62.9654 27.4062 62.8844 27.7421 62.8824 28.1855V28.3935C62.8824 28.829 62.9625 29.1669 63.1227 29.4072C63.2828 29.6474 63.5133 29.7675 63.8141 29.7675C64.109 29.7675 64.3356 29.6523 64.4938 29.4218C64.652 29.1894 64.732 28.8515 64.734 28.4081V28.2001ZM69.6383 29.8906C69.4801 30.08 69.2565 30.2275 68.9674 30.3329C68.6783 30.4365 68.358 30.4882 68.0065 30.4882C67.6373 30.4882 67.3131 30.4081 67.0338 30.248C66.7565 30.0859 66.5416 29.8515 66.3893 29.5449C66.2389 29.2382 66.1617 28.8779 66.1578 28.4638V28.1738C66.1578 27.748 66.2291 27.3798 66.3717 27.0693C66.5162 26.7568 66.7233 26.5185 66.9928 26.3544C67.2643 26.1884 67.5817 26.1054 67.9449 26.1054C68.4508 26.1054 68.8463 26.2265 69.1315 26.4687C69.4166 26.7089 69.5856 27.0595 69.6383 27.5204H68.7828C68.7438 27.2763 68.6569 27.0976 68.5221 26.9843C68.3893 26.871 68.2057 26.8144 67.9713 26.8144C67.6725 26.8144 67.4449 26.9267 67.2887 27.1513C67.1324 27.3759 67.0533 27.7099 67.0514 28.1533V28.4257C67.0514 28.873 67.1363 29.2109 67.3063 29.4394C67.4762 29.6679 67.7252 29.7822 68.0533 29.7822C68.3834 29.7822 68.6188 29.7119 68.7594 29.5712V28.8359H67.9596V28.1884H69.6383V29.8906ZM71.8238 28.0859L72.7115 26.164H73.6725L72.2721 28.8828V30.4296H71.3785V28.8828L69.9781 26.164H70.942L71.8238 28.0859ZM77.7682 29.3105C77.7682 29.1445 77.7096 29.0175 77.5924 28.9296C77.4752 28.8398 77.2643 28.746 76.9596 28.6484C76.6549 28.5488 76.4137 28.4511 76.236 28.3554C75.7516 28.0937 75.5094 27.7411 75.5094 27.2978C75.5094 27.0673 75.5738 26.8622 75.7028 26.6826C75.8336 26.5009 76.0201 26.3593 76.2623 26.2578C76.5065 26.1562 76.7799 26.1054 77.0826 26.1054C77.3873 26.1054 77.6588 26.1611 77.8971 26.2724C78.1354 26.3818 78.3199 26.537 78.4508 26.7382C78.5836 26.9394 78.65 27.1679 78.65 27.4238H77.7711C77.7711 27.2285 77.7096 27.0771 77.5865 26.9697C77.4635 26.8603 77.2906 26.8056 77.068 26.8056C76.8531 26.8056 76.6861 26.8515 76.567 26.9433C76.4479 27.0331 76.3883 27.1523 76.3883 27.3007C76.3883 27.4394 76.4576 27.5556 76.5963 27.6494C76.7369 27.7431 76.943 27.831 77.2145 27.913C77.7145 28.0634 78.0787 28.2499 78.3072 28.4726C78.5358 28.6953 78.65 28.9726 78.65 29.3046C78.65 29.6738 78.5104 29.9638 78.2311 30.1747C77.9518 30.3837 77.5758 30.4882 77.1031 30.4882C76.775 30.4882 76.4762 30.4286 76.2067 30.3095C75.9371 30.1884 75.7311 30.0234 75.5885 29.8144C75.4479 29.6054 75.3776 29.3632 75.3776 29.0878H76.2594C76.2594 29.5585 76.5406 29.7939 77.1031 29.7939C77.3121 29.7939 77.4752 29.7519 77.5924 29.6679C77.7096 29.582 77.7682 29.4628 77.7682 29.3105ZM80.7184 28.0859L81.6061 26.164H82.567L81.1666 28.8828V30.4296H80.2731V28.8828L78.8727 26.164H79.8365L80.7184 28.0859ZM85.1217 29.3105C85.1217 29.1445 85.0631 29.0175 84.9459 28.9296C84.8287 28.8398 84.6178 28.746 84.3131 28.6484C84.0084 28.5488 83.7672 28.4511 83.5895 28.3554C83.1051 28.0937 82.8629 27.7411 82.8629 27.2978C82.8629 27.0673 82.9274 26.8622 83.0563 26.6826C83.1871 26.5009 83.3736 26.3593 83.6158 26.2578C83.86 26.1562 84.1334 26.1054 84.4361 26.1054C84.7408 26.1054 85.0123 26.1611 85.2506 26.2724C85.4889 26.3818 85.6735 26.537 85.8043 26.7382C85.9371 26.9394 86.0035 27.1679 86.0035 27.4238H85.1246C85.1246 27.2285 85.0631 27.0771 84.9401 26.9697C84.817 26.8603 84.6442 26.8056 84.4215 26.8056C84.2067 26.8056 84.0397 26.8515 83.9205 26.9433C83.8014 27.0331 83.7418 27.1523 83.7418 27.3007C83.7418 27.4394 83.8111 27.5556 83.9498 27.6494C84.0904 27.7431 84.2965 27.831 84.568 27.913C85.068 28.0634 85.4322 28.2499 85.6608 28.4726C85.8893 28.6953 86.0035 28.9726 86.0035 29.3046C86.0035 29.6738 85.8639 29.9638 85.5846 30.1747C85.3053 30.3837 84.9293 30.4882 84.4567 30.4882C84.1285 30.4882 83.8297 30.4286 83.5602 30.3095C83.2906 30.1884 83.0846 30.0234 82.942 29.8144C82.8014 29.6054 82.7311 29.3632 82.7311 29.0878H83.6129C83.6129 29.5585 83.8942 29.7939 84.4567 29.7939C84.6656 29.7939 84.8287 29.7519 84.9459 29.6679C85.0631 29.582 85.1217 29.4628 85.1217 29.3105ZM89.8121 26.8759H88.5055V30.4296H87.6266V26.8759H86.3375V26.164H89.8121V26.8759ZM92.8824 28.581H91.1949V29.7236H93.1754V30.4296H90.316V26.164H93.1695V26.8759H91.1949V27.8925H92.8824V28.581ZM94.8395 26.164L95.9352 29.2578L97.025 26.164H98.1793V30.4296H97.2975V29.2636L97.3854 27.2509L96.234 30.4296H95.6305L94.482 27.2538L94.5699 29.2636V30.4296H93.691V26.164H94.8395Z"
              fill="#fff"
            />
            <path
              d="M21.6276 0.0784593C20.4306 0.199988 17.8276 0.842353 16.7256 1.29374C13.8186 2.45695 10.8546 4.81807 9.25854 7.266C7.45353 10.0264 6.97853 11.4501 6.86453 14.5577C6.71253 18.0994 7.37753 20.5126 9.25854 23.3772C11.9186 27.3876 17.2196 30.3564 22.1026 30.53C23.3756 30.5821 23.3376 30.6342 23.3376 29.1585V27.8217L21.4376 27.5092C18.2076 27.0231 15.5856 25.7383 13.5146 23.6723C11.4436 21.6064 10.4176 19.5404 10.0185 16.6758C9.48654 12.891 10.8736 9.40143 14.0086 6.55419C15.3576 5.32154 15.9656 4.92224 17.4476 4.26251C19.1766 3.48126 21.4376 2.90834 22.7676 2.90834H23.3566L23.2996 1.46736C23.2426 -0.112514 23.2616 -0.0951528 21.6276 0.0784593Z"
              fill="#fff"
            />
            <path
              d="M20.8866 6.48467C16.3646 7.59579 13.2485 11.5194 13.5145 15.7556C13.7995 20.2347 17.4286 23.7938 22.2736 24.3494L23.3376 24.4709L23.3756 19.9049L23.4326 15.3215L28.4486 15.2694L33.4647 15.2347L33.3507 14.141C32.9707 10.5993 29.9116 7.42217 25.9786 6.46731C24.6866 6.13744 22.2166 6.15481 20.8866 6.48467Z"
              fill="#fff"
            />
            <path
              d="M0.0624582 15.5819C-0.127543 15.877 0.138459 18.2729 0.556462 20.009C2.05747 26.1375 6.5225 31.4153 12.6785 34.3667C15.3576 35.6341 19.9176 36.7626 22.4256 36.7626H23.3566L23.2996 35.3216L23.2426 33.898L21.7226 33.7764C16.7256 33.3598 12.3745 31.45 8.93552 28.1861C6.6745 26.0333 5.34449 24.0715 4.29949 21.3979C3.82448 20.2 3.23548 17.5611 3.15948 16.1895L3.10248 15.4951L1.63947 15.443C0.746463 15.4083 0.138459 15.4604 0.0624582 15.5819Z"
              fill="#fff"
            />
            <rect x="34" width="69" height="2" fill="#fff" />
            <rect x="34" y="35" width="69" height="2" fill="#fff" />
          </svg>
        </Link>
        <div className={navStyles.menu}>
          <li className={navStyles.prod}>
            Products{" "}
            <span
              onClick={() => setSubmenu(!submenu)}
              className={`${navStyles.arrowRight} ${
                submenu1 ? navStyles.arrowDown : ""
              }`}
            ></span>
            <div className={navStyles.submenu}>
              <Link href="/">
                <li>
                  Heating{" "}
                  <span
                    className={`${navStyles.arrowRight} ${navStyles.arrow}`}
                  ></span>
                  <div className={navStyles.submenu1}>
                    <Link href="/">
                      <li>h 1</li>
                    </Link>
                    <Link href="/">
                      <li>h 2</li>
                    </Link>
                    <Link href="/">
                      <li>h 3</li>
                    </Link>
                  </div>
                </li>
              </Link>
              <Link href="/">
                <li>
                  Plumbing{" "}
                  <span
                    className={`${navStyles.arrowRight} ${navStyles.arrow}`}
                  ></span>
                  <div className={navStyles.submenu1}>
                    <Link href="/">
                      <li>p 1</li>
                    </Link>
                    <Link href="/">
                      <li>p 2</li>
                    </Link>
                    <Link href="/">
                      <li>p 3</li>
                    </Link>
                  </div>
                </li>
              </Link>
              <Link href="/">
                <li>
                  Air Conditioning{" "}
                  <span
                    className={`${navStyles.arrowRight} ${navStyles.arrow}`}
                  ></span>
                  <div className={navStyles.submenu1}>
                    <Link href="/">
                      <li>a 1</li>
                    </Link>
                    <Link href="/">
                      <li>a 2</li>
                    </Link>
                    <Link href="/">
                      <li>a 3</li>
                    </Link>
                  </div>
                </li>
              </Link>
            </div>
          </li>
          <Link href={t.lHome}>
            <a>{t.home}</a>
          </Link>
          <Link href={t.lAbout}>
            <a>{t.about}</a>
          </Link>
          <Link href={t.lContact}>
            <a>{t.contact}</a>
          </Link>

          <DropdownMenu.Root className={navStyles.Root}>
            <DropdownMenu.Trigger className={navStyles.Trigger}>
              <Image
                src={usa}
                alt={"usa flag"}
                objectFit="cover"
                objectPosition="top"
                width="20"
                height="20"
              />
            </DropdownMenu.Trigger>
            <DropdownMenu.Content className={navStyles.content}>
              <DropdownMenu.Item className={navStyles.item}>
                <Link href="en/">
                  <Image
                    src={usa}
                    alt={"usa flag"}
                    objectFit="cover"
                    objectPosition="top"
                    width="20"
                    height="20"
                  />
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item className={navStyles.item}>
                <Link href="/al/sq">
                  <Image
                    src={alb}
                    alt={"albanian flag"}
                    objectFit="cover"
                    objectPosition="top"
                    width="20"
                    height="20"
                  />
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item className={navStyles.item}>
                <Link href="/mkd/ma">
                  <Image
                    src={ma}
                    alt={"macedonian flag"}
                    objectFit="cover"
                    objectPosition="top"
                    width="20"
                    height="20"
                  />
                </Link>
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </div>
        <button
          onClick={() => setHamburger(!hamburger)}
          className={`${navStyles.hamburger} ${
            hamburger ? navStyles.isActive : ""
          }`}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div
          className={`${navStyles.mobileNav} ${
            hamburger ? navStyles.isActiveM : ""
          }`}
        >
          <Link href={t.lHome}>
            <a onClick={() => setHamburger(!hamburger)}>{t.home}</a>
          </Link>
          <Link href={t.lAbout}>
            <a onClick={() => setHamburger(!hamburger)}>{t.about}</a>
          </Link>
          <Link href={t.lContact}>
            <a onClick={() => setHamburger(!hamburger)}>{t.contact}</a>
          </Link>
          <li>
            <li
              onClick={() => setSubmenu(!submenu)}
              className={`${navStyles.mprod} ${
                submenu ? navStyles.mprod1 : ""
              }`}
            >
              Products
              <span
                onClick={() => setSubmenu(!submenu)}
                className={`${navStyles.arrowRight} ${
                  submenu ? navStyles.arrowDown : ""
                }`}
              ></span>
            </li>

            <div
              className={`${navStyles.msubmenu} ${
                submenu ? navStyles.activeMsubmenu : ""
              }`}
            >
              <li>
                <li
                  onClick={() => setSubmenu1(!submenu1)}
                  className={`${navStyles.msubmenu} ${
                    submenu ? navStyles.activeMsubmenu : ""
                  }`}
                >
                  Heating
                  <span
                    onClick={() => setSubmenu(!submenu)}
                    className={`${navStyles.arrowRight} ${
                      submenu1 ? navStyles.arrowDown : ""
                    }`}
                  ></span>
                </li>
                <div
                  onClick={() => setSubmenu1(!submenu1)}
                  className={`${navStyles.msubmenu} ${
                    submenu1 ? navStyles.activeMsubmenu : ""
                  }`}
                >
                  <Link href="/">
                    <li>h 1</li>
                  </Link>
                  <Link href="/">
                    <li>h 2</li>
                  </Link>
                  <Link href="/">
                    <li>h 3</li>
                  </Link>
                </div>
              </li>

              <li>
                <li
                  onClick={() => setSubmenu2(!submenu2)}
                  className={`${navStyles.msubmenu} ${
                    submenu ? navStyles.activeMsubmenu : ""
                  }`}
                >
                  Plumbing
                  <span
                    onClick={() => setSubmenu2(!submenu2)}
                    className={`${navStyles.arrowRight} ${
                      submenu2 ? navStyles.arrowDown : ""
                    }`}
                  ></span>
                </li>
                <div
                  onClick={() => setSubmenu2(!submenu2)}
                  className={`${navStyles.msubmenu} ${
                    submenu2 ? navStyles.activeMsubmenu : ""
                  }`}
                >
                  <Link href="/">
                    <li>h 1</li>
                  </Link>
                  <Link href="/">
                    <li>h 2</li>
                  </Link>
                  <Link href="/">
                    <li>h 3</li>
                  </Link>
                </div>
              </li>
              <li>
                <li
                  onClick={() => setSubmenu3(!submenu3)}
                  className={`${navStyles.msubmenu} ${
                    submenu ? navStyles.activeMsubmenu : ""
                  }`}
                >
                  Air Conditioning
                  <span
                    onClick={() => setSubmenu(!submenu)}
                    className={`${navStyles.arrowRight} ${
                      submenu3 ? navStyles.arrowDown : ""
                    }`}
                  ></span>
                </li>
                <div
                  onClick={() => setSubmenu3(!submenu3)}
                  className={`${navStyles.msubmenu} ${
                    submenu3 ? navStyles.activeMsubmenu : ""
                  }`}
                >
                  <Link href="/">
                    <li>h 1</li>
                  </Link>
                  <Link href="/">
                    <li>h 2</li>
                  </Link>
                  <Link href="/">
                    <li>h 3</li>
                  </Link>
                </div>
              </li>
            </div>
          </li>

          <div className={navStyles.dropdown}>
            <DropdownMenu.Root className={navStyles.mRoot}>
              <DropdownMenu.Trigger className={navStyles.mTrigger}>
                <Image
                  src={usa}
                  alt={"usa flag"}
                  objectFit="cover"
                  objectPosition="top"
                  width="20"
                  height="20"
                />
              </DropdownMenu.Trigger>
              <DropdownMenu.Content className={navStyles.mcontent}>
                <DropdownMenu.Item className={navStyles.mitem}>
                  <Link href="/en">
                    <Image
                      src={usa}
                      alt={"usa flag"}
                      objectFit="cover"
                      objectPosition="top"
                      width="20"
                      height="20"
                    />
                  </Link>
                </DropdownMenu.Item>

                <DropdownMenu.Item className={navStyles.mitem}>
                  {" "}
                  <Link href="/al/sq">
                    <Image
                      src={alb}
                      alt={"albanian flag"}
                      objectFit="cover"
                      objectPosition="top"
                      width="20"
                      height="20"
                    />
                  </Link>
                </DropdownMenu.Item>
                <DropdownMenu.Item className={navStyles.mitem}>
                  <Link href="/mkd/ma">
                    <Image
                      src={ma}
                      alt={"macedonian flag"}
                      objectFit="cover"
                      objectPosition="top"
                      width="20"
                      height="20"
                    />
                  </Link>
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          </div>
        </div>
      </div>
    </nav>
  );
};
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default Nav;
