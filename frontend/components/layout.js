import Head from 'next/head'

export default function Layout({children, home}){
    return (
        <div>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="og:title" content="Milchiever" />
            </Head>
            <main>{children}</main>
            <nav className="fixed inset-x-0 top-0">
                <div>Nav Bar</div>
            </nav>
        </div>
    )
}