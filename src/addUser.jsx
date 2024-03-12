import Form from "./components/form"

const AddUserPage = () => {
    return(

        <div className=" w-full flex justify-center items-center flex-col gap-y-2 mt-10 ">
        <div className="bg-gray-200 rounded-md border max-w-screen-md h-20 w-full flex justify-center items-center">
          <h1 className="text-4xl font-semibold">Añadir Usuarios</h1>
        </div>
        <div className="bg-gray-200 rounded-md border border-gray-100 w-full p-2 max-w-screen-md">
            <Form />
        </div>
        
      </div>
    )

}
export default AddUserPage