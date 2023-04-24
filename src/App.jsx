import "./App.css";
import Header from "./assets/components/Header";
import Jobs from "./assets/components/Jobs";
import Footer from "./assets/components/Footer";

const titlePage = "The job board";
const coderName = "elsa";
const job1 = {
  color: "red",
  title: "AA",
  contractType: "CDD",
  country: "France",
  city: "Paris",
};
const job2 = {
  color: "blue",
  title: "BBded",
  contractType: "CDD",
  country: "USA",
  city: "NYC",
};
const job3 = {
  color: "red",
  title: "CC",
  contractType: "CDD",
  country: "France",
  city: "Paris",
};
const job4 = {
  color: "blue",
  title: "DD",
  contractType: "CDD",
  country: "USA",
  city: "NYC",
};

function App() {
  return (
    <div className="page">
      <div className="container">
        <Header mainTitle={titlePage} />
        <section className="jobBox">
          <div className={job1.color}>
            <Jobs
              title={job1.title}
              contractType={job1.contractType}
              country={job1.country}
              city={job1.city}
            />
          </div>
          <div className={job2.color}>
            <Jobs
              title={job2.title}
              contractType={job2.contractType}
              country={job2.country}
              city={job2.city}
            />
          </div>
          <div className={job3.color}>
            <Jobs
              title={job3.title}
              contractType={job3.contractType}
              country={job3.country}
              city={job3.city}
            />
          </div>
          <div className={job4.color}>
            <Jobs
              title={job4.title}
              contractType={job4.contractType}
              country={job4.country}
              city={job4.city}
            />
          </div>
        </section>
        <Footer name={coderName} />
      </div>
    </div>
  );
}

export default App;
