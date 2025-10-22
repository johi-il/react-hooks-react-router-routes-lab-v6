import NavBar from "../components/NavBar";

function ErrorPage() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main style={{ padding: "1rem", textAlign: "center" }}>
        <h1>Oops! Looks like something went wrong.</h1>
        <p>Please check the URL or use the navigation above to go back.</p>
      </main>
    </>
  );
}

export default ErrorPage;
