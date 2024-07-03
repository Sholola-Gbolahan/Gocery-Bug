import { useState } from "react"
import { Form } from "./Form"

const App = () => {
  const [items, setItems] = useState()

  return (
    <div>
      <section className="section-center">
        <Form />
      </section>
    </div>
  )
}

export default App
