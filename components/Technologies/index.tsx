export const Tag = ({ children }: any) => {
  return (
    <div className="p-2 rounded-lg cursor-pointer shadow-lg shadow-indigo-500/40 border-2 rounded-lg border-gray-500 hover:border-blue-500 transition ease-in-out delay-150 hover:scale-105 duration-500 mr-2 mb-2">
      <p className="text-gray-300">{children}</p>
    </div>
  )
}

const Technologies = () => {
  return (
    <div className="my-10 flex flex-col w-full">
      <h3 className="text-gray-100 text-2xl mb-5">Technologies</h3>
      <div className="flex flex-row flex-wrap">
        <Tag>React</Tag>
        <Tag>React Native</Tag>
        <Tag>NextJS</Tag>
        <Tag>GatsbyJS</Tag>
        <Tag>Redux</Tag>
        <Tag>GraphQL</Tag>
        <Tag>NodeJS</Tag>
        <Tag>MongoDB</Tag>
        <Tag>NoSQL</Tag>
        <Tag>SQL</Tag>
        <Tag>SQLite</Tag>
        <Tag>Postgres</Tag>
        <Tag>Python</Tag>
        <Tag>Java</Tag>
        <Tag>AWS</Tag>
        <Tag>Heroku</Tag>
        <Tag>Docker</Tag>
        <Tag>Web3</Tag>
        <Tag>Typescript</Tag>
      </div>
    </div>
  )
}

export default Technologies
