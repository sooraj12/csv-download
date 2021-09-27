const fakeApi = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: ["Name", "Age", "Company"],
      });
    }, 200);
  });
};

function LegacyLink() {
  const downloadTemplate = () => {
    fakeApi()
      .then((res) => {
        const { data } = res;
        let csv = "";
        data.forEach(function (column) {
          csv += column + ",";
        });
        const hiddenElement = document.createElement("a");
        hiddenElement.href = "data:text/csv;charset=utf-8," + encodeURI(csv);
        console.log(hiddenElement.href);
        hiddenElement.target = "_blank";
        hiddenElement.download = "csv file.csv";
        // hiddenElement.click();
      })
      .catch((err) => {});
  };

  return (
    <button type="button" onClick={downloadTemplate}>
      Legacy Link
    </button>
  );
}

export { LegacyLink };
