import './App.css'
import { DonationForm } from './app/DonationForm'
import { NavBar } from './components/navbar'

export const App = () => {
    return (
        <div className="bg-backgroundPage">
            <NavBar className="hidden md:block" />
            <div className="md:py-16">
                <DonationForm />
            </div>
        </div>
    )
}
