import { render, screen } from "@testing-library/react"
import LoadingOverlay from "~/components/feedback/LoadingOverlay"
import { useAppStore } from "~/stores/index"

const expectedText = "Loading..."

const renderOverlay = () => {
  return render(<LoadingOverlay />)
}

describe("LoadingOverlay", () => {
  it("renders overlay and text when isPending is true", () => {
    useAppStore.setState({ isPending: true, text: expectedText })
    renderOverlay()
    expect(screen.getByRole("progressbar", { hidden: true })).toBeInTheDocument()
    expect(screen.queryByTestId("loading-text")).toBeInTheDocument()
  })

  it("does not render overlay when isPending is false", () => {
    useAppStore.setState({ isPending: false, text: expectedText })
    renderOverlay()
    // MUI Backdrop uses role="presentation" and aria-hidden when closed
    const backdrop = screen.queryByRole("presentation")
    expect(backdrop).not.toBeInTheDocument()
  })

  it("does not render Typography when text is null", () => {
    useAppStore.setState({ isPending: true, text: null })
    renderOverlay()
    expect(screen.queryByTestId("loading-text")).not.toBeInTheDocument()
  })
})
