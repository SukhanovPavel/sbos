import {useState} from "react";
import Head from "next/head";
import {Header} from "@/components/Header/Header";
import {Menu} from "@/components/Menu/Menu";
import {Modal} from "@/components/Modal/Modal";

import {DONE} from "@/components/Sets/Sets";

import styles from "../../components/AboutInstall/AboutInstall.module.css";

export default function StreetCamera() {

    const [modal, openModal] = useState(false);

    return (
        <>
            <Head>
                <title>Видеонаблюдение для улицы. Камера на улице</title>
                <meta name="description" content="Видеонаблюдения для улицы. Камера на улицу. Видеонаблюдение, системы безопасности, камеры, оборудование. Установка систем видеонаблюдения в Шатуре" />
                <meta name="google-site-verification" content="IzFALKrcQFz7KVJk9bHAIA0HHB97L5X9FZn5EWwPYBk" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="yandex-verification" content="5710205815328da3" />
                <link rel="icon" href="/favicon.webp" />
            </Head>
            <Header handleClick={() => openModal(true)}/>
            <Menu />
            <main className={styles.main}>
                <div className={styles._}>
                    <h1>УСТАНОВКА ВИДЕОНАБЛЮДЕНИЯ НА УЛИЦЕ</h1>
                    <div className={styles.blocks}>
                        <div className={styles.block}>
                            <img
                                className={styles.img}
                                src="https://hddfile.com/assets/galleries/54955/oktjabrskaja8a.jpg"
                                alt="camera at street"
                            />
                        </div>
                        <div className={styles.block}>
                            <h3>Цена от 9990 руб.</h3>
                            <div>Кол-во камер: 2</div>
                            <div>Срок установки: 1 день</div>
                            <button onClick={() => openModal(true)}>Заказать</button>
                            <p>
                                Мы занимаемся установкой готовых систем видеонаблюдения для улицы. Позвоните, поможем
                                подобрать решение, отвечающее потребностям. Мы установим комплектацию, способную
                                выполнить все поставленные задачи. Советуем не откладывать обращение. Предлагаем вам
                                установку видеорегистрации по конкурентной цене в Москве. Сделаем работу качественно,
                                поможем разобраться в управлении и предоставим гарантию на работу и оборудование.
                            </p>
                            <div>{DONE}  Бесплатный выезд специалиста</div>
                            <div>{DONE}  Гарантия 5 лет</div>
                            <div>{DONE}  Сертифицированное оборудование</div>
                        </div>
                    </div>
                </div>
            </main>

            {modal ? <Modal handleCloseModal={() => openModal(false)}/> : null}
        </>
    )};