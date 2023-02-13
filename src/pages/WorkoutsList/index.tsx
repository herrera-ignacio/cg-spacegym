import useWorkouts from "../../hooks/useWorkouts";

function WorkoutsListPage() {
  const workouts = useWorkouts();
  return <div>{workouts.map(w => (<p>{w.title}</p>))}</div> 
}

export default WorkoutsListPage;
