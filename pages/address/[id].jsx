import MyPage from "../../components/My/My";
import Invalid from "../../components/My/Invalid";
import ownedBy from "../../lib/ownedBy";
import Head from "next/head";
import { NextSeo } from "next-seo";

const My = (props) => {
  if (props.err == "invalid") {
    return (
      <>
        <Head>
          <title>Invalid Address</title>
        </Head>
        <Invalid text={`invalid address: ${props.addr.substring(0, 8)}...`} />
      </>
    );
  }
  const pageTitle = `Address ${props.addr.substring(0, 6)} on LuxeMarketplace`;
  return (
    <>
      <NextSeo
        title={pageTitle}
        description={`View NFTs owned by ${props.addr.substring(0, 4)}...`}
      />
      <MyPage data={props.data} addr={props.addr} />
    </>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.query;
  let hexID = id.startsWith("0x") ? id : `0x${id}`;
  try {
    const data = await ownedBy(hexID);
    return {
      props: {
        data: data,
        addr: hexID,
      },
    };
  } catch (err) {
    return { props: { err: "invalid", addr: hexID } };
  }
}

export default My;
