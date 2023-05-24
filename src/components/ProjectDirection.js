import React from 'react';
import Image from 'next/image'
import {
  CpuChipIcon,
  Cog6ToothIcon,
  PuzzlePieceIcon,
  BeakerIcon,
  XMarkIcon,
  GlobeAltIcon,
  AcademicCapIcon,
  StarIcon
} from '@heroicons/react/24/outline'

import GithubIcon from "../../public/images/GithubIcon.svg"
import DiscordIcon from "../../public/images/discord.svg"

export default function ProjectsConfigs(props) {
  let classDirection = '';
  let iconDirection = '';
  if (props.direction) {
    classDirection = 'flex items-start justify-start mt-14 mb-8 esquerda';
    iconDirection = 'flex';
  } else {
    classDirection = 'flex items-start justify-start mt-14 mb-8 direita';
    iconDirection = 'flex items-start justify-end';
  }

  let icon = ''
  if (props.icon2 == 'discord') {
    icon = DiscordIcon;
  } else {
    icon = GithubIcon;
  }

  let Icon = '';
  switch (props.icon) {
    case 'beaker':
      Icon = BeakerIcon;
      break
    case 'puzzle':
      Icon = PuzzlePieceIcon;
      break
    case 'cog':
      Icon = Cog6ToothIcon;
      break
    case 'globe':
      Icon = GlobeAltIcon;
      break
    case 'cpu':
      Icon = CpuChipIcon;
      break;
    case 'academic':
      Icon = AcademicCapIcon;
      break;
    case 'star':
      Icon = StarIcon;
      break;
    default:
      Icon = XMarkIcon;
  }

  return (
    <div className={classDirection}>
      <div className="projectsfixer">
        <div className={iconDirection}>
          <Icon className="h-8 w-6" aria-hidden="true" />
          <h2 className="ml-1 mt-1">{props.titulo}</h2>
        </div>
        <div className='flex-col'>
          <div>
            <p className="text-gray-600 text-justify">{props.texto}</p>
          </div>
          <div className="h-5 w-5">
            <a href={props.gitLink} target='_blank' ><Image src={icon} alt='github' /></a>
          </div>
        </div>
      </div>
    </div>

  )
}