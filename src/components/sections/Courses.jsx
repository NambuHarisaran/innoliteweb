import SectionHeader from '../ui/SectionHeader.jsx';
import CourseCard from '../ui/CourseCard.jsx';
import { courses } from '../../data/site.js';

export default function Courses() {
  return (
    <section id="courses" className="bg-offwhite py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="What You'll Learn"
          title="10 Cutting-Edge Courses"
          subtitle="From software to hardware — learn what the industry actually uses."
          className="mx-auto"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <CourseCard key={course.title} course={course} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
