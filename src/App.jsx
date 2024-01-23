import './App.css'
import {GrFormNext, GrFormPrevious} from "react-icons/gr";
import UserForm from "./components/UserForm.jsx";
import ReviewForm from "./components/ReviewForm.jsx";
import Thanks from "./components/Thanks.jsx";
import {useForm} from "./hooks/useForm.jsx";
import {FiSend} from "react-icons/fi";
import Steps from "./components/Steps.jsx";
import {useState} from "react";

const formTemplate = {
    name: "",
    email: "",
    review: "",
    comment: ""
}

function App() {
    const [data, setData] = useState(formTemplate)

    const updateFielHandler = (key, value) => {
        setData((prev) => {
            return {...prev, [key]: value}
        })
    }

    const formComponents = [
        <UserForm data={data} updateFielHandler={updateFielHandler}/>,
        <ReviewForm data={data} updateFielHandler={updateFielHandler}/>,
        <Thanks data={data}/>
    ]

    const {currentStep, currentComponent, changeStep, isLastStep, isFirstStep} = useForm(formComponents)

    return (
        <div className="app">
            <div className="header">
                <h2>Deixe sua avaliação</h2>
                <p>
                    Ficamos felizes com a sua compra, utilize o formulario abaixo para avaliar o produto
                </p>
            </div>
            <div className="form-container">
                <Steps currentStep={currentStep}/>
                <form onSubmit={(e) => changeStep((currentStep + 1), e)}>
                    <div className="imputs-container">{currentComponent}</div>
                    <div className="actions">
                        {!isFirstStep && (
                            <button type="button" onClick={() => changeStep(currentStep - 1)}>
                                <GrFormPrevious/>
                                <span>Voltar</span>
                            </button>
                        )}
                        {!isLastStep ? (
                            <button type="submit">
                                <span>Avançar</span>
                                <GrFormNext/>
                            </button>
                        ) : (
                            <button type="button">
                                <span>Enviar</span>
                                <FiSend />
                            </button>
                        )}
                    </div>
                </form>

            </div>
        </div>
    )
}

export default App
