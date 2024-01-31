import Head from "next/head";
import AppLayout from "../../layouts/appLayout";

const Edit = ({ params }: { params: { idCat: string } }) => {
  console.log(`tes ${params}`);
  return (
    <AppLayout>
      <>
        <Head>
          <title>Edit Category</title>
        </Head>
        <section className="p-10">
          <div className="max-w-screen-md mx-auto">
            <h2>Edit Category</h2>
          </div>
        </section>
      </>
    </AppLayout>
  );
};

export default Edit;
