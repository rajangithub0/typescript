interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const fetchData = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    console.log("Todo", response);
    if(!response.ok){
        throw new Error(`http error ${response.status}`)
    }
    const data:Todo =await response.json()

  } catch (error: any) {
    if ((error)) {
      console.log("axios Error", error.message);
      if (error.response) {
        console.log(error.response.status);
      }
    }
  }
};