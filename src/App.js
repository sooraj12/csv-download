import { useRef, useState } from "react";
import { LegacyLink } from "./LegacyLink";
import { Link } from "./Link";

function fakeApi() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve({
        data: ["Name", "Age", "Company"],
      });
    }, 200);
  });
}

function App() {
  const [csvFileHeader, setCsvFileHeader] = useState([]);
  const downloadRef = useRef("");

  const getDownloadTemplate = () => {
    fakeApi()
      .then((res) => {
        const { data } = res;
        const csvHeaderArray = data.map((field) => ({
          label: field,
          key: field,
        }));
        setCsvFileHeader(csvHeaderArray);
        downloadRef.current.link.click();
      })
      .catch((err) => {});
  };

  return (
    <div>
      <div>
        <button
          className="btn btn-xs"
          type="button"
          onClick={getDownloadTemplate}
        >
          Link
        </button>
        <Link
          ref={downloadRef}
          data={[]}
          filename={`csv_react.csv`}
          headers={csvFileHeader}
        />
      </div>
      <div style={{ marginTop: "8px" }}>
        <LegacyLink />
      </div>
    </div>
  );
}

export default App;
