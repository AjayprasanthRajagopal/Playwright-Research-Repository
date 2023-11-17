export default function staticDataSetup (suite: string) {
  const env = process.env["ENV"] || "qastg";
  // returns env specific test data for the suite
  const dataPath = `../lib/testData/${env}/${suite}/testData`;
  console.info(dataPath);
  console.log("TestData path ===>" + dataPath);
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  return require(dataPath).default;
}
