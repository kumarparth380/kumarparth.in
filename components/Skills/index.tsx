import { skills } from '../../constants'
import Rating from '../Rating'

export default () => {
  return (
    <div className="my-8">
      <h3 className="text-gray-100 text-2xl mb-5">Skills</h3>
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="flex flex-row justify-between p-3 my-4 cursor-pointer shadow-lg shadow-indigo-500/40 border-2 rounded-lg border-gray-500 hover:border-blue-500 transition ease-in-out delay-150 hover:scale-105 duration-500">
          <p className="text-gray-300 text-lg">{skill.name}</p>
          <Rating value={skill.rating} />
        </div>
      ))}
    </div>
  )
}
