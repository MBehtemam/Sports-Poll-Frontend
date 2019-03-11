import wait from "waait";
import { MockedProvider } from "react-apollo/test-utils";
import renderer from "react-test-renderer";
import CountriesTable from "./CountriesTable";
import Countries, { ALL_COUNTRIES_QUERY } from "./Countries";
const mocks = [
  {
    request: {
      query: ALL_COUNTRIES_QUERY
    },
    result: {
      data: {
        countries: [
          {
            id: "cjst7mjn9dpby0b50l1pbrw5p",
            name: "Sweden",
            flag: "se"
          },
          {
            id: "cjsv1k4wplbgp0b87p5dzo8bi",
            name: "Espain",
            flag: "es"
          },
          {
            id: "cjsv1khwqlbh90b874ks162dn",
            name: "France",
            flag: "fr"
          },
          {
            id: "cjsv1l8s1lbhw0b87qfbokv98",
            name: "Brazil",
            flag: "br"
          },
          {
            id: "cjsv2ea5kldht0b87otjhm8mw",
            name: "US",
            flag: "us"
          }
        ]
      }
    }
  }
];
describe("Tests for Countries Table", () => {
  it("should work without break", () => {
    renderer.create(
      <MockedProvider mocks={mocks} addTypename={false}>
        <CountriesTable />
      </MockedProvider>
    );
  });
});
