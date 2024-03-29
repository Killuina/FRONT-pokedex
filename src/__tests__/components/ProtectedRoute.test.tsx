import { screen } from "@testing-library/react";
import mockRouter from "next-router-mock";
import ProtectedRoute from "../../components/ProtectedRoute/ProtectedRoute";
import Component from "../../mocks/componentMocks/componentMock";
import {
  mockNoTokenUserState,
  mockWithTokenUserState,
} from "../../mocks/storeMocks/storeMocks";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";

jest.mock("next/router", () => require("next-router-mock"));

const spyMockRouter = jest.spyOn(mockRouter, "push");

describe("Given the ProtectedRoute component", () => {
  describe("When it is rendered receiving a Component as a children, and the user has a token", () => {
    test("Then it should render the received Component element", () => {
      renderWithProviders(
        <Component />,

        { user: mockWithTokenUserState }
      );

      const component = screen.getByText("Component");

      expect(component).toBeInTheDocument();
    });
  });

  describe("When it is rendered and the user doesn't have a token", () => {
    test("Then it should redirect to login page", () => {
      renderWithProviders(
        <ProtectedRoute>
          <Component />
        </ProtectedRoute>,
        { user: mockNoTokenUserState }
      );

      expect(spyMockRouter).toHaveBeenCalled();
    });
  });
});
