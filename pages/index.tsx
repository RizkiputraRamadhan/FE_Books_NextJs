// pages/index.tsx
import { NextPage } from "next";
import Head from "next/head";
import AppLayout from "./layouts/appLayout";

const Index: NextPage = () => {
  return (
    <AppLayout>
      <>
        <Head>
          <title>frontend_next_js</title>
        </Head>
        <section className="bg-gray-100 text-gray-800">
          <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
            <h1 className="text-4xl font-bold leadi sm:text-5xl">
              Quisquam necessita vel
              <span className="text-violet-600">laborum doloribus</span>delectus
            </h1>
            <p className="px-8 mt-8 mb-12 text-lg">
              Cupiditate minima voluptate temporibus quia? Architecto beatae
              esse ab amet vero eaque explicabo!
            </p>
            <div className="flex flex-wrap justify-center">
              <button className="px-8 py-3 m-2 text-lg font-semibold rounded text-gray-50 bg-violet-600">
                Get started
              </button>
              <button className="px-8 py-3 m-2 text-lg border rounded text-gray-900 border-gray-300">
                Learn more
              </button>
            </div>
          </div>
        </section>
      </>
    </AppLayout>
  );
};

export default Index;
