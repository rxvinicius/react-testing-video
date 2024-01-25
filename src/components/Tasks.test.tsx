import { render, screen } from "@testing-library/react";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";

import Tasks from "./Tasks";

describe("Tasks Component", () => {
  const server = setupServer(
    http.get(
      "https://jsonplaceholder.typicode.com/todos?_limit=10",
      () => {
        return HttpResponse.json([
          {
            userId: 1,
            id: 1,
            title: "delectus aut autem",
            completed: false,
          },
        ]);
      }

      /* http.get(
      "https://jsonplaceholder.typicode.com/todos?_limit=10",
      ({ request, params, cookies }) => {
        return HttpResponse.json([
          {
            userId: 1,
            id: 1,
            title: "delectus aut autem",
            completed: false,
          },
        ]);
      } */
    )
  );

  beforeAll(() => {
    server.listen();
  });

  afterAll(() => {
    // Disable request interception and clean up.
    server.close();
  });

  it("should fetch and show tasks on button click", () => {
    render(<Tasks />);
    const button = screen.getByText(/get tasks from api/i);
  });
});
