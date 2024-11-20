import { projectsItems } from '@/data/projectsItems'
import React from 'react'

const RecentProjects = () => {
  return (
    <div className="py-20">
        <h1 className="heading">
          A small selection of
          <span className="text-purple pl-4">
            recent projects
          </span>
        </h1>
        {/* IN CONTINUATION */}
        <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
          {projectsItems.map((item) => (
            <div key={item.id}>
              {item.iconsList.map((icon) => <img key={icon} src={icon} />)}
            </div>
          ))}
        </div>
    </div>
  )
}

export default RecentProjects