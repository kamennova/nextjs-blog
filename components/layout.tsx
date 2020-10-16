import Link from "next/dist/client/link";
import Head from "next/dist/next-server/lib/head";
import React from "react";
import styled from "styled-components";
import { Colors } from "../Colors";
import { PageContainer } from "./Containers";
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
                            <Link href={"/posts/new"}>New post</Link>
                        </li>
                    </Links>
                </nav>
            </MainHeader>
            <PageContainer>
                <main>{props.children}</main>
                <Footer>
                    <LinkWrap>
                        <GithubIcon size={20} />
                        <a href={"https://github.com/kamennova/nextjs-blog"}>
                            nextjs-blog
                        </a>
                    </LinkWrap>
                    <FooterNote>No copyright intended </FooterNote>
                </Footer>
            </PageContainer>
        </>
    );
}

const MainHeader = styled.header`
    padding: 15px 20px 24px;
    border-right: 2px solid ${Colors.grey};
    border-left: 2px solid ${Colors.grey};
    border-bottom: 2px solid ${Colors.grey};
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
        padding: 0 3px;
    }
`;

const LinkWrap = styled.span`
    display: flex;
    justify-content: center;
    padding: 3px 0;

    a {
        margin-left: 5px;
        color: black;
    }
`;

const Footer = styled.footer`
    display: flex;
    align-content: center;
    justify-content: center;
    padding: 40px 0;
    font-size: 14px;
    text-align: center;
`;

const FooterNote = styled.p`
    position: relative;
    color: grey;
    display: inline;
    margin: 0 0 0 30px;
    text-align: center;

    &:after {
        content: "";

        display: block;
        position: absolute;
        left: -17px;
        top: 10px;
        background: black;
        width: 5px;
        height: 2px;
    }
`;
