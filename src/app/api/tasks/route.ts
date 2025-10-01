

interface Task{
    id:number,
    title:string,
    completed:boolean
}

interface CreateTaskRequest{
    title:string
}

let tasks:Task[]=[
    {id:1,title:"learn Next.js", completed:false},{
    id:2,title:"build a Next js project", completed:false
    }
]

export async function GET() {
    return Response.json(tasks)
}

export async function POST(req:Request) {
    try {
        const body:CreateTaskRequest=await req.json();
        if(!body.title){
            return Response.json({error:"Title is required"},{status:400})
        }
        const newTask:Task={
            id:tasks.length+1,
            title:body.title,
            completed:false
        }
        tasks.push(newTask)
        return Response.json(newTask,{status:201})
    } catch{
        return Response.json({ error: "Invalid request body" }, { status: 400 });
    }
}