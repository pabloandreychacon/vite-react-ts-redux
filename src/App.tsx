import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { addTopping, removeTopping } from './redux/reducer'
import type { RootState } from './redux/store'
import { useState } from 'react'

const AVAILABLE_TOPPINGS = [
  "cheese",
  "pepperoni",
  "mushrooms",
  "onions",
  "peppers",
  "sausage",
  "bacon",
  "olives"
];

function App() {
  const pizza = useSelector((state: RootState) => state.pizza)
  const dispatch = useDispatch()
  const [selectedTopping, setSelectedTopping] = useState("")

  const handleToppingChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTopping(e.target.value)
  }

  const handleAddTopping = () => {
    if (selectedTopping) {
      dispatch(addTopping(selectedTopping))
      setSelectedTopping("")
    }
  }

  return (
    <div className="container py-4">
      <div className="text-center mb-4">
        <a href="https://vite.dev" target="_blank" className="me-3">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1 className="text-center mb-4">Pizza Builder</h1>

      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="card-title mb-3">Current Toppings</h5>
          <p className="card-text">
            {pizza.toppings.length > 0
              ? pizza.toppings.map((topping: string) => topping).join(", ")
              : "No toppings selected yet"}
          </p>

          <div className="mb-4">
            <div className="row g-2 align-items-center">
              <div className="col-md-8">
                <select
                  className="form-select"
                  value={selectedTopping}
                  onChange={handleToppingChange}
                >
                  <option value="">Select a topping</option>
                  {AVAILABLE_TOPPINGS.map((topping) => (
                    <option key={topping} value={topping}>
                      {topping.charAt(0).toUpperCase() + topping.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-4">
                <button
                  className="btn btn-primary w-100"
                  onClick={handleAddTopping}
                  disabled={!selectedTopping}
                >
                  Add Topping
                </button>
              </div>
            </div>
          </div>

          <div className="d-flex flex-wrap gap-2">
            {pizza.toppings.map((topping: string) => (
              <button
                key={topping}
                className="btn btn-outline-danger"
                onClick={() => dispatch(removeTopping(topping))}
              >
                Remove {topping.charAt(0).toUpperCase() + topping.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      <p className="text-center text-muted mt-4">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
