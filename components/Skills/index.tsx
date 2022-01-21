import ReactStars from 'react-stars'
import { skills } from '../../constants'

export const Rating = ({ value, count = 5 }: any) => (
  <ReactStars count={count} value={value} color2={'#ffd700'} />
)

export default () => {
  return (
    <div>
      {skills.map((skill) => (
        <div key={skill.name}>
          <div className="flex flex-row justify-between border-sky-500 cursor-pointer">
            <p>{skill.name}</p>
            <Rating value={skill.rating} />
          </div>
        </div>
      ))}
    </div>
  )
}
