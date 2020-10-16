import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { LinkButton } from "../components/Buttons";
import Layout from "../components/Layout";
import { LoadIndicator } from "../components/LoadIndicator";
import { PostPreviewItem } from "../components/PostPreview";
import { PageTitle } from "../components/Titles";
import { useIsLoading } from "../loading";
import { StoreShape } from "../store/shape";
import { thunkFetchPosts } from "../store/thunks";
import { PostPreview } from "../types";

const HomeComponent = (props: {
    posts: PostPreview[];
    fetchPosts: () => Promise<void>;
}) => {
    useEffect(() => {
        if (props.posts.length === 0) {
            props.fetchPosts();
        }
    }, []);

    const isLoading = useIsLoading(props.posts.length, (l) => l !== 0);

    return (
        <Layout title={"Home"}>
            <HomeHead>
                <PageTitle>Welcome to The Blog!</PageTitle>

                <p className="description">Go read all the articles!</p>
            </HomeHead>

            {isLoading ? <LoadIndicator /> : undefined}

            <PostsList>
                {props.posts.map((post) => (
                    <PostPreviewItem {...post} />
                ))}
            </PostsList>

            <HomeFooter>
                <LinkButton href={"posts/new"}>Add post</LinkButton>
            </HomeFooter>
        </Layout>
    );
};

const PostsList = styled.ul`
    margin-left: 0;
    padding: 30px 0 0;
    list-style: none;
`;

const HomeHead = styled.div`
    text-align: center;
`;

const HomeFooter = styled.div`
    padding: 30px 0;
    text-align: center;
`;

const mapStateToProps = (state: StoreShape) => ({
    posts: state.posts,
});

const mapDispatchToProps = (dispatch: any) => ({
    fetchPosts: () => dispatch(thunkFetchPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
