import { rest } from "msw";
import { setupServer } from "msw/node";
import catMock from "../../../mocks/cats.json";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Pets from "../Pets";

const server = setupServer(
  rest.get("http://localhost:4000/cats", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(catMock));
  })
);

describe("Test Pets component", () => {
  beforeEach(() => {
    render(<Pets />);
  });
  // Enable request interception.
  beforeAll(() => server.listen());
  // Reset handlers so that each test could alter them
  // without affecting other, unrelated tests.
  afterEach(() => server.resetHandlers());

  // Don't forget to clean up afterwards.
  afterAll(() => server.close());

  it("initail show 5 cats cards", async () => {
    const cards = await screen.findAllByRole("article");
    expect(cards.length).toEqual(5);
  });

  it("should render 3 female cats after selected female gender", async () => {
    const cards = await screen.findAllByRole("article");
    userEvent.selectOptions(screen.getByLabelText(/Gender/i), "female");
    expect(screen.getAllByRole("article")).toStrictEqual([
      cards[0],
      cards[2],
      cards[4],
    ]);
    expect(screen.getAllByRole("article").length).toEqual(3);
  });

  it("should render 2 Male cats after selected male gender", async () => {
    const cards = await screen.findAllByRole("article");
    userEvent.selectOptions(screen.getByLabelText(/Gender/i), "male");
    expect(screen.getAllByRole("article")).toStrictEqual([cards[1], cards[3]]);
    expect(screen.getAllByRole("article").length).toEqual(2);
  });

  it("should render 5 cats after selected Any gender", async () => {
    userEvent.selectOptions(screen.getByLabelText(/Gender/i), "any");
    const cards = await screen.findAllByRole("article");
    expect(cards.length).toEqual(5);
  });

  it("should render 1 cat if selected favoured", async () => {
    const cards = await screen.findAllByRole("article");
    userEvent.selectOptions(screen.getByLabelText(/favourite/i), "favoured");
    expect(screen.getAllByRole("article").length).toEqual(1);
  });

  it("should render 4 cats if selected not favoured", async () => {
    
    const cards = await screen.findAllByRole("article");
    userEvent.selectOptions(screen.getByLabelText("Favourite"), "not favoured");
    expect(screen.getAllByRole("article").length).toEqual(4);
  });
});
