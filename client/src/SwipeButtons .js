import React from 'react'
import './Swipebuttons.css'
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';
import { Icon } from '@material-ui/core';

export default function SwipeButtons () {
  return (
    <div className="swipebuttons">
        <IconButton>
            <ReplayIcon fontSize="large" className="replay"/>
        </IconButton>
        <IconButton>
            <CloseIcon fontSize="large" className="close"/>
        </IconButton>
        <IconButton>
            <StarRateIcon fontSize="large" className="star"/>
        </IconButton>
        <IconButton>
            <FavoriteIcon fontSize="large" className="fav"/>
        </IconButton>
        <IconButton>
            <FlashOnIcon fontSize="large" className="flash"/>
        </IconButton>
        
      
    </div>
  )
}
