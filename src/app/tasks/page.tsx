
export default async function Tasks() {
    const response= await fetch("http://localhost:3000/api/tasks",{
        cache:"no-store"
    })
    const task=await response.json()
    
    console.log(task)
    return (
    <div>page</div>
  )
}
