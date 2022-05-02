import { relativeTime, transformData } from "../../utils/utils";
// eslint-disable-next-line jest/no-mocks-import
import { mockTransformData } from "../../__mocks__/mockData";

describe("check whether relative time calculates correctly", () => {

  test("calculates relative time for current time", () => {
    const currentTime = 1641713089;
    const previousTime = 1641514045;
    const answer = "approximately 2 days ago";

    const returnedAnswer = relativeTime(currentTime, previousTime);
    expect(returnedAnswer).toEqual(answer);
  });

});

describe("check whether data is transformed correctly", () => {

  test("check for correct transformation", () => {
    const expectedTransformation = ["1. Index:         1234", "2. Hash:          1245tjgtgrejred444444", "3. Time:          124567", "4. Version:       12345", "5. Previous hash: 253659326262tttknfjkf", "6. Size:          123567"];

    const returnedTransformation = transformData(mockTransformData);
    expect(returnedTransformation).toEqual(expectedTransformation);
  });

});
