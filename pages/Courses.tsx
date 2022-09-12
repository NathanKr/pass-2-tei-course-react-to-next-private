import stylesCourses from  "styles/Courses.module.css";
import stylesCoursesData from  "styles/CoursesData.module.css";
import ICourse from "../src/Interfaces/ICourse";
import Head from "next/head";
import Image from "next/image";
import { FC } from "react";
import { getHostUrl } from "src/logic/utils";

interface IProps{
  courses : ICourse[]
}

export async function getStaticProps() {
  let props : IProps = {courses : []}

  const res = await fetch(`${getHostUrl()}/api/courses`);
  props.courses = await res.json()

  return {
    props // will be passed to the page component as props
  }
}


const Courses : FC<IProps> = ({courses}) => {

  const onlineCourses = courses.map((course, index) => (
    <div key={index} className={stylesCoursesData.courseOnline}>
      <div className={stylesCoursesData.course_img}>
        <Image
          src={course.imgSrc}
          alt="coursePic"
          layout="fill"
          objectFit="cover"
          priority ={index == 0 ? true : false}
        />
        <a href={course.href} className={stylesCoursesData.course_btn_enroll}>
          Enroll
        </a>
      </div>
      <div className={stylesCoursesData.course_name_text}>
        <p>{course.courseName}</p>
      </div>
    </div>
  ));

const onlineCoursesClassName = `${stylesCourses.Courses_main_container} ${stylesCourses.coursesInnerContainer}`

  return (
    <div className={stylesCourses.Courses}>
      <Head>
        <title>Nathan Krasney | React Courses & Mentoring</title>
        <meta
          name="description"
          content="Join my unique online react courses. Learn the concepts of react and learn to learn. Contact me for more info"
        />
      </Head>
      <div className={stylesCourses.Courses_main_container}>
        <h1 className={stylesCourses.Courses_online_title}>Online Courses</h1>

        <div className={onlineCoursesClassName}>
          {onlineCourses}
        </div>
      </div>
    </div>
  );
};

export default Courses;
