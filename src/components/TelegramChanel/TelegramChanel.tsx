import Script from "next/script";
import Link from "next/link";

import styles from "./TelegramChanel.module.css";


const TelegramChannel = () => {

    const arr = ['28', '27', '26', '25'];

    return (
        <div className={styles._}>
            <h3>Новости из нашего <Link href="https://t.me/sbosshatura">телеграм канала</Link> :</h3>

            {arr.map((value) => (<div key={value}>
                <Script
                    src="https://telegram.org/js/telegram-widget.js?22"
                    data-telegram-post={`sbosshatura/${value}`}
                    data-width="100%"
                />
                <iframe
                    id={`telegram-post-sbosshatura-${value}`}
                    src={`https://t.me/sbosshatura/${value}?embed=1`}
                    width="100%"
                    height="" frameBorder="0" scrolling="yes"
                    style={{
                        overflow: "hidden",
                        colorScheme: "light dark",
                        border: "none",
                        minWidth: "320px",
                        height: "600px"
                    }}>
                </iframe>
            </div>))}

            {/*<Script*/}
            {/*    src="https://telegram.org/js/telegram-widget.js?22"*/}
            {/*    data-telegram-post={`sbosshatura/14`}*/}
            {/*    data-width="100%"*/}
            {/*/>*/}
            {/*<iframe*/}
            {/*    id={`telegram-post-sbosshatura-14`}*/}
            {/*    src={`https://t.me/sbosshatura/14?embed=1`}*/}
            {/*    width="100%"*/}
            {/*    height="" frameBorder="0" scrolling="yes"*/}
            {/*    style={{*/}
            {/*            overflow: "hidden",*/}
            {/*            colorScheme: "light dark",*/}
            {/*            border: "none",*/}
            {/*            minWidth: "320px",*/}
            {/*            height: "600px"*/}
            {/*    }}>*/}
            {/*</iframe>*/}

            {/*<Script*/}
            {/*    src="https://telegram.org/js/telegram-widget.js?22"*/}
            {/*    data-telegram-post={`sbosshatura/13`}*/}
            {/*    data-width="100%"*/}
            {/*/>*/}
            {/*<iframe*/}
            {/*    id={`telegram-post-sbosshatura-13`}*/}
            {/*    src={`https://t.me/sbosshatura/13?embed=1`}*/}
            {/*    width="100%"*/}
            {/*    height="" frameBorder="0" scrolling="yes"*/}
            {/*    style={{*/}
            {/*        overflow: "hidden",*/}
            {/*        colorScheme: "light dark",*/}
            {/*        border: "none",*/}
            {/*        minWidth: "320px",*/}
            {/*        height: "600px"*/}
            {/*    }}>*/}
            {/*</iframe>*/}
        </div>)
}


export default TelegramChannel;