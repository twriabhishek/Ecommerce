const Home = () => {
  return (
    <>
      <section className="home-section">
        <div className="outlet-container" style={{ height: "100vh" }}>
          <section className="sec-1 d-flex justify-content-center align-items-center">
            <div>
              <form class="d-flex">
                <input
                  class="form-control mr-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Home;
