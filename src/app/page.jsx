import { prisma } from "@/libs/prisma";
import TaskCard from "@/components/TaskCard";

const loadTask = async () => {
  //OBTENIENDO DATOS DE LA DB
  //OPCION 1: Llamando al backend

  // const res = await fetch ("http://localhost:3000/api/tasks");
  // const data = await res.json();
  // console.log(data)

  //OPCION 2: consultando directamente a la db
  //(Mejor usar cuando el back está en el mismo proyecto)
  return await prisma.task.findMany();
};
const HomePage = async () => {
  const tasks = await loadTask();
  console.log(tasks);
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-3 gap-3 mt-10">
        {tasks.map((task) => (
          <TaskCard task={task} key={task.id} />
        ))}
      </div>
    </section>
  );
};

export default HomePage;
