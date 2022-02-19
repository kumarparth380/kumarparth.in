import { IExternalLink } from '../../types'

export default function ExternalLink({ url, name }: IExternalLink) {
  return (
    <a
      target={'_blank'}
      rel="noreferrer"
      className="text-gray-100 tracking-widest text-lg inline-block my-2 mr-10 pb-1 border-gray-100 border-solid border-b-2"
      href={url}>
      {name}
    </a>
  )
}
