import React from 'react'
import DockerIcon from '../../icons/docker.png'
import JSIcon from '../../icons/JS.png'
import RubyIcon from '../../icons/ruby.png'
import RailsIcon from '../../icons/rails.png'
import ReactIcon from '../../icons/react.png'
import ReactNativeIcon from '../../icons/react-native.png'
import ReduxIcon from '../../icons/redux.png'
import PHPIcon from '../../icons/php.png'
import PostgresIcon from '../../icons/postgres.png'
import SASSIcon from '../../icons/sass.png'
import RedisIcon from '../../icons/redis.png'
import HerokuIcon from '../../icons/heroku.png'
import GithubIcon from '../../icons/github.png'
import GitIcon from '../../icons/git.png'
import ReactRouterIcon from '../../icons/react-router.png'
import BootstrapIcon from '../../icons/bootstrap.png'
import MaterialUIIcon from '../../icons/materialui.png'

export default function Icon(skill) {

  const Icon = ({ icon }) => {
    switch (icon) {
      case 'JS': return <img src={JSIcon} className='icons'></img>
      case 'Ruby': return <img src={RubyIcon} className='icons'></img>
      case 'Rails': return <img src={RailsIcon} className='icons'></img>
      case 'React': return <img src={ReactIcon} className='icons'></img>
      case 'React Native': return <img src={ReactNativeIcon} className='icons'></img>
      case 'Redux': return <img src={ReduxIcon} className='icons'></img>
      case 'PHP': return <img src={PHPIcon} className='icons'></img>
      case 'Postgres': return <img src={PostgresIcon} className='icons'></img>
      case 'HTML/SCSS': return <img src={SASSIcon} className='icons'></img>
      case 'Redis': return <img src={RedisIcon} className='icons'></img>
      case 'Heroku': return <img src={HerokuIcon} className='icons'></img>
      case 'Github': return <img src={GithubIcon} className='icons'></img>
      case 'Git': return <img src={GitIcon} className='icons'></img>
      case 'Docker': return <img src={DockerIcon} className='icons'></img>
      case 'React-Router': return <img src={ReactRouterIcon} className='icons'></img>
      case 'Bootstrap': return <img src={BootstrapIcon} className='icons'></img>
      case 'MUI': return <img src={MaterialUIIcon} className='icons'></img>
      default: return null
    }
  }

  return (
    <Icon icon={skill.icon} />
  )
}
