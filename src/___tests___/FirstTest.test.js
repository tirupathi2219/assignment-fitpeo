import { render, screen } from "@testing-library/react";
import DashboardOverview from "../components/DashboardOverview/DashboardOverview";

test('test for heading ', () => {
    render(<DashboardOverview />)

    const element = screen.getByText(/Hello Shahrukh/i);
    
    expect(element).toBeInTheDocument;
});
