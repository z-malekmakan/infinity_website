export  const getCourses = async ()=>{
    const res = await fetch("http://localhost:8000/courses");
    return res.json();
}