import { GetServerSideProps, NextPage } from "next";
import { ReactNode, useState } from "react";
import Layout from "@/components/layout";

type Props = {
    initialImageUrl: string;
}

const IndexPage: NextPage<Props> = ({ initialImageUrl }) => {
    const [imageUrl, setImageUrl] = useState(initialImageUrl);
    const [loading, setLoading] = useState(false);

    const handleClick = async () => {
        setLoading(true);
        const newImage = await fetchImage();
        setImageUrl(newImage.url);
        setLoading(false);
    }

    return (
        <Layout>
            <div className="p-3 p-md-5 m-md-3 text-center">
            <button onClick={handleClick}>他の猫も見る</button>
            <div>{ loading || <img src={imageUrl} /> }</div>
            </div>


        </Layout>
    )
}

export default IndexPage;

export const getServerSideProps: GetServerSideProps<Props> = async() => {
    const image = await fetchImage();
    return {
        props: {
            initialImageUrl: image.url,
        }
    }
}

type Image = {
    url: string;
}

const fetchImage = async () : Promise<Image> => {
    const res = await fetch("https://api.thecatapi.com/v1/images/search");
    const images: unknown = await res.json();

    if (!Array.isArray(images)) {
        throw new Error("猫の画像が取得できませんでした。");
    }

    const image: unknown = images[0];
    if (!isImage(image)) {
        throw new Error("猫の画像が取得できませんでした。");
    }

    return image;
}

const isImage = (value: unknown): value is Image => {
    if (!value || typeof value !== "object") {
        return false;
    }

    return "url" in value && typeof value.url === "string";
}