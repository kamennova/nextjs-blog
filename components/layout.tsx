import Link from "next/dist/client/link";
import Head from "next/dist/next-server/lib/head";
import styled from "styled-components";

const PageContainer = styled.div`
    width: 700px;
    max-width: 100%;
    margin: 0 auto;
`;

const MainHeader = styled.header`
    padding: 20px;
    text-align: center;
`;

const Links = styled.ul`
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    justify-content: center;
    
    li {
    margin-right: 25px;
    }
    
    a {
    color: black;
    }
`;

export default function Layout(props: { children: JSX.Element, title: string }) {
    return (
        <>
            <Head>
                <title>{props.title}</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <PageContainer>
                <MainHeader>
                    <nav className="main-nav">
                        <Links>
                            <li><Link href={'/'}>Home</Link></li>
                            <li><Link href={'/posts/new'}>Create post</Link></li>
                        </Links>
                    </nav>
                </MainHeader>
                <main>
                    {props.children}
                </main>
                <footer>

                </footer>
            </PageContainer>
        </>
    );
}
