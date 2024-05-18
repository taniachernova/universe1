import Link from "next/link";
import Head from "next/head"; 
import { Fragment, useEffect } from "react";

const Page404 = () => {
    useEffect(() => {
        // Client-side navigation için URL'yi 404 olarak ayarlamak.
        if (typeof window !== 'undefined') {
            window.history.replaceState(null, '', '/404');
        }
    }, []);

    return (
        <Fragment>
            <Head>
                <title>404 ERROR - Page can't be found!</title>
            </Head>

            <div className="tt-offset-0 container-indent">
                <div className="tt-page404">
                    <div className="tt-page404-content">
                        <img src="/assets/images/no-placeholder/error.png" alt="404 not found error"/>
                        <h1 className="tt-title">THAT PAGE CAN’T BE FOUND.</h1>
                        <p>It looks like nothing was found at this location.</p>
                        <Link href="/" className="btn">GO TO HOME</Link>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export async function getStaticProps({ res }) {
    if (res) {
        res.statusCode = 404; // Yanıt kodunu 404 olarak ayarlama
    }

    return {
        props: {}, // Sayfaya herhangi bir prop göndermeye gerek yok
    };
}

export default Page404;
