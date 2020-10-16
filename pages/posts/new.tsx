import { useRouter } from "next/router";
import React, { useState } from "react";
import { connect } from "react-redux";
import { Button } from "../../components/buttons";
import { Centering } from "../../components/Containers";
import { FormControl, TextArea, TextInput } from "../../components/inputs";
import Layout from "../../components/layout";
import { thunkPublishPost } from "../../store/thunks";

type PageProps = {
    publish: (t: string, b: string) => void;
    saveDraft: (t: string, b: string) => void;
};

const NewPostPage = (props: PageProps) => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [tip, setTip] = useState("");
    const router = useRouter();

    const validate = (): boolean => {
        if (title.length === 0) {
            setTip("Title can not be empty!");
            return false;
        } else if (body.length === 0) {
            setTip("Post body can not be empty!");
            return false;
        } else {
            setTip("");
        }

        return true;
    };

    const tryPublish = async () => {
        if (validate()) {
            const id = await props.publish(title, body);
            if (id !== undefined) {
                router.push(`/posts/${id}`);
            }
        }
    };

    return (
        <Layout title={"New post"}>
            <FormControl label={"title"}>
                <TextInput
                    val={title}
                    setVal={(e) => setTitle(e.target.value)}
                    name={"body"}
                />
            </FormControl>
            <FormControl label={"content"}>
                <TextArea
                    rows={12}
                    val={body}
                    setVal={(e) => setBody(e.target.value)}
                    name={"body"}
                />
            </FormControl>
            {tip.length > 0 ? <p>{tip}</p> : undefined}

            <Centering>
                <Button onclick={tryPublish}>Publish</Button>
            </Centering>
        </Layout>
    );
};

const mapDispatchToProps = (dispatch: any) => ({
    publish: (title: string, body: string) =>
        dispatch(thunkPublishPost(title, body)),
});

export default connect(undefined, mapDispatchToProps)(NewPostPage);
