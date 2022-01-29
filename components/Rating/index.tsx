import ReactStars from 'react-stars'

const Rating = ({ value, count = 5 }: any) => (
  <ReactStars count={count} value={value} color2={'#ffd700'} edit={false} />
)

export default Rating
