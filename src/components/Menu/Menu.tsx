import cx from "classnames";
import Link from "next/link";
import {useState} from "react";

import styles from "./Menu.module.css";
import {ScrollButton} from "@/components/ScrollButton/ScrollButton";

const BURGER =  <svg className={styles.burgerIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>

const BURGER_X = <svg className={styles.burgerIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>


const CAMERA = <svg
        className={styles.cameraSvg}
        fill="#000000"
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 51.661 51.661"
    >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
            <g>
                <g>
                    <path d="M1.213,33.74l1.153-0.419c0.201,0.631,0.429,1.247,0.678,1.855L1.89,35.596c0.321,0.786,0.679,1.553,1.073,2.298
                    l1.066-0.616c0.308,0.585,0.64,1.152,0.992,1.709l-1.068,0.617c0.452,0.716,0.938,1.408,1.456,2.073l0.945-0.792
                    c0.404,0.521,0.824,1.028,1.268,1.517l-0.946,0.793c0.568,0.627,1.166,1.224,1.792,1.793l0.794-0.946
                    c0.486,0.443,0.995,0.862,1.516,1.268l-0.792,0.943c0.667,0.52,1.359,1.004,2.074,1.456l0.617-1.067
                    c0.555,0.353,1.125,0.684,1.709,0.993L13.77,48.7c0.745,0.394,1.511,0.75,2.297,1.072l0.419-1.156
                    c0.607,0.251,1.225,0.478,1.855,0.678l-0.419,1.153c0.801,0.257,1.617,0.476,2.448,0.654l0.214-1.207
                    c0.641,0.14,1.29,0.252,1.948,0.34L22.32,51.44c0.829,0.112,1.672,0.188,2.524,0.219v-1.223c0.328,0.013,0.656,0.025,0.987,0.025
                    c0.332,0,0.659-0.014,0.988-0.025v1.223c0.853-0.031,1.695-0.106,2.525-0.219l-0.213-1.206c0.657-0.088,1.306-0.2,1.946-0.34
                    l0.213,1.207c0.831-0.179,1.649-0.397,2.45-0.654l-0.422-1.153c0.632-0.2,1.25-0.427,1.855-0.678l0.421,1.156
                    c0.786-0.323,1.552-0.679,2.297-1.072l-0.615-1.066c0.583-0.31,1.153-0.641,1.709-0.993l0.616,1.068
                    c0.717-0.453,1.408-0.938,2.074-1.455l-0.793-0.944c0.521-0.404,1.029-0.824,1.516-1.267l0.794,0.944
                    c0.627-0.568,1.225-1.166,1.794-1.792l-0.945-0.794c0.442-0.486,0.862-0.995,1.266-1.516l0.945,0.792
                    c0.517-0.666,1.003-1.358,1.456-2.074l-1.067-0.616c0.353-0.556,0.683-1.124,0.991-1.708l1.065,0.615
                    c0.396-0.745,0.753-1.512,1.072-2.297l-1.153-0.419c0.249-0.608,0.478-1.227,0.678-1.855l1.153,0.418
                    c0.258-0.8,0.476-1.617,0.655-2.449l-1.209-0.213c0.141-0.64,0.253-1.289,0.342-1.946l1.206,0.213
                    c0.112-0.83,0.188-1.67,0.219-2.525h-1.228c0.014-0.328,0.024-0.656,0.024-0.988c0-0.331-0.012-0.659-0.024-0.987h1.223
                    c-0.03-0.854-0.105-1.695-0.218-2.524l-1.207,0.213c-0.087-0.657-0.2-1.306-0.339-1.947l1.208-0.213
                    c-0.18-0.832-0.398-1.649-0.654-2.449l-1.153,0.42c-0.202-0.63-0.43-1.249-0.679-1.856l1.154-0.421
                    c-0.32-0.785-0.678-1.552-1.071-2.298l-1.066,0.617c-0.309-0.584-0.64-1.153-0.991-1.709l1.067-0.616
                    c-0.453-0.717-0.938-1.409-1.456-2.075l-0.944,0.793c-0.404-0.521-0.822-1.029-1.268-1.517l0.946-0.793
                    c-0.567-0.627-1.165-1.225-1.792-1.793l-0.795,0.947c-0.487-0.444-0.996-0.864-1.517-1.268l0.793-0.944
                    c-0.667-0.518-1.357-1.003-2.072-1.455l-0.619,1.068c-0.555-0.352-1.124-0.684-1.709-0.992l0.617-1.067
                    c-0.745-0.394-1.512-0.751-2.298-1.072l-0.421,1.154c-0.606-0.25-1.225-0.477-1.855-0.678l0.421-1.153
                    c-0.801-0.257-1.618-0.475-2.45-0.655l-0.214,1.208c-0.641-0.14-1.289-0.252-1.946-0.34l0.212-1.207
                    c-0.829-0.112-1.67-0.187-2.524-0.219v1.223C26.487,1.212,26.159,1.2,25.828,1.2s-0.659,0.013-0.988,0.025V0.002
                    c-0.853,0.032-1.695,0.106-2.525,0.219l0.213,1.207c-0.657,0.088-1.306,0.202-1.947,0.34L20.368,0.56
                    c-0.832,0.179-1.65,0.397-2.45,0.654l0.42,1.153c-0.63,0.202-1.25,0.429-1.855,0.679l-0.421-1.155
                    c-0.785,0.321-1.551,0.678-2.297,1.073L14.38,4.03c-0.583,0.308-1.153,0.639-1.708,0.991l-0.616-1.066
                    c-0.717,0.452-1.409,0.938-2.075,1.455l0.793,0.946C10.254,6.76,9.746,7.18,9.258,7.623L8.465,6.677
                    C7.838,7.245,7.24,7.843,6.673,8.47l0.946,0.794C7.175,9.75,6.755,10.258,6.352,10.78L5.406,9.987
                    c-0.518,0.667-1.003,1.358-1.455,2.075l1.069,0.616c-0.352,0.556-0.685,1.125-0.992,1.71L2.96,13.771
                    c-0.394,0.745-0.751,1.512-1.072,2.297l1.155,0.421c-0.25,0.607-0.477,1.226-0.678,1.856l-1.154-0.422
                    c-0.257,0.801-0.475,1.618-0.655,2.45l1.208,0.213c-0.139,0.64-0.252,1.289-0.341,1.946l-1.206-0.214
                    C0.106,23.149,0.032,23.99,0,24.843h1.223c-0.013,0.328-0.025,0.656-0.025,0.987c0,0.332,0.013,0.661,0.025,0.989H0
                    c0.032,0.852,0.106,1.694,0.22,2.524l1.207-0.213c0.088,0.657,0.201,1.307,0.34,1.946l-1.208,0.214
                    C0.738,32.123,0.956,32.94,1.213,33.74z M25.828,5.152c11.402,0,20.679,9.276,20.679,20.679c0,11.403-9.275,20.68-20.679,20.68
                    c-11.402,0-20.679-9.276-20.679-20.68C5.149,14.428,14.426,5.152,25.828,5.152z"></path>
                    <path d="M25.828,41.639c8.717,0,15.808-7.091,15.808-15.808s-7.091-15.808-15.808-15.808c-8.717,0-15.808,7.091-15.808,15.808
                    S17.111,41.639,25.828,41.639z M25.828,15.951c5.449,0,9.879,4.432,9.879,9.88c0,5.447-4.431,9.881-9.879,9.881
                    c-5.448,0-9.88-4.434-9.88-9.881C15.948,20.383,20.38,15.951,25.828,15.951z"></path>
                    <path d="M32.414,25.83h1.318c0-4.358-3.544-7.904-7.904-7.904v1.317C29.459,19.243,32.414,22.199,32.414,25.83z"></path>
                </g>
            </g>
        </g>
</svg>

export const Menu = () => {

    const [menu, openMenu] = useState(false);

    const menuStyle = cx({
        [styles.menuNone]: menu,
        [styles.burgerMenu]: menu,
        [styles.grid]: true
    })

    return (
        <div className={styles._}>
            <h1 className={styles.logo}>СБ{CAMERA}С</h1>
            <div className={styles.burger} onClick={() => openMenu(!menu)}>
                {menu ? BURGER_X : BURGER}
            </div>
            <div className={menuStyle}>
                <Link className={styles.card} href="/">
                    Главная
                </Link>

                <Link className={styles.card} href="/services">
                    Услуги
                </Link>

                <Link className={styles.card} href="/products">
                    Товары
                </Link>

                <Link className={styles.card} href="/news">
                    Новости
                </Link>

                <Link className={styles.card} href="/contacts">
                    Контакты
                </Link>
            </div>
            <div className={styles.headerBlockPhone}>
                <a className={styles.phone} href="tel:+79773716488">8 (977) 371-64-88</a>
                <p className={styles.none}>Пн-пт с 9:00 до 18:00</p>
            </div>
            <ScrollButton/>
        </div>
    )
}