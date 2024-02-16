import { fireEvent, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import CheckboxWithLabel from "./CheckboxWithLabel"


describe("Test CheckboxWithLabel",()=>{
    it('CheckboxWithLabel',()=>{
        render(<CheckboxWithLabel labelOn="On" labelOff="Off"  />)
        expect(screen.queryByLabelText(/Off/)).toBeInTheDocument()
        userEvent.click(screen.queryByLabelText(/Off/))
        expect(screen.queryByLabelText(/On/)).toBeInTheDocument()
    })
})