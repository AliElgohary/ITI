import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import App from "./App"


const typeIntoInputsElements=({email,password,confirmPass})=>{
    const emailInputElement=screen.getByLabelText('Email address')
    const passwordInputElement=screen.getByLabelText('Password')
    const confirmPassInputElement=screen.getByLabelText('Confirm Password')

    if(email){
        userEvent.type(emailInputElement,email)
    }
    if(password){
        userEvent.type(passwordInputElement,password)
    }
    if(confirmPass){
        userEvent.type(confirmPassInputElement,confirmPass)
    }

    return {
        emailInputElement,
        passwordInputElement,
        confirmPassInputElement
    }


}
describe('Test App Component',()=>{
    beforeEach(()=>{
        render( <App />)
    })

    it('test input initial values',()=>{
        expect(screen.getByLabelText('Email address').value).toBe("")
        expect(screen.getByLabelText('Password').value).toBe("")
        expect(screen.getByLabelText('Confirm Password').value).toBe("")
        // expect(screen.getByTestId('email-input').value).toBe("")
        // expect(screen.getByPlaceholderText('Useremail').value).toBe("")
    })
    it('test inputs values after typing',()=>{
        const {emailInputElement}=typeIntoInputsElements({email:'amira@gmail.com'})
        const {passwordInputElement}=typeIntoInputsElements({password:'123'})
        expect(emailInputElement.value).toBe("amira@gmail.com")
        expect(passwordInputElement.value).toBe("123")
    })
    it('test error when inputs have non valid data',()=>{
        const {emailInputElement}=typeIntoInputsElements({email:'amir@agmail.com',password:'123'})
        const btn=screen.getByRole("button",{name:/Submit/i})
        userEvent.click(btn)
        expect(screen.queryByText(/The email you input is invalid./)).not.toBeInTheDocument()
        expect(screen.queryByText(/The password you entered should contain 5 or more characters./)).toBeInTheDocument()
    })
})