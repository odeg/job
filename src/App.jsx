import Header from "./components/header"
import Table from "./components/table"

function App() {
  return (
    
    <div className=" w-full flex justify-center items-center flex-col gap-y-2 mt-10 ">
      <div className="bg-gray-200 rounded-md border max-w-screen-md h-20 w-full flex justify-center items-center">
        <h1 className="text-4xl font-semibold">Tabla de Usuarios</h1>
      </div>
      <div className="bg-gray-200 rounded-md border border-gray-100 w-full p-2 max-w-screen-md">
        <Table />
      </div>
      
    </div>
  )
}

export default App