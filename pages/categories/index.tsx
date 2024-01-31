import { NextPage } from "next";
import Head from "next/head";
import AppLayout from "../layouts/appLayout";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
const Index: NextPage = ({ categories }) => {
  const [deleteMessage, setDeleteMessage] = useState("");

  function handleDelete(id) {
    const isConfirmed = window.confirm(
      "Apakah Anda yakin ingin menghapus data ini ?"
    );

    if (isConfirmed) {
      fetch(`http://127.0.0.1:8000/api/categories/${id}`, {
        method: "DELETE",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to delete category");
          }
          return response.json();
        })
        .then((data) => {
          setDeleteMessage(data.msg);
        })
        .catch((error) => {
          console.error("Error deleting category:", error);
        });
    }
  }

  function handleRefresh() {
    window.location.reload();
  }

  return (
    <AppLayout>
      <>
        <Head>
          <title>Categories</title>
        </Head>
        <section className="p-10">
          <div className="overflow-x-auto max-w-screen-md mx-auto">
            {deleteMessage && (
              <>
                <div role="alert" className="alert">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="stroke-info shrink-0 w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <span> {deleteMessage}.</span>
                  <div>
                    <button
                      className="btn btn-sm btn-primary"
                      onClick={handleRefresh}
                    >
                      Refresh
                    </button>
                  </div>
                </div>
              </>
            )}
            <Link href={`/categories/create`}>
              <button className="btn my-5 btn-primary mr-2">
                Add Categories
              </button>
            </Link>

            <table className="table table-zebra ">
              <thead className="bg-gray-700 text-white text-center">
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((category, i) => (
                  <tr key={category.id} className="text-center">
                    <td>{i + 1}</td>
                    <td>{category.name}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-error mr-2"
                        onClick={() => handleDelete(category.id)}
                      >
                        delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </>
    </AppLayout>
  );
};

export async function getServerSideProps() {
  const res = await fetch("http://127.0.0.1:8000/api/categories");
  const data = await res.json();

  return {
    props: {
      categories: data.categories,
    },
  };
}

export default Index;
