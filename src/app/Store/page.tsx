import { getCourses } from "@/components/APIgetData";
import Container from "@/components/Container";
import CourseItem from "@/components/CourseItem";
import { ICourseItem } from "@/interfaces/interfaces";
import React from "react";

async function Store() {
  const result = await getCourses();
  console.log(result);
  
  
  return (
    <Container>
      <h1 className="mt-50 mb-10 px-10 text-center lg:text-left text-7xl text-cyan-950">courses</h1>
      <div className="px-10 grid grid-cols-1 lg:grid-cols-4 gap-4">
        {
          result.map((item:ICourseItem )=> {
            return <CourseItem key={item.id} {...item}/>
            console.log(item);
            
          })
        }
        {/* <CourseItem/>
        <CourseItem/>
        <CourseItem/>
        <CourseItem/>
        <CourseItem/>
        <CourseItem/>
        <CourseItem/>
        <CourseItem/>
        <CourseItem/> */}
      </div>
    </Container>
  );
}

export default Store;
