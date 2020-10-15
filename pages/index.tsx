import Link from "next/dist/client/link";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Button } from "../components/buttons";
import Layout from "../components/layout";
import { PostPreviewItem } from "../components/PostPreview";
import { PageTitle } from "../components/Titles";
import { StoreShape } from "../store/shape";
import { thunkFetchPosts } from "../store/thunks";
import { PostPreview } from "../types";

const HomeComponent = (props: { posts: PostPreview[], fetchPosts: () => void }) => {
    useEffect(() => {
        if (props.posts.length === 0) {
            props.fetchPosts();
        }
    }, []);

    return (
        <Layout title={'Blog'}>
                <HomeHead>
                    <PageTitle>
                        Welcome to The Blog!
                    </PageTitle>

                    <p className="description">
                        Go read all the articles!
                    </p>
                </HomeHead>

                <PostsList>
                    {props.posts.map(post => <PostPreviewItem {...post} />)}
                </PostsList>

                <HomeFooter>
                    <Button><Link href={'/posts/new'}>Add post</Link></Button>
                </HomeFooter>
        </Layout>
    )
};

const PostsList = styled.ul`
    margin-left: 0;
    padding: 0;
    list-style: none;
`;

const HomeHead = styled.div`
    text-align:center;
`;

const HomeFooter = styled.div`
    padding: 30px 0;
    text-align: center;
`;

const mapStateToProps = (state: StoreShape) => ({
    posts: state.posts,
});

const mapDispatchToProps = (dispatch: any) => ({
    fetchPosts: () => dispatch(thunkFetchPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
