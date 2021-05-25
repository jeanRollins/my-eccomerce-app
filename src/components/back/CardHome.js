import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia } from '@material-ui/core';

export const CardHome = ({ file , text }) => {
    return (
        <Card >
            <CardActionArea>
                <CardMedia
                    alt="Contemplative Reptile"
                    title ="Contemplative Reptile"
                    className="p-top-2"
                >
                    <img className="w-100" style={{ height: '120px'}} alt = "..." src= { file } / >
                </CardMedia>
                <CardContent>
                    <h2 className="text-center text-secondary"> { text } </h2>
                 
                </CardContent>
            </CardActionArea>
          
        </Card>

    )
}
