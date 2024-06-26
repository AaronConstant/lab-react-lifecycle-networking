import React from "react";
import NavBar from "./Components/NavBar";
import EmployeeList from "./Components/EmployeeList";


function App () {

// const [error,setError] = useState();
// const [employees, setEmployees] = useState();
// const [isLoading, setIsLoading] = useState(false);
// const [pets, setPets] = useState()


// abort controller to cancel any previous request if making a new current request Link: https://www.youtube.com/watch?v=00lxm_doFYw&t=1372s

// useEffect(() => {

//   const fetchEmployees = async (string, setter) => {
//     setIsLoading(true)

//     try{

//       const initialResponse = await fetch(`https://vet-app-0obi.onrender.com/api/${string}`);
      
//       const data =  await initialResponse.json()

//       setter(data)

//     } catch (error) {

//       setError(error)

//     }
    
//     setIsLoading(false);
//   }

//   fetchEmployees('pets', setPets);
//   fetchEmployees('employees', setEmployees)




  // fetch("https://vet-app-0obi.onrender.com/api/employees")
  //   .then(response => {
  //     // if it is not true it will run this error
  //     if(!response.ok) {
  //       throw new Error("No Data was fetched")
  //     }
  //     //should return data converted to json.
  //     return response.json();
  //   })
  //   .then(data => {
  //     //sets employee as data for access.
  //     setEmployees(data)
  //   })
  //   .catch(error => {
  //     //throws error if they is an issue fetching data.
  //     console.error("Error was found fetching data:", error)
  //   })
// },[])


// if(isLoading) {
//   return <div>Loading...</div>
// }

// if(error) {
//   return <div> {`${error} `} Occurred!</div>
// }

  return (
    <>
      <NavBar />
      <EmployeeList />
    </>
  );
};

export default App;
