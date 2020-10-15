import Link from "next/dist/client/link";
import Head from "next/dist/next-server/lib/head";
import React from "react";
import styled from "styled-components";
import { GithubIcon } from "./icons/Github";

export default function Layout(props: {
    children: JSX.Element | (JSX.Element | undefined)[];
    title: string;
}) {
    return (
        <>
            <Head>
                <title>{props.title} | Blog</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MainHeader>
                <nav className="main-nav">
                    <Links>
                        <li>
                            <Link href={"/"}>Blog</Link>
                        </li>
                        <li>
                            <Link href={"/posts/my"}>My posts</Link>
                        </li>
                        <li>
                            <Link href={"/posts/new"}>Add post</Link>
                        </li>
                    </Links>
                </nav>
            </MainHeader>
            <PageContainer>
                <main>{props.children}</main>
                <Footer>
                    <GithubIcon size={20} />
                    <a href={"https://github.com/kamennova/nextjs-blog"}>
                        nextjs-blog
                    </a>
                    <FooterNote>No copyright intended </FooterNote>
                </Footer>
            </PageContainer>
        </>
    );
}

const PageContainer = styled.div`
    width: 700px;
    max-width: 100%;
    margin: 0 auto;
`;

const MainHeader = styled.header`
    padding: 15px 20px 24px;
    border-right: 2px solid black;
    border-left: 2px solid black;
    border-bottom: 2px solid black;
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
    text-align: center;
    width: 650px;
    margin: 0 auto 40px;
`;

const Links = styled.ul`
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    justify-content: center;

    li {
        margin-right: 65px;

        &:last-of-type {
            margin-right: 0;
        }
    }

    a {
        text-decoration: none;
        color: black;
        font-weight: bold;
        background-color: #eee;
        padding: 0 3px;
    }
`;
const Footer = styled.footer`
    padding: 40px 0;
    font-size: 14px;
    text-align: center;
`;

const FooterNote = styled.p`
    color: grey;
    display: inline;
    margin-left: 15px; 
    text-align: center;
    position: relative;
    
    &::before {
        content: '',
        
        display: block;
        position: absolute;
        left: -10px;
        top: 0;
        width: 1px;
        height: 14px;
        background: grey;
    }
`;
