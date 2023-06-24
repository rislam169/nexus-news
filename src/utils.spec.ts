import { createInitial, reformatArticles, stringToArray } from "./utils";

describe("utils", () => {
  // Test reformatArticles function
  describe("reformatArticles", () => {
    const article = [
      {
        source: "The New York Times",
        category: "Science",
        author: "Kate Golembiewski",
        title: "The Secret in the Spots on Monarch Butterflies’ Wings",
        description:
          "The wings of monarchs that survive a 2,000-mile-long migration tend to be spottier, suggesting that feature may aid the insects’ ability to fly.",
        url: "https://www.nytimes.com/2023/06/21/science/monarch-butterflies-spots-wings.html",
        image_url:
          "https://www.nytimes.com/images/2023/06/27/multimedia/21tb-monarchs-tqzm/21tb-monarchs-tqzm-articleLarge.jpg",
        published_at: "2023-06-21",
      },
      {
        source: "Google News",
        category: "General",
        author: "Anonymous",
        title:
          "Putin says Russia sees 'lull' in Ukrainian counteroffensive - Reuters.com",
        description:
          "Putin says Russia sees 'lull' in Ukrainian counteroffensive  Reuters.com",
        url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiZ2h0dHBzOi8vd3d3LnJldXRlcnMuY29tL3dvcmxkL2V1cm9wZS9wdXRpbi1zYXlzLXJ1c3NpYS1zZWVzLWx1bGwtdWtyYWluaWFuLWNvdW50ZXJvZmZlbnNpdmUtMjAyMy0wNi0yMS_SAQA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
        image_url:
          "https://i.insider.com/648de17251ea980019d6c024?width=1200&format=jpeg",
        published_at: "2023-06-21",
      },
    ];

    const expectedArticles = {
      Science: [
        {
          category: "Science",
          author: "Kate Golembiewski",
          title: "The Secret in the Spots on Monarch Butterflies’ Wings",
          description:
            "The wings of monarchs that survive a 2,000-mile-long migration tend to be spottier, suggesting that feature may aid the insects’ ability to fly.",
          url: "https://www.nytimes.com/2023/06/21/science/monarch-butterflies-spots-wings.html",
          img: "https://www.nytimes.com/images/2023/06/27/multimedia/21tb-monarchs-tqzm/21tb-monarchs-tqzm-articleLarge.jpg",
          publishDate: "2023-06-21",
        },
      ],
      General: [
        {
          category: "General",
          author: "Anonymous",
          title:
            "Putin says Russia sees 'lull' in Ukrainian counteroffensive - Reuters.com",
          description:
            "Putin says Russia sees 'lull' in Ukrainian counteroffensive  Reuters.com",
          url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiZ2h0dHBzOi8vd3d3LnJldXRlcnMuY29tL3dvcmxkL2V1cm9wZS9wdXRpbi1zYXlzLXJ1c3NpYS1zZWVzLWx1bGwtdWtyYWluaWFuLWNvdW50ZXJvZmZlbnNpdmUtMjAyMy0wNi0yMS_SAQA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
          img: "https://i.insider.com/648de17251ea980019d6c024?width=1200&format=jpeg",
          publishDate: "2023-06-21",
        },
      ],
    };

    it("should reformat the articles to be displayed", () => {
      expect(reformatArticles(article)).toEqual(expectedArticles);
    });
  });

  // Test createInitial function
  describe("createInitial", () => {
    test.each`
      name                       | expected
      ${"Md Rafiqul Islam"}      | ${"MR"}
      ${"John Doe Peter Nathan"} | ${"JD"}
      ${"John Doe"}              | ${"JD"}
      ${"John"}                  | ${"JO"}
      ${""}                      | ${""}
      ${undefined}               | ${""}
      ${null}                    | ${""}
    `("generates $expected as initial for $name", ({ name, expected }) => {
      expect(createInitial(name)).toEqual(expected);
    });
  });

  // Test stringToArray function
  describe("stringToArray", () => {
    test.each`
      string              | separator | expected
      ${"Health,Science"} | ${","}    | ${["Health", "Science"]}
      ${"Health#Science"} | ${"#"}    | ${["Health", "Science"]}
      ${"Health/Science"} | ${"/"}    | ${["Health", "Science"]}
    `(
      "Splits $string using $separator as separator",
      ({ string, separator, expected }) => {
        expect(stringToArray(string, separator)).toEqual(expected);
      }
    );
  });
});
