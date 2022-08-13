import React from 'react'
import { useParams } from 'react-router-dom'

export default function MovieShow({ movies }) {

    //takes the parameter defined in the Route wrapping this component
    //as a key and assigns it a value when directed
    const params = useParams()
    console.log(params)
    return (
        <div>
            <h3>{movies[params.movieID].title}</h3>
        </div>
    )
}
