export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "608fbca321e6751e52f5d299",
                  title: "Sanity Studio",
                  name: "frenchies-in-montreal-blog-studio",
                  apiId: "b9e1c605-fea7-4ab0-baca-4d8115492dbc",
                },
                {
                  buildHookId: "608fbca31facd94991072a0e",
                  title: "Blog Website",
                  name: "frenchies-in-montreal-blog",
                  apiId: "0ecede0e-8f33-4db1-a846-0d2ea6330f88",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/grossyoan/frenchies-in-montreal-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://frenchies-in-montreal-blog.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
